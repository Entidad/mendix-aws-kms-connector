package awskms.dto;

public class DecryptRequest {
    private String ciphertextBlob;

    public DecryptRequest() {}

    public DecryptRequest(String ciphertextBlob) {
        this.ciphertextBlob = ciphertextBlob;
    }

    public String getCiphertextBlob() {
        return ciphertextBlob;
    }

    public void setCiphertextBlob(String ciphertextBlob) {
        this.ciphertextBlob = ciphertextBlob;
    }
}
