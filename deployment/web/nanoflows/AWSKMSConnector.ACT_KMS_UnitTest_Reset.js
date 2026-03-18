import { addEnumerations, t } from "mendix";

export const ACT_KMS_UnitTest_Reset = {
  "name": "AWSKMSConnector.ACT_KMS_UnitTest_Reset",
  "instructions": [
    {
      "type": "changeObject",
      "label": "a8d01331-63ca-4931-86ff-04c92031533a",
      "inputVar": "UnitTest",
      "member": "KeyId",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "UnitTest",
      "member": "KeySpec",
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
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "UnitTest",
      "member": "PlainText",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
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
      "type": "return",
      "label": "eed3bc9b-12d6-4001-9c48-554e216fa28b",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
