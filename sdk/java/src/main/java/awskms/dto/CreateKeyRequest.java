package awskms.dto;

public class CreateKeyRequest {
    private String description;
    private String keyUsage;

    public CreateKeyRequest() {}

    public CreateKeyRequest(String description, String keyUsage) {
        this.description = description;
        this.keyUsage = keyUsage;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getKeyUsage() {
        return keyUsage;
    }

    public void setKeyUsage(String keyUsage) {
        this.keyUsage = keyUsage;
    }
}
