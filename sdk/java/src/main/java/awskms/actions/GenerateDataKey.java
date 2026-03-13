package awskms.actions;

import awskms.KmsConnectorService;
import awskms.dto.GenerateDataKeyRequest;
import awskms.dto.GenerateDataKeyResponse;

/**
 * Mendix Custom Java Action: GenerateDataKey
 * Generates a data key for envelope encryption
 */
public class GenerateDataKey {

    public static GenerateDataKeyResponse execute(
            String accessKey,
            String secretKey,
            String region,
            String keyId,
            String keySpec) {
        
        KmsConnectorService kmsService = new KmsConnectorService(accessKey, secretKey, region);
        try {
            GenerateDataKeyRequest request = new GenerateDataKeyRequest(keyId, keySpec);
            GenerateDataKeyResponse response = kmsService.generateDataKey(request);
            return response;
        } finally {
            kmsService.close();
        }
    }
}
