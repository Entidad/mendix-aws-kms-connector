import awskms.KmsConnectorService;
import awskms.actions.CreateKey;
import awskms.actions.Encrypt;
import awskms.actions.Decrypt;
import awskms.actions.GenerateDataKey;
import awskms.dto.*;

/**
 * Simple Test Class for AWS KMS Connector Module
 * 
 * This class demonstrates how to use the KMS connector module
 * and can be extended with actual unit tests using JUnit.
 */
public class KmsConnectorTest {

    // Sample AWS credentials and key (replace with actual values)
    private static final String AWS_ACCESS_KEY = "AKIA...";
    private static final String AWS_SECRET_KEY = "...";
    private static final String AWS_REGION = "us-east-1";

    public static void main(String[] args) {
        System.out.println("=== AWS KMS Connector Module Test ===\n");

        try {
            // Test 1: Create Key
            testCreateKey();
            
            // Test 2: Encrypt/Decrypt
            testEncryptDecrypt();
            
            // Test 3: Generate Data Key
            testGenerateDataKey();

            System.out.println("\n=== All tests completed ===");
            
        } catch (Exception e) {
            System.out.println("Test failed: " + e.getMessage());
            e.printStackTrace();
        }
    }

    /**
     * Test: Create a new KMS key
     */
    public static void testCreateKey() {
        System.out.println("Test 1: Create Customer-Managed Key");
        System.out.println("-----------------------------------");

        // This would normally be called from Mendix, but shown here for illustration
        CreateKeyResponse response = awskms.actions.CreateKey.execute(
                AWS_ACCESS_KEY,
                AWS_SECRET_KEY,
                AWS_REGION,
                "Test Encryption Key",
                "ENCRYPT_DECRYPT"
        );

        if (response.isSuccess()) {
            System.out.println("✓ Key created successfully");
            System.out.println("  Key ID: " + response.getKeyId());
            System.out.println("  Key ARN: " + response.getKeyArn());
        } else {
            System.out.println("✗ Failed to create key");
            System.out.println("  Error: " + response.getErrorMessage());
        }
        System.out.println();
    }

    /**
     * Test: Encrypt and Decrypt a message
     */
    public static void testEncryptDecrypt() {
        System.out.println("Test 2: Encrypt and Decrypt");
        System.out.println("---------------------------");

        String originalData = "This is sensitive information";
        String keyId = "arn:aws:kms:us-east-1:123456789012:key/..."; // Replace with actual key

        // Encrypt
        EncryptResponse encryptResponse = awskms.actions.Encrypt.execute(
                AWS_ACCESS_KEY,
                AWS_SECRET_KEY,
                AWS_REGION,
                keyId,
                originalData
        );

        if (!encryptResponse.isSuccess()) {
            System.out.println("✗ Encryption failed: " + encryptResponse.getErrorMessage());
            return;
        }

        System.out.println("✓ Encryption successful");
        System.out.println("  Original: " + originalData);
        System.out.println("  Encrypted (base64): " + encryptResponse.getCiphertextBlob().substring(0, 50) + "...");

        // Decrypt
        DecryptResponse decryptResponse = awskms.actions.Decrypt.execute(
                AWS_ACCESS_KEY,
                AWS_SECRET_KEY,
                AWS_REGION,
                encryptResponse.getCiphertextBlob()
        );

        if (!decryptResponse.isSuccess()) {
            System.out.println("✗ Decryption failed: " + decryptResponse.getErrorMessage());
            return;
        }

        System.out.println("✓ Decryption successful");
        System.out.println("  Decrypted: " + decryptResponse.getPlaintext());

        // Verify round-trip
        if (decryptResponse.getPlaintext().equals(originalData)) {
            System.out.println("✓ Round-trip test PASSED - Data matches!");
        } else {
            System.out.println("✗ Round-trip test FAILED - Data mismatch!");
        }
        System.out.println();
    }

    /**
     * Test: Generate a data key for envelope encryption
     */
    public static void testGenerateDataKey() {
        System.out.println("Test 3: Generate Data Key");
        System.out.println("-------------------------");

        String keyId = "arn:aws:kms:us-east-1:123456789012:key/..."; // Replace with actual key

        GenerateDataKeyResponse response = awskms.actions.GenerateDataKey.execute(
                AWS_ACCESS_KEY,
                AWS_SECRET_KEY,
                AWS_REGION,
                keyId,
                "AES_256"
        );

        if (response.isSuccess()) {
            System.out.println("✓ Data key generated successfully");
            System.out.println("  Key Spec: AES_256");
            System.out.println("  Plaintext Key (base64): " + response.getPlaintext().substring(0, 50) + "...");
            System.out.println("  Encrypted Key (base64): " + response.getEncryptedDataKey().substring(0, 50) + "...");
            System.out.println("  Usage: Encrypt large data with plaintext key locally");
            System.out.println("         Store encrypted key with encrypted data");
        } else {
            System.out.println("✗ Failed to generate data key");
            System.out.println("  Error: " + response.getErrorMessage());
        }
        System.out.println();
    }
}
