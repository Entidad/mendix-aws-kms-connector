package awskms;

import awskms.dto.CreateKeyRequest;
import awskms.dto.CreateKeyResponse;
import awskms.dto.EncryptRequest;
import awskms.dto.EncryptResponse;
import awskms.dto.DecryptRequest;
import awskms.dto.DecryptResponse;
import awskms.dto.GenerateDataKeyRequest;
import awskms.dto.GenerateDataKeyResponse;

import software.amazon.awssdk.auth.credentials.AwsBasicCredentials;
import software.amazon.awssdk.auth.credentials.StaticCredentialsProvider;
import software.amazon.awssdk.core.SdkBytes;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.kms.KmsClient;
import software.amazon.awssdk.services.kms.model.DataKeySpec;

import java.util.Base64;

public class KmsConnectorService {

    private KmsClient kmsClient;
    private String region;

    /**
     * Initialize KMS client with AWS credentials
     * @param accessKey AWS Access Key ID
     * @param secretKey AWS Secret Access Key
     * @param region AWS Region (e.g., "us-east-1")
     */
    public KmsConnectorService(String accessKey, String secretKey, String region) {
        this.region = region;
        AwsBasicCredentials awsCredentials = AwsBasicCredentials.create(accessKey, secretKey);
        this.kmsClient = KmsClient.builder()
                .region(Region.of(region))
                .credentialsProvider(StaticCredentialsProvider.create(awsCredentials))
                .build();
    }

    /**
     * Create a new customer-managed KMS key
     * @param request CreateKeyRequest containing key description and key usage
     * @return CreateKeyResponse with key ID and ARN
     */
    public CreateKeyResponse createKey(CreateKeyRequest request) {
        try {
            software.amazon.awssdk.services.kms.model.CreateKeyRequest awsRequest = 
                    software.amazon.awssdk.services.kms.model.CreateKeyRequest.builder()
                    .description(request.getDescription())
                    .keySpec(request.getKeySpec())
                    .keyUsage(request.getKeyUsage())
                    .build();

            software.amazon.awssdk.services.kms.model.CreateKeyResponse awsResponse = 
                    kmsClient.createKey(awsRequest);

            CreateKeyResponse response = new CreateKeyResponse();
            response.setKeyId(awsResponse.keyMetadata().keyId());
            response.setKeyArn(awsResponse.keyMetadata().arn());
            response.setSuccess(true);

            return response;
        } catch (Exception e) {
            CreateKeyResponse response = new CreateKeyResponse();
            response.setSuccess(false);
            response.setErrorMessage(e.getMessage());
            return response;
        }
    }

    /**
     * Encrypt data using a KMS key
     * @param request EncryptRequest containing plaintext and key ID
     * @return EncryptResponse with encrypted data (base64 encoded)
     */
    public EncryptResponse encrypt(EncryptRequest request) {
        try {
            byte[] plaintextBytes = request.getPlaintext().getBytes("UTF-8");

            software.amazon.awssdk.services.kms.model.EncryptRequest awsRequest = 
                    software.amazon.awssdk.services.kms.model.EncryptRequest.builder()
                    .keyId(request.getKeyId())
                    .plaintext(SdkBytes.fromByteArray(plaintextBytes))
                    .build();

            software.amazon.awssdk.services.kms.model.EncryptResponse awsResponse = 
                    kmsClient.encrypt(awsRequest);

            String encryptedBase64 = Base64.getEncoder()
                    .encodeToString(awsResponse.ciphertextBlob().asByteArray());

            EncryptResponse response = new EncryptResponse();
            response.setCiphertextBlob(encryptedBase64);
            response.setKeyId(awsResponse.keyId());
            response.setSuccess(true);

            return response;
        } catch (Exception e) {
            EncryptResponse response = new EncryptResponse();
            response.setSuccess(false);
            response.setErrorMessage(e.getMessage());
            return response;
        }
    }

    /**
     * Decrypt data encrypted with KMS
     * @param request DecryptRequest containing encrypted data (base64 encoded)
     * @return DecryptResponse with decrypted plaintext
     */
    public DecryptResponse decrypt(DecryptRequest request) {
        try {
            byte[] ciphertextBytes = Base64.getDecoder().decode(request.getCiphertextBlob());

            software.amazon.awssdk.services.kms.model.DecryptRequest awsRequest = 
                    software.amazon.awssdk.services.kms.model.DecryptRequest.builder()
                    .ciphertextBlob(SdkBytes.fromByteArray(ciphertextBytes))
                    .keyId(request.getKeyId())
                    .build();

            software.amazon.awssdk.services.kms.model.DecryptResponse awsResponse = 
                    kmsClient.decrypt(awsRequest);

            String plaintextString = new String(awsResponse.plaintext().asByteArray(), "UTF-8");

            DecryptResponse response = new DecryptResponse();
            response.setPlaintext(plaintextString);
            response.setKeyId(awsResponse.keyId());
            response.setSuccess(true);

            return response;
        } catch (Exception e) {
            DecryptResponse response = new DecryptResponse();
            response.setSuccess(false);
            response.setErrorMessage(e.getMessage());
            return response;
        }
    }

    /**
     * Generate a data key for envelope encryption
     * @param request GenerateDataKeyRequest containing key ID and key spec
     * @return GenerateDataKeyResponse with plaintext and encrypted data key
     */
    public GenerateDataKeyResponse generateDataKey(GenerateDataKeyRequest request) {
        try {
            DataKeySpec keySpec = DataKeySpec.fromValue(request.getKeySpec());

            software.amazon.awssdk.services.kms.model.GenerateDataKeyRequest awsRequest = 
                    software.amazon.awssdk.services.kms.model.GenerateDataKeyRequest.builder()
                    .keyId(request.getKeyId())
                    .keySpec(request.getKeySpec())
                    .build();

            software.amazon.awssdk.services.kms.model.GenerateDataKeyResponse awsResponse = 
                    kmsClient.generateDataKey(awsRequest);

            String plaintextBase64 = Base64.getEncoder()
                    .encodeToString(awsResponse.plaintext().asByteArray());
            String ciphertextBase64 = Base64.getEncoder()
                    .encodeToString(awsResponse.ciphertextBlob().asByteArray());

            GenerateDataKeyResponse response = new GenerateDataKeyResponse();
            response.setPlaintext(plaintextBase64);
            response.setEncryptedDataKey(ciphertextBase64);
            response.setKeyId(awsResponse.keyId());
            response.setSuccess(true);

            return response;
        } catch (Exception e) {
            GenerateDataKeyResponse response = new GenerateDataKeyResponse();
            response.setSuccess(false);
            response.setErrorMessage(e.getMessage());
            return response;
        }
    }

    /**
     * Get key details
     * @param keyId KMS Key ID or ARN
     * @return Key metadata
     */
    public String describeKey(String keyId) {
        try {
            software.amazon.awssdk.services.kms.model.DescribeKeyRequest request = 
                    software.amazon.awssdk.services.kms.model.DescribeKeyRequest.builder()
                    .keyId(keyId)
                    .build();

            software.amazon.awssdk.services.kms.model.DescribeKeyResponse response = 
                    kmsClient.describeKey(request);
            return response.keyMetadata().toString();
        } catch (Exception e) {
            throw new RuntimeException("Failed to describe key: " + e.getMessage(), e);
        }
    }

    /**
     * Close the KMS client connection
     */
    public void close() {
        if (kmsClient != null) {
            kmsClient.close();
        }
    }
}
