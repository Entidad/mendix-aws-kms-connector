# AWS KMS Connector - Quick Start Guide

## 5-Minute Setup

### Step 1: Build the Module (2 minutes)

```bash
cd awskms
export MAVEN_HOME="$HOME/maven/apache-maven-3.9.6" && "$MAVEN_HOME/bin/mvn" clean install -DskipTests
```

**Expected Output:**
```
BUILD SUCCESS
```

### Step 2: Deploy to Mendix (1 minute)

Copy the JAR file to your Mendix project:
```
awskms-connector-1.0.0-jar-with-dependencies.jar → YourProject/userlib/
```

Then restart Mendix Studio Pro.

### Step 3: Create Test Microflow (2 minutes)

**Microflow: TestKMSEncryption**

```
1. Create Variables:
   Input: None
   
   Internal Variables:
   - $AccessKey = "YOUR_AWS_ACCESS_KEY"
   - $SecretKey = "YOUR_AWS_SECRET_KEY"  
   - $Region = "us-east-1"
   - $KeyId = "arn:aws:kms:us-east-1:ACCOUNT:key/..."
   - $PlainText = "Hello KMS World"

2. Add Java Action: Encrypt
   - accessKey: $AccessKey
   - secretKey: $SecretKey
   - region: $Region
   - keyId: $KeyId
   - plaintext: $PlainText

3. Add Decision: Check Success
   - If $EncryptResponse.success = true:
     • Show message: "Encryption successful: " + $EncryptResponse.ciphertextBlob
   - Else:
     • Show error: "Error: " + $EncryptResponse.errorMessage

4. Run the microflow and verify encryption works
```

## First Use Checklist

- [ ] Have AWS account with KMS access
- [ ] Created IAM user with KMS permissions
- [ ] Have Access Key ID and Secret Access Key
- [ ] Created at least one KMS key in AWS
- [ ] Built the Maven project successfully
- [ ] Copied JAR to userlib
- [ ] Restarted Mendix Studio Pro
- [ ] Can see Java actions in Mendix
- [ ] Created test microflow
- [ ] Test encryption succeeded

## Common Tasks

### Task 1: Create a KMS Key

```
Microflow: CreateKMSKey
Input: keyDescription (String)

1. Call: CreateCustomerManagedKey
   - accessKey: $AWS_ACCESS_KEY
   - secretKey: $AWS_SECRET_KEY
   - region: $AWS_REGION
   - description: $keyDescription
   - keyUsage: "ENCRYPT_DECRYPT"

2. If success: Store $CreateKeyResponse.keyId
3. Else: Show error message
```

### Task 2: Encrypt User Data

```
Microflow: EncryptUserData
Input: User object with plaintext field
       KmsKeyId

1. Call: Encrypt
   - accessKey: $AWS_ACCESS_KEY
   - secretKey: $AWS_SECRET_KEY
   - region: $AWS_REGION
   - keyId: $KmsKeyId
   - plaintext: $User.PlaintextField

2. Update user entity:
   - $User.EncryptedField = $EncryptResponse.ciphertextBlob
   - Commit
```

### Task 3: Decrypt User Data

```
Microflow: DecryptUserData
Input: User object with encrypted field

1. Call: Decrypt
   - accessKey: $AWS_ACCESS_KEY
   - secretKey: $AWS_SECRET_KEY
   - region: $AWS_REGION
   - ciphertextBlob: $User.EncryptedField

2. Return: $DecryptResponse.plaintext
```

## Troubleshooting Quick Fixes

| Problem | Solution |
|---------|----------|
| JAR not found in Mendix | Restart Mendix Studio Pro |
| "Cannot find class" error | Copy JAR to userlib folder again |
| Authentication error | Verify Access Key and Secret Key in AWS console |
| Key not found error | Verify KMS key ID exists in specified region |
| Plaintext too large error | Plaintext limited to 4KB; use GenerateDataKey for larger data |

## Important Notes

1. **Credentials**: Never commit AWS credentials to version control
   - Use environment variables or constants
   - Use Mendix Secrets Manager in production

2. **Data Encoding**: 
   - Plaintext: UTF-8 strings
   - Ciphertext: Base64 encoded
   - Data keys: Base64 encoded

3. **Limits**:
   - Direct encryption: 4 KB maximum plaintext
   - Use envelope encryption (GenerateDataKey) for larger data

## Next Steps

1. Read [README.md](README.md) for complete module documentation
2. Read [CONFIGURATION.md](CONFIGURATION.md) for production deployment
3. Review Java actions in src/main/java/awskms/actions/

## Support

- AWS KMS Docs: https://docs.aws.amazon.com/kms/
- Mendix Docs: https://docs.mendix.com/
