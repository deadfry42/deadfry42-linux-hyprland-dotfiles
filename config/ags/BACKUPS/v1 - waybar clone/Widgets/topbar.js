const systemtray = await Service.import("systemtray")
const audio = await Service.import("audio")
const hyprland = await Service.import("hyprland")
//const notifications = await Service.import("notifications")

import { controlcenterwindow } from "./controlcenter.js";

const ccw = controlcenterwindow();
const workspaceswap = ws => hyprland.messageAsync(`dispatch workspace ${ws}`);

const date = Variable('', {
    poll: [1000, 'date'],
})

function ArchFlex() {
    return Widget.EventBox({
        margin_left: 3,
        on_primary_click: () => {},
        child: Widget.Label({
            class_names: ["arch-flex", "alonebox"],
            label: "\udb82\udcc7",
            width_request: 37,
        })
    })
}

function HyprlandWindow() {
    return Widget.Label({
        class_name: "alonebox",
        label: hyprland.active.client.bind('title'),
        visible: hyprland.active.client.bind('address')
            .as(addr => !!addr),
    })
}

function Volume() {
    const icons = {
        101: "overamplified",
        67: "high",
        34: "medium",
        1: "low",
        0: "muted"
    }

    function getIcon() {
        const icon = audio.speaker.is_muted ? 0 : [101, 67, 34, 1, 0].find(
            threshold => threshold <= audio.speaker.volume * 100)

        return `audio-volume-${icons[icon]}-symbolic`
    }
    
    function humanifyAudio() {
        return Math.round(audio.speaker.volume*100)
    }
    
    const icon = Widget.Icon({
        class_name: "audio-icon",
        icon: Utils.watch(getIcon(), audio.speaker, getIcon),
        size: 15,
        margin_right: 10,
    })

    const label = Widget.Label({
        class_name: "audio-label",
        label: humanifyAudio()+"%",
        setup: self => self.hook(audio.speaker, () => {
            self.label = humanifyAudio()+"%" || "0%"
        })
    })

    return Widget.EventBox({
        class_name: "audiobox",
        on_scroll_up: () => audio.speaker.volume += 0.01,
        on_scroll_down: () => audio.speaker.volume -= 0.01,
        child: Widget.Box({
            class_name: "alonebox",
            children: [icon, label],
        })
    })
}

function Time() {
    return Widget.EventBox({
        class_name: "timebox",
        child: Widget.Box({
            class_names: ["alonebox", "boxleft"],
            children: [Widget.Label({
                label: "\uf017 "
            }),
            Widget.Label({
                label: date.bind()
            })]
        })
    })
}

function Notifications() {
    return Widget.EventBox({
        class_name: "notibox",
        on_primary_click: () => Utils.exec("swaync-client -t -sw"),
        on_secondary_click: () => Utils.exec("swaync-client -d -sw"),
        child: Widget.Box({
            class_names: ["alonebox", "boxright"],
            children: [Widget.Label({
                label: " \udb80\udc9a ",
            })]
        })
    })
}

function TimeAndNotif() {
    return Widget.Box({
        spacing: 0,
        children: [
            Time(),
            Notifications()
        ]
    })
}

function ControlPanel() {
    return Widget.EventBox({
        margin_left: 3,
        on_primary_click: () => {
            ccw.visible = true
        },
        child: Widget.Label({
            class_names: ["arch-flex", "alonebox"],
            label: " \ue690 ",
            width_request: 37,
        })
    })
}

function HyprlandWorkspaces() {
    return Widget.EventBox({
        onScrollUp: () => workspaceswap('-1'),
        onScrollDown: () => workspaceswap('+1'),
        child: Widget.Box({
            children: Array.from({ length: 10 }, (_, i) => i + 1).map(i => Widget.Button({
                attribute: i,
                label: `  ${i}  `,
                onClicked: () => workspaceswap(i),
                class_names: ["workspace-button"],
            })),

            setup: self => self.hook(hyprland, () => self.children.forEach(btn => {
                btn.visible = hyprland.workspaces.some(ws => ws.id === btn.attribute);
                if (hyprland.active.workspace.id == btn.attribute) {
                    btn.class_names = ["workspace-button", "workspace-button-focused"]
                } else {
                    btn.class_names = ["workspace-button"]
                }
            })),
        }),
    })
}

function SystemTray() {
    const items = systemtray.bind("items")
        .as(items => items.map(item => Widget.Button({
            class_name: "tray-item",
            child: Widget.Icon({ icon: item.bind("icon"), size: 20 }),
            on_primary_click: (_, event) => item.activate(event),
            on_secondary_click: (_, event) => item.openMenu(event),
            tooltip_markup: item.bind("tooltip_markup"),
            width_request: 30,
        })))
    
    const systrayBox = Widget.Box({
        class_name: "alonebox",
        children: items,
    })

    return systrayBox
}

function LeftContainer() {
    return Widget.Box({
        spacing: 8,
        children: [
            ArchFlex(),
            Volume(),
            HyprlandWindow(),
        ],
    })
}

function CenterContainer() {
    return Widget.Box({
        spacing: 8,
        children: [
            HyprlandWorkspaces()
        ],
    })
}

function RightContainer() {
    return Widget.Box({
        hpack: "end",
        spacing: 8,
        children: [
            SystemTray(),
            TimeAndNotif(),
            ControlPanel(),
        ],
    })
}

export const topbar = ({monitor = 0}) => {
    return Widget.Window({
        name: `agsbar-${monitor}`,
        height_request: 42,
        class_name: "agsbar-outer",
        monitor,
        anchor: ["top", "left", "right"],
        exclusivity: "exclusive",
        child: Widget.CenterBox({
            class_name: "agsbar",
            margin: 5,
            start_widget: LeftContainer(),
            center_widget: CenterContainer(),
            end_widget: RightContainer(),
        })
    })
}

export const controlcenter = () => {
    return ccw;
}