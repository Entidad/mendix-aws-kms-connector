package awskms.dto;

public class GenerateDataKeyRequest {
    private String keyId;
    private String keySpec;

    public GenerateDataKeyRequest() {}

    public GenerateDataKeyRequest(String keyId, String keySpec) {
        this.keyId = keyId;
        this.keySpec = keySpec;
    }

    public String getKeyId() {
        return keyId;
    }

    public void setKeyId(String keyId) {
        this.keyId = keyId;
    }

    public String getKeySpec() {
        return keySpec;
    }

    public void setKeySpec(String keySpec) {
        this.keySpec = keySpec;
    }
}
