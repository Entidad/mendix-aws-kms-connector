package awskms.actions;

import awskms.KmsConnectorService;
import awskms.dto.CreateKeyRequest;
import awskms.dto.CreateKeyResponse;

/**
 * Mendix Custom Java Action: CreateKey
 * Creates a new customer-managed KMS key
 */
public class CreateKey {

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
