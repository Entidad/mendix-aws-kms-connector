# AWS KMS Connector Module - Configuration Guide

## Module Configuration

This document provides detailed implementation instructions for integrating the AWS KMS Connector module into your Mendix application.

## Initial Setup

### 1. Build the Module JAR

```bash
cd path\to\awskms
mvn clean install
```

This will generate:
- `awskms-connector-1.0.0.jar` - The module JAR
- `awskms-connector-1.0.0-jar-with-dependencies.jar` - JAR with all dependencies (recommended)

### 2. Deploy to Mendix

Copy the JAR file (preferably the one with dependencies) to your Mendix project's userlib folder:

```
YourMendixProject/
└── userlib/
    └── awskms-connector-1.0.0-jar-with-dependencies.jar
```

### 3. Refresh Mendix Studio Pro

In Mendix Studio Pro:
1. Click **Project** → **Synchronize Project Directory**
2. Or restart Mendix Studio Pro to reload libraries

## AWS Credentials Configuration

### Option 1: Mendix Constants (Recommended for Development)

Create constants in your Mendix app:

1. In Mendix Studio Pro, go to **Project** → **Settings**
2. Add these constants:
   - `AWS_ACCESS_KEY` (String) - Your AWS Access Key ID
   - `AWS_SECRET_KEY` (String) - Your AWS Secret Access Key
   - `AWS_REGION` (String) - Default region (e.g., "us-east-1")

### Option 2: Encrypted System Configuration (Recommended for Production)

Use Mendix Secrets Manager:
1. Store sensitive credentials in Mendix Secrets
2. Retrieve them at runtime using `System.getEnvironmentVariable()`

Example microflow pseudocode:
```
$AccessKey = System.getEnvironmentVariable('AWS_ACCESS_KEY')
$SecretKey = System.getEnvironmentVariable('AWS_SECRET_KEY')
$Region = System.getEnvironmentVariable('AWS_REGION')
```

### Option 3: Database-Stored Credentials

Create an entity to store encrypted credentials:

```
entity: AWSCredentials
  accessKey: STRING (encrypted)
  secretKey: STRING (encrypted)
  region: STRING
  isActive: BOOLEAN
  createdDate: DATETIME
```

## Module Usage in Microflows

### Example 1: Create KMS Key with Error Handling

Create a microflow called `CreateEncryptionKey`:

```
1. Input Parameters:
   - keyDescription (String): Description of the key

2. Retrieve Credentials:
   - Create variable: $AccessKey = 'your-access-key'
   - Create variable: $SecretKey = 'your-secret-key'
   - Create variable: $Region = 'us-east-1'

3. Call Action:
   - Drag CreateCustomerManagedKey Java action
   - Parameters:
     * accessKey = $AccessKey
     * secretKey = $SecretKey
     * region = $Region
     * description = $keyDescription
     * keyUsage = 'ENCRYPT_DECRYPT'

4. Check Success:
   - If/Else decision: $CreateKeyResponse.success = true
   
   YES path:
   - Log 'Key created: ' + $CreateKeyResponse.keyId
   - Store keyId in your Entity
   
   NO path:
   - Log error: $CreateKeyResponse.errorMessage
   - Show error message to user
```

### Example 2: Encrypt Sensitive Data

Create a microflow called `EncryptSensitiveData`:

```
1. Input Parameters:
   - dataToEncrypt (String): Sensitive data
   - kmsKeyId (String): The KMS key ID

2. Call Encrypt Action:
   - Drag Encrypt Java action
   - Parameters:
     * accessKey = $AWS_ACCESS_KEY
     * secretKey = $AWS_SECRET_KEY
     * region = $AWS_REGION
     * keyId = $kmsKeyId
     * plaintext = $dataToEncrypt

3. Handle Response:
   - If $EncryptResponse.success = true
     * Store $EncryptResponse.ciphertextBlob in Entity
   - Else
     * Log error: $EncryptResponse.errorMessage
```

### Example 3: Decrypt Data at Retrieval

Create a microflow called `DecryptSensitiveData`:

```
1. Input Parameters:
   - encryptedData (String): Base64-encoded encrypted data

2. Call Decrypt Action:
   - Drag Decrypt Java action
   - Parameters:
     * accessKey = $AWS_ACCESS_KEY
     * secretKey = $AWS_SECRET_KEY
     * region = $AWS_REGION
     * ciphertextBlob = $encryptedData

3. Retrieve Plaintext:
   - If $DecryptResponse.success = true
     * Return $DecryptResponse.plaintext
   - Else
     * Throw error with message
```

### Example 4: Envelope Encryption (Bulk Data)

For encrypting large datasets, use GenerateDataKey:

```
1. Generate Local Data Key:
   - Call GenerateDataKey Java action
   - Get: $DataKeyResponse.plaintext (for local encryption/decryption)
   - Store: $DataKeyResponse.encryptedDataKey (with encrypted data)

2. Use Plaintext Key Locally:
   - Use $DataKeyResponse.plaintext with local encryption library
   - Encrypt your bulk data

3. Store Together:
   - Store encrypted data
   - Store $DataKeyResponse.encryptedDataKey with the data
   - Discard the plaintext key after use

4. Decrypt Later:
   - Call Decrypt with stored encryptedDataKey
   - Get plaintext key back
   - Use plaintext key to decrypt your bulk data locally
```

## Entity Design Examples

### User Credentials Storage Entity

```
entity: UserSensitiveData
  user: Reference to User (many-to-one)
  dataType: ENUMERATION (SSN, CreditCard, etc.)
  encryptedValue: STRING
  kmsKeyId: STRING
  createdDate: DATETIME
  modifiedDate: DATETIME
  isActive: BOOLEAN

Index: user + dataType (unique constraint)
```

### KMS Key Management Entity

```
entity: KMSKeyManagement
  keyId: STRING (unique)
  keyArn: STRING
  description: STRING
  createdDate: DATETIME
  lastUsedDate: DATETIME
  isActive: BOOLEAN
  keyUsage: STRING
  status: ENUMERATION (Active, Inactive, Scheduled_for_Deletion)
```

## Best Practices

### 1. Error Handling
Always check the `success` flag in responses:

```java
if (response.success) {
    // Process successful response
} else {
    // Log error.errorMessage
    // Notify user appropriately
    // Consider retry logic for transient failures
}
```

### 2. Connection Management
The module automatically closes KMS client connections after each operation. For high-throughput scenarios, consider:
- Implementing connection pooling
- Batching operations to reduce connection overhead

### 3. Credential Rotation
- Change AWS credentials regularly
- Update Mendix constants when credentials change
- Use AWS credential rotation features

### 4. Logging
Create a microflow to log all KMS operations:

```
entity: KMSAuditLog
  operation: STRING (CreateKey, Encrypt, Decrypt, etc.)
  timestamp: DATETIME
  keyId: STRING
  success: BOOLEAN
  errorMessage: STRING
  user: Reference to User
```

### 5. Performance Optimization

For bulk operations:
```
// Instead of encrypting each item individually:
// 1. Generate one data key
// 2. Use local encryption for all items with that key
// 3. Store encrypted data key securely

This reduces KMS API calls significantly
```

## Testing the Module

### Unit Test Example

Create a test microflow `TEST_EncryptDecryptRoundTrip`:

```
1. Define test data:
   - $TestPlaintext = "Hello AWS KMS"
   - $AccessKey = Your AWS Key
   - $SecretKey = Your AWS Secret

2. Encrypt:
   - Call Encrypt action
   - Assert $EncryptResponse.success = true

3. Decrypt:
   - Call Decrypt action with $EncryptResponse.ciphertextBlob
   - Assert $DecryptResponse.plaintext = $TestPlaintext

4. Success:
   - Log "Round-trip test passed!"
```

## Troubleshooting

### JAR Not Found
- Verify file exists in userlib folder
- Check file permissions are readable
- Restart Mendix Studio Pro

### Authentication Error
```
Symptoms: "AccessDeniedException" or "The request is unauthorized"

Solutions:
1. Verify AWS_ACCESS_KEY and AWS_SECRET_KEY are correct
2. Check IAM permissions include: kms:Encrypt, kms:Decrypt, etc.
3. Verify region is correct
4. Check if credentials have expired
```

### Key Not Found
```
Symptoms: "NotFoundException" or "Invalid keyId"

Solutions:
1. Verify keyId is complete and correct
2. Ensure key exists in the specified region
3. Check key is not scheduled for deletion
```

### Large Data Encryption Error
```
Symptoms: "PlaintextTooLargeException"

Solution:
- Maximum plaintext size for direct encryption: 4 KB
- For larger data, use GenerateDataKey (envelope encryption)
```

## Integration Checklist

- [ ] Downloaded and built module JAR
- [ ] Deployed JAR to userlib folder
- [ ] Restarted Mendix Studio Pro
- [ ] Created AWS credentials constants
- [ ] Verified IAM permissions in AWS
- [ ] Created test microflow
- [ ] Tested encryption/decryption round-trip
- [ ] Implemented error handling in microflows
- [ ] Added audit logging
- [ ] Documented key IDs used in application
- [ ] Set up credential rotation policy
- [ ] Deployed to acceptance environment
- [ ] Tested in production environment

## Support Resources

- **AWS KMS Documentation**: https://docs.aws.amazon.com/kms/
- **Mendix Java Actions**: https://docs.mendix.com/refguide/java-actions/
- **AWS SDK for Java v2**: https://docs.aws.amazon.com/sdk-for-java/
