package awskms.actions;

import awskms.KmsConnectorService;
import awskms.dto.CreateKeyRequest;
import awskms.dto.CreateKeyResponse;

/**
 * Mendix Custom Java Action: CreateCustomerManagedKey
 * Creates a new customer-managed KMS key for encryption operations
 * 
 * This action initializes a KMS service with AWS credentials and creates
 * a new customer-managed key that can be used for subsequent encrypt/decrypt operations.
 */
public class CreateCustomerManagedKey {

    /**
     * Executes the create customer-managed key operation
     * 
     * @param accessKey AWS Access Key ID for authentication
     * @param secretKey AWS Secret Access Key for authentication
     * @param region AWS region code (e.g., "us-east-1", "eu-west-1")
     * @param description Human-readable description of the key
     * @param keyUsage The operation(s) for which the key can be used:
     *                 - "ENCRYPT_DECRYPT": For encryption and decryption operations
     *                 - "SIGN_VERIFY": For cryptographic signing and verification
     * 
     * @return CreateKeyResponse containing:
     *         - keyId: The unique identifier for the created key
     *         - keyArn: The Amazon Resource Name (ARN) of the key
     *         - success: Boolean indicating if operation succeeded
     *         - errorMessage: Error details if operation failed
     */
    public static CreateKeyResponse execute(
            String accessKey,
            String secretKey,
            String region,
            String description,
            String keyUsage) {
        
        KmsConnectorService kmsService = new KmsConnectorService(accessKey, secretKey, region);
        try {
            CreateKeyRequest request = new CreateKeyRequest(description, keyUsage);
            CreateKeyResponse response = kmsService.createKey(request);
            return response;
        } finally {
            kmsService.close();
        }
    }
}
