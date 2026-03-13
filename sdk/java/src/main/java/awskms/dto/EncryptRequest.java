package awskms.dto;

public class EncryptRequest {
    private String keyId;
    private String plaintext;

    public EncryptRequest() {}

    public EncryptRequest(String keyId, String plaintext) {
        this.keyId = keyId;
        this.plaintext = plaintext;
    }

    public String getKeyId() {
        return keyId;
    }

    public void setKeyId(String keyId) {
        this.keyId = keyId;
    }

    public String getPlaintext() {
        return plaintext;
    }

    public void setPlaintext(String plaintext) {
        this.plaintext = plaintext;
    }
}
