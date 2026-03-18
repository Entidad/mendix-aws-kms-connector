package awskms.dto;

public class CreateKeyRequest {
    private String description;
    private String keyUsage;
    private String keySpec;

    public CreateKeyRequest() {}

    public CreateKeyRequest(String description, String keyUsage, String keySpec) {
        this.description = description;
        this.keyUsage = keyUsage;
        this.keySpec = keySpec;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getKeySpec() {
        return keySpec;
    }

    public void setKeySpec(String keySpec) {
        this.keySpec = keySpec;
    }

    public String getKeyUsage() {
        return keyUsage;
    }

    public void setKeyUsage(String keyUsage) {
        this.keyUsage = keyUsage;
    }
}
