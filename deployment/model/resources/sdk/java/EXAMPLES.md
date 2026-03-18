# AWS KMS Connector - Usage Examples

## Complete Working Examples

This document provides complete, ready-to-use microflow examples for the AWS KMS Connector module.

## Example 1: Secure Password Storage

**Scenario**: Store user passwords encrypted with KMS

### Microflow: `CreateUserWithEncryptedPassword`

**Input Parameters:**
- `username` (String) - New user username
- `password` (String) - User's password (plaintext)
- `kmsKeyId` (String) - KMS Key ID for encryption

**Steps:**

```
1. Initialize:
   Variable: $timestamp = '[%CurrentDateTime%]'

2. Validate Input:
   Decision: $password != empty AND $username != empty
   
   If false:
     Show error message: "Username and password required"
     Return empty

3. Encrypt Password:
   Java Action: Encrypt
   - accessKey: $AWS_ACCESS_KEY
   - secretKey: $AWS_SECRET_KEY
   - region: $AWS_REGION
   - keyId: $kmsKeyId
   - plaintext: $password

4. Check Encryption Success:
   Decision: $EncryptResponse.success = true
   
   If false:
     Show error: "Failed to encrypt password: " + $EncryptResponse.errorMessage
     Return empty

5. Create User:
   Create new User object:
   - username = $username
   - encryptedPassword = $EncryptResponse.ciphertextBlob
   - kmsKeyId = $kmsKeyId
   - createdDate = $timestamp
   - isActive = true
   - Commit

6. Log and Return:
   Log: "User created with encrypted password: " + $username
   Return: new User object
```

**Microflow: `AuthenticateUserWithEncryptedPassword`**

**Input Parameters:**
- `username` (String) - Username
- `providedPassword` (String) - Password to check
- `user` (User object) - Retrieved user from database

**Steps:**

```
1. Check User Exists:
   Decision: $user != empty
   
   If false:
     Log: "User not found: " + $username
     Return: false

2. Decrypt Stored Password:
   Java Action: Decrypt
   - accessKey: $AWS_ACCESS_KEY
   - secretKey: $AWS_SECRET_KEY
   - region: $AWS_REGION
   - ciphertextBlob: $user.encryptedPassword

3. Check Decryption Success:
   Decision: $DecryptResponse.success = true
   
   If false:
     Log error: $DecryptResponse.errorMessage
     Return: false

4. Compare Passwords:
   Variable: $storedPassword = $DecryptResponse.plaintext
   Decision: $storedPassword = $providedPassword
   
   If true:
     Log: "Authentication successful for: " + $username
     Return: true
   
   If false:
     Log: "Authentication failed for: " + $username
     Return: false
```

---

## Example 2: Encrypt PII (Personally Identifiable Information)

**Scenario**: Encrypt sensitive customer data (SSN, credit card)

### Data Model:

```
Entity: Customer
  - name (String)
  - email (String)
  - ssn_encrypted (String) - Encrypted SSN
  - ssn_kms_key_id (String)

Entity: CreditCard
  - customer (Reference to Customer)
  - last4Digits (String)
  - cardNumber_encrypted (String) - Encrypted card number
```

### Microflow: `StoreCustomerSSN`

**Input Parameters:**
- `customer` (Customer object)
- `ssn` (String) - Plain SSN
- `kmsKeyId` (String) - KMS Key for encryption

**Steps:**

```
1. Encrypt SSN:
   Java Action: Encrypt
   - accessKey: $AWS_ACCESS_KEY
   - secretKey: $AWS_SECRET_KEY
   - region: $AWS_REGION
   - keyId: $kmsKeyId
   - plaintext: $ssn

2. Check Success:
   Decision: $EncryptResponse.success = true
   
   If false:
     Throw error: "Failed to encrypt SSN"

3. Store Encrypted SSN:
   Modify: $customer
   - ssn_encrypted = $EncryptResponse.ciphertextBlob
   - ssn_kms_key_id = $kmsKeyId
   - Commit

4. Audit Log:
   Create AuditLog:
   - action = "Encrypt SSN"
   - customer = $customer
   - timestamp = [%CurrentDateTime%]
   - success = true
   
   Return $customer
```

### Microflow: `RetrieveCustomerSSN`

**Input Parameters:**
- `customer` (Customer object)

**Steps:**

```
1. Check Data Exists:
   Decision: $customer.ssn_encrypted != empty
   
   If false:
     Return: "No SSN stored"

2. Decrypt:
   Java Action: Decrypt
   - accessKey: $AWS_ACCESS_KEY
   - secretKey: $AWS_SECRET_KEY
   - region: $AWS_REGION
   - ciphertextBlob: $customer.ssn_encrypted

3. Check Success:
   Decision: $DecryptResponse.success = true
   
   If false:
     Log error: $DecryptResponse.errorMessage
     Return: "Failed to decrypt SSN"

4. Audit and Return:
   Create AuditLog:
   - action = "Decrypt SSN"
   - customer = $customer
   - success = true
   
   Return: $DecryptResponse.plaintext (SSN)
```

---

## Example 3: Envelope Encryption for Bulk Data Export

**Scenario**: Encrypt large customer data export files

### Microflow: `ExportCustomerDataEncrypted`

**Input Parameters:**
- `customers` (List of Customer)
- `kmsKeyId` (String) - KMS Key for data key generation

**Steps:**

```
1. Generate Data Key:
   Java Action: GenerateDataKey
   - accessKey: $AWS_ACCESS_KEY
   - secretKey: $AWS_SECRET_KEY
   - region: $AWS_REGION
   - keyId: $kmsKeyId
   - keySpec: "AES_256"

2. Check Success:
   Decision: $GenerateDataKeyResponse.success = true
   
   If false:
     Throw error: "Failed to generate data key"

3. Initialize:
   Variable: $dataKey = $GenerateDataKeyResponse.plaintext
   Variable: $encryptedDataKey = $GenerateDataKeyResponse.encryptedDataKey
   List: $exportRows = empty list

4. Build Export Data:
   Loop through $customers:
     For each customer:
       - Create export row with customer data
       - Use local encryption with $dataKey (AES-256)
       - Add encrypted row to $exportRows

5. Create Export File:
   Create JSON/CSV with:
   - Encrypted customers data
   - Encrypted data key: $encryptedDataKey
   - Timestamp
   - Metadata

6. Store Export:
   Create ExportRecord:
   - filename = "export_" + [%CurrentDateTime%]
   - encryptedDataKey = $encryptedDataKey (store encrypted key with file)
   - createdDate = [%CurrentDateTime%]
   - Commit

7. Clear Sensitive Data:
   Variable: $dataKey = null (clear from memory)
   
   Return: $ExportRecord
```

### Microflow: `ImportAndDecryptCustomerData`

**Input Parameters:**
- `exportRecord` (ExportRecord) - Contains encrypted data key
- `encryptedData` (String) - The bulk encrypted data

**Steps:**

```
1. Prepare Keys:
   Variable: $encryptedDataKey = $exportRecord.encryptedDataKey

2. Decrypt Data Key:
   Java Action: Decrypt
   - accessKey: $AWS_ACCESS_KEY
   - secretKey: $AWS_SECRET_KEY
   - region: $AWS_REGION
   - ciphertextBlob: $encryptedDataKey

3. Check Success:
   Decision: $DecryptResponse.success = true
   
   If false:
     Log error: "Failed to decrypt data key"
     Return empty

4. Use Data Key:
   Variable: $dataKey = $DecryptResponse.plaintext
   
   Local decryption of $encryptedData using $dataKey (AES-256)
   Result: $decryptedData

5. Process Data:
   Parse $decryptedData and create Customer objects
   
6. Clear Memory:
   Variable: $dataKey = null
   
   Return: List of Customer objects
```

---

## Example 4: Multi-Region Key Management

**Scenario**: Use KMS keys from different AWS regions

### Microflow: `EncryptWithMultiRegionKey`

**Input Parameters:**
- `plaintext` (String)
- `region` (String) - AWS Region
- `kmsKeyId` (String) - Key ID

**Steps:**

```
1. Validate Region:
   Decision: $region in ["us-east-1", "eu-west-1", "ap-southeast-1"]
   
   If false:
     Return error response

2. Encrypt with Region:
   Java Action: Encrypt
   - accessKey: $AWS_ACCESS_KEY
   - secretKey: $AWS_SECRET_KEY
   - region: $region
   - keyId: $kmsKeyId
   - plaintext: $plaintext

3. Store Metadata:
   If $EncryptResponse.success:
     Return object with:
     - ciphertext = $EncryptResponse.ciphertextBlob
     - region = $region
     - keyId = $kmsKeyId
     - timestamp = [%CurrentDateTime%]

4. Return Response
```

---

## Example 5: Error Handling and Retry Logic

**Microflow: `RobustEncrypt`** (with retry logic)

**Input Parameters:**
- `plaintext` (String)
- `kmsKeyId` (String)
- `maxRetries` (Integer) - Default: 3

**Steps:**

```
1. Initialize:
   Variable: $attempt = 0
   Variable: $maxRetries = 3
   Variable: $success = false

2. Retry Loop:
   While $attempt < $maxRetries AND $success = false:
   
     Increment $attempt
     
     Try:
       Java Action: Encrypt
       - accessKey: $AWS_ACCESS_KEY
       - secretKey: $AWS_SECRET_KEY
       - region: $AWS_REGION
       - keyId: $kmsKeyId
       - plaintext: $plaintext
       
       If $EncryptResponse.success = true:
         Variable: $success = true
         Break loop
       
       If "ThrottlingException" in $EncryptResponse.errorMessage:
         Wait: 2000ms (exponential backoff: 2 ^ attempt)
         Continue loop
       
       Else:
         Variable: $success = false
         Break loop

3. Final Check:
   Decision: $success = true
   
   If true:
     Return: $EncryptResponse
   
   If false:
     Create ErrorLog:
     - error = "Encryption failed after 3 attempts"
     - details = $EncryptResponse.errorMessage
     
     Throw error
```

---

## Example 6: Audit Trail and Compliance

**Microflow: `EncryptWithAudit`**

**Input Parameters:**
- `plaintext` (String)
- `kmsKeyId` (String)
- `dataClassification` (String) - PUBLIC, INTERNAL, CONFIDENTIAL, SECRET
- `purpose` (String) - Why data is being encrypted

**Steps:**

```
1. Pre-encryption Audit:
   Create AuditLog:
   - action = "Encrypt"
   - dataClassification = $dataClassification
   - purpose = $purpose
   - kmsKeyId = $kmsKeyId
   - timestamp = [%CurrentDateTime%]
   - actor = [%CurrentUser%]
   - status = "INITIATED"

2. Encrypt:
   Java Action: Encrypt
   - accessKey: $AWS_ACCESS_KEY
   - secretKey: $AWS_SECRET_KEY
   - region: $AWS_REGION
   - keyId: $kmsKeyId
   - plaintext: $plaintext

3. Post-encryption Audit:
   Modify AuditLog:
   - status = $EncryptResponse.success ? "SUCCESS" : "FAILED"
   - errorMessage = $EncryptResponse.errorMessage
   - completedTime = [%CurrentDateTime%]
   - Commit

4. Return Response:
   If $EncryptResponse.success:
     Return: $EncryptResponse.ciphertextBlob
   Else:
     Log and throw error
```

---

## Best Practices from Examples

1. **Always Check Success Flag**
   ```
   if (response.success) {
       // Use response data
   } else {
       // Handle error: response.errorMessage
   }
   ```

2. **Clear Sensitive Data from Memory**
   ```
   Variable: $plaintext = null (after encryption/decryption)
   Variable: $password = null
   ```

3. **Log Operations for Audit**
   - What operation (Create, Encrypt, Decrypt)
   - When it occurred (timestamp)
   - Who performed it (current user)
   - Success/failure status

4. **Use Appropriate Key Specs**
   - `AES_128` - Lighter weight, faster
   - `AES_256` - Higher security, recommended

5. **Handle Throttling**
   - AWS has rate limits
   - Implement exponential backoff for retries
   - Monitor CloudWatch for throttling events

6. **Never Log Plaintexts or Keys**
   - Log only operations and metadata
   - Never log actual sensitive data
   - Encrypted values can be logged (base64)

---

## Testing Examples

### Unit Test: Encrypt/Decrypt Round Trip

```
Microflow: TEST_EncryptDecryptRoundTrip

1. Setup:
   Variable: $original = "Sensitive Test Data"
   
2. Encrypt:
   Call: Encrypt with $original
   Assert: $EncryptResponse.success = true
   
3. Decrypt:
   Call: Decrypt with $EncryptResponse.ciphertextBlob
   Assert: $DecryptResponse.success = true
   
4. Verify:
   Assert: $DecryptResponse.plaintext = $original
   
5. Result:
   Show message: "Round-trip test PASSED"
```

---

## Integration Points

### With Database Operations
```
- Encrypt before storing in database
- Decrypt after retrieving from database
- Consider performance impact of encrypt/decrypt operations
```

### With REST APIs
```
- Accept plaintext from API
- Encrypt before storing
- Retrieve and decrypt before returning via API
```

### With File Operations
```
- Use envelope encryption (GenerateDataKey) for large files
- Store encrypted data key with encrypted file
- Decrypt data key when needed for file decryption
```

### With Scheduled Events
```
- Batch encryption of new records
- Batch decryption for reports
- Monitor for errors and alert
```
