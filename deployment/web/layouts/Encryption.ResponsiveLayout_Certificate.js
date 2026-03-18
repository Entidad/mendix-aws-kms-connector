import { createElement } from "react";
const React = { createElement };

import { PlaceholderProperty } from "mendix/PlaceholderProperty";

import { Placeholder } from "mendix/widgets/web/Placeholder";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "./Encryption.EncryptionDesktopLayout.js";

const { $Placeholder } = asPluginWidgets({ Placeholder });

const region$Main = [
    <$Placeholder key="l.Encryption.ResponsiveLayout_Certificate.Main"
        $widgetId="l.Encryption.ResponsiveLayout_Certificate.Main"
        content={PlaceholderProperty({
            "id": "Encryption.ResponsiveLayout_Certificate.Main"
        })} />
];

export const content = { ...parentContent,
    "Encryption.EncryptionDesktopLayout.Main": region$Main,
};
