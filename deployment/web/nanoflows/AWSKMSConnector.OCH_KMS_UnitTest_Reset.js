import { addEnumerations, t } from "mendix";

export const OCH_KMS_UnitTest_Reset = {
  "name": "AWSKMSConnector.OCH_KMS_UnitTest_Reset",
  "instructions": [
    {
      "type": "switch",
      "label": "2c691fcb-ba59-43a1-970c-f2ff11219319",
      "condition": {
        "type": "function",
        "name": "=",
        "parameters": [
          {
            "type": "function",
            "name": "trim",
            "parameters": [
              {
                "type": "variable",
                "variable": "UnitTest",
                "path": "PlainText"
              }
            ]
          },
          {
            "type": "literal",
            "value": ""
          }
        ]
      },
      "targets": {
        "true": "cbeb8001-e190-412a-bfd3-3a3d8bbb1d73",
        "false": "b82f559b-fb1a-4721-9acb-df1f6ffe4fe4"
      }
    },
    {
      "type": "return",
      "label": "b82f559b-fb1a-4721-9acb-df1f6ffe4fe4",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "changeObject",
      "label": "cbeb8001-e190-412a-bfd3-3a3d8bbb1d73",
      "inputVar": "UnitTest",
      "member": "CipherBlob",
      "value": {
        "type": "literal",
        "value": ""
      }
    },
    {
      "type": "changeObject",
      "inputVar": "UnitTest",
      "member": "DecryptedText",
      "value": {
        "type": "literal",
        "value": ""
      }
    },
    {
      "type": "return",
      "label": "0db1f209-2dc1-4df8-b834-8019634f12bf",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
