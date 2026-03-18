import { createElement } from "react";
const React = { createElement };

import { PlaceholderProperty } from "mendix/PlaceholderProperty";

import { Placeholder } from "mendix/widgets/web/Placeholder";
import { addEnumerations, asPluginWidgets, t } from "mendix";


const { $Placeholder } = asPluginWidgets({ Placeholder });

const region$Main = [
    <$Placeholder key="l.Encryption.PopupLayout.Main"
        $widgetId="l.Encryption.PopupLayout.Main"
        content={PlaceholderProperty({
            "id": "Encryption.PopupLayout.Main"
        })} />
];

export const content = {
    "Main": region$Main,
};
