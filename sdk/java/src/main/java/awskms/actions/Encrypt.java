package awskms.actions;

import awskms.KmsConnectorService;
import awskms.dto.EncryptRequest;
import awskms.dto.EncryptResponse;

/**
 * Mendix Custom Java Action: Encrypt
 * Encrypts plaintext using a KMS key
 */
public class Encrypt {

    public static EncryptResponse execute(
            String accessKey,
            String secretKey,
            String region,
            String keyId,
            String plaintext) {
        
        KmsConnectorService kmsService = new KmsConnectorService(accessKey, secretKey, region);
        try {
            EncryptRequest request = new EncryptRequest(keyId, plaintext);
            EncryptResponse response = kmsService.encrypt(request);
            return response;
        } finally {
            kmsService.close();
        }
    }
}
