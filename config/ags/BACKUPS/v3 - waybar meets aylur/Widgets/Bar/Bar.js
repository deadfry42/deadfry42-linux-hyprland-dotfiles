import { Volume } from "./Modules/Volume.js";
import { HyprlandWindow, HyprlandWorkspaces } from "./Modules/Hyprland.js";
import { Time } from "./Modules/Time.js"
import { Notifications } from "./Modules/Notifications.js";
import { ArchIcon } from "./Modules/ArchIcon.js";
import { SystemTray } from "./Modules/SystemTray.js";
import { ControlPanel } from "./Modules/ControlPanel.js";

function LeftContainer() {
    return Widget.Box({
        spacing: 8,
        children: [
            ArchIcon(),
            Volume(),
            Time(),
        ],
    })
}

function CenterContainer() {
    return Widget.Box({
        spacing: 8,
        children: [
            HyprlandWindow(),
        ],
    })
}

function RightContainer() {
    return Widget.Box({
        hpack: "end",
        spacing: 8,
        children: [
            HyprlandWorkspaces(),
            SystemTray(),
            Notifications(),
            ControlPanel(),
        ],
    })
}

export const topbar = ({monitor = 0}) => {
    return Widget.Window({
        name: `agsbar-${monitor}`,
        height_request: 43,
        class_name: "agsbar-outer",
        monitor,
        anchor: ["top", "left", "right"],
        exclusivity: "exclusive",
        child: Widget.CenterBox({
            class_name: "agsbar",
            start_widget: LeftContainer(),
            center_widget: CenterContainer(),
            end_widget: RightContainer(),
        })
    })
}