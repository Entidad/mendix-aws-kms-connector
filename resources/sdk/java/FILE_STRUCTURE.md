# AWS KMS Connector Module - File Structure Guide

## Complete Module Overview

This document provides a comprehensive overview of all files in the AWS KMS Connector module.

## Directory Structure

```
awskms/
│
├── pom.xml                              # Maven build configuration
├── module.xml                           # Mendix module definition
│
├── CreateCustomerManagedKey.java        # Standalone action class (moved to actions/)
│
├── README.md                            # Complete module documentation
├── QUICKSTART.md                        # 5-minute getting started guide
├── CONFIGURATION.md                     # Detailed configuration and integration guide
├── EXAMPLES.md                          # Real-world usage examples
├── FILE_STRUCTURE.md                    # This file
│
└── src/
    ├── main/
    │   └── java/
    │       └── awskms/
    │           │
    │           ├── KmsConnectorService.java           # Core service class
    │           │   └── Implements all KMS operations
    │           │   └── Manages AWS SDK client lifecycle
    │           │   └── Handles encryption/decryption/key operations
    │           │
    │           ├── actions/                           # Mendix custom Java actions
    │           │   ├── CreateKey.java
    │           │   │   └── Creates customer-managed KMS keys
    │           │   ├── Encrypt.java
    │           │   │   └── Encrypts plaintext using KMS
    │           │   ├── Decrypt.java
    │           │   │   └── Decrypts ciphertext from KMS
    │           │   └── GenerateDataKey.java
    │           │       └── Generates keys for envelope encryption
    │           │
    │           └── dto/                               # Data Transfer Objects
    │               ├── CreateKeyRequest.java
    │               ├── CreateKeyResponse.java
    │               ├── EncryptRequest.java
    │               ├── EncryptResponse.java
    │               ├── DecryptRequest.java
    │               ├── DecryptResponse.java
    │               ├── GenerateDataKeyRequest.java
    │               └── GenerateDataKeyResponse.java
    │
    └── test/
        └── java/
            └── KmsConnectorTest.java                  # Test examples
                └── Demonstrates module usage
                └── Can be extended with JUnit tests
```

## File Descriptions

### Build Configuration

#### `pom.xml`
**Purpose**: Maven project build configuration
**Contains**:
- Project metadata (groupId, artifactId, version)
- AWS SDK v2 dependencies (KMS, SDK Core)
- Java compiler settings (Java 11)
- Maven plugins for building JAR with dependencies
- Test dependencies (JUnit)

**Usage**: Run `mvn clean install` to build the project

---

### Mendix Configuration

#### `module.xml`
**Purpose**: Mendix module definition and metadata
**Contains**:
- Module name and description
- Version information
- Java action definitions for Mendix
- Module constants (DefaultRegion, KeyUsage options)
- Documentation sections
- Parameter definitions for each Java action

**Usage**: Becomes metadata when module is imported into Mendix

---

### Core Implementation

#### `src/main/java/awskms/KmsConnectorService.java`
**Purpose**: Main service class implementing all KMS operations
**Class Methods**:
- `KmsConnectorService(String accessKey, String secretKey, String region)` - Constructor
- `createKey(CreateKeyRequest)` - Create new KMS key
- `encrypt(EncryptRequest)` - Encrypt plaintext
- `decrypt(DecryptRequest)` - Decrypt ciphertext
- `generateDataKey(GenerateDataKeyRequest)` - Generate envelope key
- `describeKey(String keyId)` - Get key details
- `close()` - Close AWS SDK client

**Key Features**:
- AWS SDK v2 KMS client initialization
- Base64 encoding/decoding of encrypted data
- Exception handling with error responses
- Automatic resource cleanup

**Dependencies**: AWS SDK v2 (kms, sdk-core)

---

### Java Actions (Mendix Custom Activities)

#### `src/main/java/awskms/actions/CreateKey.java`
**Purpose**: Mendix custom action for creating KMS keys
**Static Method**: `execute(String accessKey, String secretKey, String region, String description, String keyUsage)`
**Returns**: `CreateKeyResponse`
**Used In**: Mendix microflows via Java action activity

#### `src/main/java/awskms/actions/Encrypt.java`
**Purpose**: Mendix custom action for encryption
**Static Method**: `execute(String accessKey, String secretKey, String region, String keyId, String plaintext)`
**Returns**: `EncryptResponse`
**Used In**: Mendix microflows for encrypting sensitive data

#### `src/main/java/awskms/actions/Decrypt.java`
**Purpose**: Mendix custom action for decryption
**Static Method**: `execute(String accessKey, String secretKey, String region, String ciphertextBlob)`
**Returns**: `DecryptResponse`
**Used In**: Mendix microflows for decrypting encrypted data

#### `src/main/java/awskms/actions/GenerateDataKey.java`
**Purpose**: Mendix custom action for envelope encryption key generation
**Static Method**: `execute(String accessKey, String secretKey, String region, String keyId, String keySpec)`
**Returns**: `GenerateDataKeyResponse`
**Used In**: Mendix microflows for large data encryption

---

### Data Transfer Objects (DTOs)

#### `src/main/java/awskms/dto/CreateKeyRequest.java`
**Fields**:
- `description: String` - Human-readable key description
- `keyUsage: String` - "ENCRYPT_DECRYPT" or "SIGN_VERIFY"

#### `src/main/java/awskms/dto/CreateKeyResponse.java`
**Fields**:
- `keyId: String` - The created KMS key ID
- `keyArn: String` - AWS ARN of the key
- `success: boolean` - Operation status
- `errorMessage: String` - Error details if failed

#### `src/main/java/awskms/dto/EncryptRequest.java`
**Fields**:
- `keyId: String` - KMS key ID or ARN
- `plaintext: String` - Data to encrypt (UTF-8 string)

#### `src/main/java/awskms/dto/EncryptResponse.java`
**Fields**:
- `ciphertextBlob: String` - Base64-encoded encrypted data
- `keyId: String` - KMS key used
- `success: boolean` - Operation status
- `errorMessage: String` - Error details if failed

#### `src/main/java/awskms/dto/DecryptRequest.java`
**Fields**:
- `ciphertextBlob: String` - Base64-encoded encrypted data

#### `src/main/java/awskms/dto/DecryptResponse.java`
**Fields**:
- `plaintext: String` - Decrypted data
- `keyId: String` - KMS key used for decryption
- `success: boolean` - Operation status
- `errorMessage: String` - Error details if failed

#### `src/main/java/awskms/dto/GenerateDataKeyRequest.java`
**Fields**:
- `keyId: String` - KMS key ID or ARN
- `keySpec: String` - "AES_128" or "AES_256"

#### `src/main/java/awskms/dto/GenerateDataKeyResponse.java`
**Fields**:
- `plaintext: String` - Base64-encoded plaintext data key
- `encryptedDataKey: String` - Base64-encoded encrypted data key
- `keyId: String` - KMS key used
- `success: boolean` - Operation status
- `errorMessage: String` - Error details if failed

---

### Test Files

#### `src/test/java/KmsConnectorTest.java`
**Purpose**: Example test class demonstrating module usage
**Methods**:
- `main(String[] args)` - Runs all tests
- `testCreateKey()` - Tests key creation
- `testEncryptDecrypt()` - Tests encryption and decryption round-trip
- `testGenerateDataKey()` - Tests data key generation

**Usage**: Can be extended with JUnit test cases

---

### Documentation Files

#### `README.md`
**Contents**:
- Module overview and features
- Installation instructions
- Complete usage examples
- Java classes reference
- AWS permissions requirements
- Security considerations
- Error handling guide
- Dependencies
- Performance considerations
- Building from source
- Troubleshooting guide
- Version history

**Audience**: Developers implementing the module

#### `QUICKSTART.md`
**Contents**:
- 5-minute setup guide
- Build and deployment steps
- Create test microflow example
- First-use checklist
- Common tasks with code snippets
- Troubleshooting quick fixes
- Support resources

**Audience**: New users getting started quickly

#### `CONFIGURATION.md`
**Contents**:
- Module configuration guide
- AWS credentials setup options
- Module usage in microflows with examples
- Entity design patterns
- Best practices
- Testing procedures
- Integration checklist
- Troubleshooting for common issues

**Audience**: System integrators and architects

#### `EXAMPLES.md`
**Contents**:
- Complete working microflow examples
- Example 1: Secure password storage
- Example 2: Encrypt PII/sensitive data
- Example 3: Envelope encryption for bulk export
- Example 4: Multi-region key management
- Example 5: Error handling and retry logic
- Example 6: Audit trail and compliance
- Best practices from examples
- Testing examples
- Integration points

**Audience**: Developers building features using the module

---

## Build Output

When you run `mvn clean install`, the following JARs are created in the `target/` directory:

### `awskms-connector-1.0.0.jar`
- Module JAR without dependencies
- Smaller size
- Requires AWS SDK JARs to be present in classpath
- Use if you already have AWS SDK JARs

### `awskms-connector-1.0.0-jar-with-dependencies.jar` (RECOMMENDED)
- Module JAR with all dependencies bundled
- Larger size (~10+ MB)
- Self-contained, no additional JARs needed
- Recommended for Mendix deployment

---

## File Dependencies

### Maven Dependencies (pom.xml)
```
software.amazon.awssdk:kms:2.25.0
software.amazon.awssdk:sdk-core:2.25.0
junit:junit:4.13.2 (test)
```

### Java Class Dependencies
```
KmsConnectorService
  ├── Uses AWS SDK v2 classes
  └── Uses DTO classes for request/response

Java Actions (CreateKey, Encrypt, etc.)
  ├── Depend on KmsConnectorService
  ├── Depend on DTO classes
  └── Called from Mendix microflows

DTO Classes
  └── Simple data holders (no external dependencies)
```

---

## Deployment Steps

1. **Build**: `mvn clean install`
2. **Deploy JAR**: Copy `awskms-connector-1.0.0-jar-with-dependencies.jar` to `YourProject/userlib/`
3. **Restart Mendix**: Restart Mendix Studio Pro to load the JAR
4. **Use in Microflows**: Drag Java actions into your microflows

---

## Development Workflow

1. **Modify Source**: Edit files in `src/main/java/`
2. **Rebuild**: Run `mvn clean install`
3. **Redeploy**: Copy new JAR to userlib
4. **Refresh Mendix**: Restart Mendix or sync project directory
5. **Test**: Run test microflows

---

## File Maintenance

### Regular Updates
- Update AWS SDK version in pom.xml annually
- Review security patches from AWS SDK release notes
- Update documentation with new features

### Common Modifications
- Add new Java actions (create in `src/main/java/awskms/actions/`)
- Add new DTO classes (create in `src/main/java/awskms/dto/`)
- Update KmsConnectorService for new operations

### Documentation
- Update EXAMPLES.md with real-world use cases
- Update CONFIGURATION.md with integration patterns
- Maintain README.md with current version info

---

## Quick Reference

| Task | File(s) | Action |
|------|---------|--------|
| Build module | pom.xml | Run `mvn clean install` |
| Add Java action | src/main/java/awskms/actions/ | Create new Java class |
| Create DTO | src/main/java/awskms/dto/ | Create new class pair (Request/Response) |
| Update core logic | KmsConnectorService.java | Modify methods |
| Fix Mendix config | module.xml | Update action definitions |
| Debug in Mendix | EXAMPLES.md | Find similar example |
| Understand API | README.md | Read API reference section |
| Get started | QUICKSTART.md | Follow 5-minute setup |
