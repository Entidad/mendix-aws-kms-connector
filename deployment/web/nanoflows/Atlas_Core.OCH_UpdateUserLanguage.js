import { addEnumerations, t } from "mendix";

export const OCH_UpdateUserLanguage = {
  "name": "Atlas_Core.OCH_UpdateUserLanguage",
  "instructions": [
    {
      "type": "commitObjects",
      "label": "68ad1d40-1015-4e95-8345-d6ef7d7b2f4b",
      "operationId": "4FIE6/VWGlqRuw8hbGmx8w",
      "inputVar": "User"
    },
    {
      "type": "javaScriptActionCall",
      "label": "22b79be7-40b8-42ab-a3c0-322039def5cb",
      "action": () => require("C:/Users/jorge/Documents/Workspaces/Claude-ws/mendix-aws-kms-connector/javascriptsource/atlas_core/actions/ReloadWithState").ReloadWithState,
      "parameters": []
    },
    {
      "type": "return",
      "label": "68e5827e-1f20-4616-ac76-c31ba5e4dced",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
