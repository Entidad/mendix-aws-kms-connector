package awskms.actions;

import awskms.KmsConnectorService;
import awskms.dto.DecryptRequest;
import awskms.dto.DecryptResponse;

/**
 * Mendix Custom Java Action: Decrypt
 * Decrypts ciphertext encrypted with a KMS key
 */
public class Decrypt {

    public static DecryptResponse execute(
            String accessKey,
            String secretKey,
            String region,
            String ciphertextBlob) {
        
        KmsConnectorService kmsService = new KmsConnectorService(accessKey, secretKey, region);
        try {
            DecryptRequest request = new DecryptRequest(ciphertextBlob);
            DecryptResponse response = kmsService.decrypt(request);
            return response;
        } finally {
            kmsService.close();
        }
    }
}
