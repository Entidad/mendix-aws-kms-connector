package awskms.dto;

public class DecryptRequest {
    private String ciphertextBlob;
    private String keyId;

    public DecryptRequest() {}

    public DecryptRequest(String keyId, String ciphertextBlob) {
        this.keyId = keyId;
        this.ciphertextBlob = ciphertextBlob;
    }

    public String getCiphertextBlob() {
        return ciphertextBlob;
    }

    public void setCiphertextBlob(String ciphertextBlob) {
        this.ciphertextBlob = ciphertextBlob;
    }

    public String getKeyId() {
        return keyId;
    }

    public void setKeyId(String keyId) {
        this.keyId = keyId;
    }
}
