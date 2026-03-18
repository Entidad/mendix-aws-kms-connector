import { addEnumerations, t } from "mendix";

addEnumerations({"AWSKMSConnector.ENUM_KeySpec":[["SYMMETRIC_DEFAULT",t(["Symmetric key encryption"])],["AES_128",t(["AES_128"])],["AES_256",t(["AES_256"])],["HMAC_224",t(["HMAC_224"])],["HMAC_256",t(["HMAC_256"])],["HMAC_384",t(["HMAC_384"])],["HMAC_512",t(["HMAC_512"])],["RSA_2048",t(["RSA_2048"])],["RSA_3072",t(["RSA_3072"])],["RSA_4096",t(["RSA_4096"])],["ECC_NIST_P256",t(["ECC_NIST_P256 (secp256r1)"])],["ECC_NIST_P384",t(["ECC_NIST_P384 (secp384r1)"])],["ECC_NIST_P521",t(["ECC_NIST_P521 (secp521r1)"])],["ECC_NIST_EDWARDS25519",t(["ECC_NIST_EDWARDS25519 (ed25519) - signing and verification only"])],["ECC_SECG_P256K1",t(["ECC_SECG_P256K1 (secp256k1), commonly used for cryptocurrencies"])],["ML_DSA_44",t(["ML_DSA_44"])],["ML_DSA_65",t(["ML_DSA_65"])],["ML_DSA_87",t(["ML_DSA_87"])],["SM2",t(["SM2 (China Regions only)"])]],"AWSKMSConnector.ENUM_KeyUsage":[["ENCRYPT_DECRYPT",t(["Symmetric encryption keys"])],["GENERATE_VERIFY_MAC",t(["HMAC (symmetric) signing keys"])],["SIGN_VERIFY",t(["Asymmetric keys with key pairs (RSA , ECC_SECG_P256K1, ML-DSA or SM2)"])],["KEY_AGREEMENT",t(["Asymmetric keys with NIST-standard elliptic curve key pairs"])]]});

export const OCh_UnitTest_KeySpec = {
  "name": "AWSKMSConnector.OCh_UnitTest_KeySpec",
  "instructions": [
    {
      "type": "changeObject",
      "label": "67e478d8-7691-49e3-b431-5a2d9ba8bd2e",
      "inputVar": "UnitTest",
      "member": "CipherBlob",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "UnitTest",
      "member": "DecryptedText",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "UnitTest",
      "member": "DataKeyCipherBlob",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "UnitTest",
      "member": "DataKeyPlainText",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "UnitTest",
      "member": "KeyUsage",
      "value": {
        "type": "conditional",
        "condition": {
          "type": "function",
          "name": "=",
          "parameters": [
            {
              "type": "variable",
              "variable": "UnitTest",
              "path": "KeySpec"
            },
            {
              "type": "literal",
              "value": "SYMMETRIC_DEFAULT"
            }
          ]
        },
        "then": {
          "type": "literal",
          "value": "ENCRYPT_DECRYPT"
        },
        "else": {
          "type": "variable",
          "variable": "UnitTest",
          "path": "KeyUsage"
        }
      }
    },
    {
      "type": "return",
      "label": "c14f1052-d52d-4c8a-b337-8559e2a434f1",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
