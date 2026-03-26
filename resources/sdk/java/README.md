# AWS KMS Client for Java

## Overview

This is a comprehensive AWS Key Management Service (KMS) java client compatible with Mendix applications. It provides Java-based custom classes that enable secure cryptographic operations using AWS KMS, including key creation, encryption, decryption, and data key generation.

## Features

- **Create Customer-Managed Keys**: Create new KMS keys for encryption operations
- **Encrypt Data**: Encrypt plaintext using AWS KMS
- **Decrypt Data**: Decrypt ciphertext encrypted with KMS
- **Generate Data Keys**: Create data keys for envelope encryption patterns
- **AWS Access Key Authentication**: Simple credential-based authentication
- **Error Handling**: Comprehensive exception handling with error messages

## Module Structure

```
mendix-aws-kms-connector/resources/sdk/java/
├── src/main/java/
│   └── awskms/
│       ├── KmsConnectorService.java          # Core KMS service
│       ├── CreateCustomerManagedKey.java     # Create key action
│       ├── actions/
│       │   ├── CreateKey.java
│       │   ├── Encrypt.java
│       │   ├── Decrypt.java
│       │   └── GenerateDataKey.java
│       └── dto/
│           ├── CreateKeyRequest.java
│           ├── CreateKeyResponse.java
│           ├── EncryptRequest.java
│           ├── EncryptResponse.java
│           ├── DecryptRequest.java
│           ├── DecryptResponse.java
│           ├── GenerateDataKeyRequest.java
│           └── GenerateDataKeyResponse.java
├── pom.xml                                    # Maven configuration
├── module.xml                                 # Mendix module definition
└── README.md                                  # This file
```

## Installation

### Prerequisites
- Mendix Studio Pro (v10.24.15 or later)
- Java 21 or higher
- Maven 3.6.0 or later
- AWS Account with KMS access

### Steps

1. **Download/Import the Module**
   - Clone or download this module into your Mendix project folder

2. **Build with Maven**
   ```bash
   cd resources/sdk/java/
   mvn clean install
   ```

3. **Import into Mendix**
   - Copy the JAR files from target directory to your Mendix userlib
   - Refresh Mendix Studio Pro

4. **Configure AWS Credentials**
   - Store AWS Access Key and Secret Key securely
   - Use Mendix constants or encrypted configuration

## Usage Examples

### 1. Create a Customer-Managed Key

```java
// In a Mendix microflow:
// Call the CreateCustomerManagedKey Java action with:
accessKey = "${AWS_ACCESS_KEY}"
secretKey = "${AWS_SECRET_KEY}"
region = "us-west-1"
description = "Application Symmetric Encryption Key"
keyUsage = "ENCRYPT_DECRYPT"
```

**Response Example:**
```
keyId = "arn:aws:kms:us-west-1:123456789012:key/abcd1234-a123-b456-c789-123456789012"
keyArn = "arn:aws:kms:us-west-1:123456789012:key/abcd1234-a123-b456-c789-123456789012"
success = true
```

### 2. Encrypt Data

```java
// In a Mendix microflow:
// Call the Encrypt Java action with:
accessKey = "${AWS_ACCESS_KEY}"
secretKey = "${AWS_SECRET_KEY}"
region = "us-west-1"
keyId = "arn:aws:kms:us-west-1:123456789012:key/abcd1234..."
plaintext = "Sensitive data to encrypt"
```

**Response Example:**
```
ciphertextBlob = "AQIDAHhYdv3s6Jz8vQ..." (base64 encoded)
keyId = "arn:aws:kms:us-west-1:123456789012:key/..."
success = true
```

### 3. Decrypt Data

```java
// In a Mendix microflow:
// Call the Decrypt Java action with:
accessKey = "${AWS_ACCESS_KEY}"
secretKey = "${AWS_SECRET_KEY}"
region = "us-west-1"
ciphertextBlob = "AQIDAHhYdv3s6Jz8vQ..." (from encryption)
```

**Response Example:**
```
plaintext = "Sensitive data to encrypt"
keyId = "arn:aws:kms:us-west-1:123456789012:key/..."
success = true
```

### 4. Generate Data Key

```java
// In a Mendix microflow - for envelope encryption:
// Call the GenerateDataKey Java action with:
accessKey = "${AWS_ACCESS_KEY}"
secretKey = "${AWS_SECRET_KEY}"
region = "us-east-1"
keyId = "arn:aws:kms:us-west-1:123456789012:key/abcd1234..."
keySpec = "AES_256"
```

**Response Example:**
```
plaintext = "nPlj4L+g/PkX4Q..." (base64 encoded, use for local encryption)
encryptedDataKey = "AQIDAHhYdv3s6Jz8vQ..." (base64 encoded, store with data)
keyId = "arn:aws:kms:us-west-1:123456789012:key/..."
success = true
```

## Java Classes Reference

### KmsConnectorService

Core service class for AWS KMS operations.

**Constructor:**
```java
public KmsConnectorService(String accessKey, String secretKey, String region)
```

**Methods:**
- `createKey(CreateKeyRequest)` - Create a new KMS key
- `encrypt(EncryptRequest)` - Encrypt plaintext
- `decrypt(DecryptRequest)` - Decrypt ciphertext
- `generateDataKey(GenerateDataKeyRequest)` - Generate envelope encryption key
- `describeKey(String keyId)` - Get key metadata
- `close()` - Close the KMS client connection

### Request/Response Classes

All request classes have standard getters and setters.

**CreateKeyRequest:**
- `description: String` - Key description
- `keyUsage: String` - "ENCRYPT_DECRYPT" or "SIGN_VERIFY"

**CreateKeyResponse:**
- `keyId: String` - KMS key identifier
- `keyArn: String` - Amazon Resource Name
- `success: boolean` - Operation status
- `errorMessage: String` - Error details (if failed)

**EncryptRequest:**
- `keyId: String` - KMS key ID or ARN
- `plaintext: String` - Data to encrypt

**EncryptResponse:**
- `ciphertextBlob: String` - Base64-encoded encrypted data
- `keyId: String` - KMS key used
- `success: boolean` - Operation status
- `errorMessage: String` - Error details (if failed)

**DecryptRequest:**
- `ciphertextBlob: String` - Base64-encoded encrypted data

**DecryptResponse:**
- `plaintext: String` - Decrypted data
- `keyId: String` - KMS key used
- `success: boolean` - Operation status
- `errorMessage: String` - Error details (if failed)

**GenerateDataKeyRequest:**
- `keyId: String` - KMS key ID or ARN
- `keySpec: String` - "AES_128" or "AES_256"

**GenerateDataKeyResponse:**
- `plaintext: String` - Base64-encoded plaintext data key
- `encryptedDataKey: String` - Base64-encoded encrypted data key
- `keyId: String` - KMS key used
- `success: boolean` - Operation status
- `errorMessage: String` - Error details (if failed)

## AWS Permissions Required

The AWS IAM user/role must have the following KMS permissions:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "kms:CreateKey",
        "kms:Encrypt",
        "kms:Decrypt",
        "kms:GenerateDataKey",
        "kms:DescribeKey"
      ],
      "Resource": "*"
    }
  ]
}
```

## Security Considerations

1. **Credential Management**: Never hardcode AWS credentials in your application
   - Use Mendix Secrets or encrypted constants
   - Consider using IAM roles if deployed on AWS

2. **Data Encoding**: Plaintext is transmitted in the request
   - Use HTTPS for all communications
   - Consider using TLS for data in transit

3. **Key Rotation**: Regularly rotate AWS credentials
   - Implement credential rotation policies
   - Use AWS Secrets Manager for credential storage

4. **Audit Logging**: Enable AWS CloudTrail to audit KMS operations
   - Track all key creation, encryption, and decryption activities

## Error Handling

All responses include a `success` boolean flag and optional `errorMessage`. Handle errors in your microflows:

```java
// After calling an action:
if (response.success == false) {
    // Log error: response.errorMessage
    // Handle gracefully
}
```

## Common Error Messages

- **"Failed to describe key"** - Invalid key ID or insufficient permissions
- **"The request is missing a required parameter"** - Missing parameter in request
- **"AccessDeniedException"** - Insufficient IAM permissions
- **"NotFoundException"** - Key not found in AWS KMS

## Dependencies

The module uses the following AWS SDK dependencies:

- `software.amazon.awssdk:kms:2.42.14` - AWS KMS client library
- `software.amazon.awssdk:sdk-core:2.42.14` - AWS SDK core library

See `pom.xml` for the complete dependency list.

## Performance Considerations

1. **Connection Reuse**: Each Java action creates a new KMS client
   - For high-throughput scenarios, consider implementing connection pooling

2. **Encryption Limits**:
   - Maximum plaintext size: 4 KB
   - For larger data, use envelope encryption (GenerateDataKey)

3. **API Rate Limits**: AWS KMS has standard API rate limits
   - Implement exponential backoff for retries

## Building from Source

```bash
# Clone the repository
git clone <repository-url>
cd awskms

# Build with Maven
mvn clean install

# Run tests
mvn test

# Build JAR with dependencies
mvn clean package assembly:single
```

## Support and Troubleshooting

### Issue: Module not appearing in Mendix Studio Pro
- Ensure JAR files are in the correct userlib directory
- Restart Mendix Studio Pro
- Check Maven build output for compilation errors

### Issue: "Cannot find class awskms.KmsConnectorService"
- Verify JAR files are copied to userlib
- Check that all AWS SDK JARs are included

### Issue: Authentication fails
- Verify AWS Access Key and Secret Key are correct
- Confirm IAM user has necessary KMS permissions
- Check AWS region is correct

## License

Apache License 2.0

## Version History

- **v1.0.0** (2024) - Initial release
  - Create customer-managed keys
  - Encrypt and decrypt operations
  - Generate data keys
  - AWS Access Key authentication

## Related Documentation

- [AWS KMS Documentation](https://docs.aws.amazon.com/kms/)
- [Mendix Java Actions](https://docs.mendix.com/refguide/java-actions/)
- [AWS SDK for Java](https://docs.aws.amazon.com/sdk-for-java/)
