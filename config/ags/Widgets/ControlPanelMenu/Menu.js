import { Media } from "./Widgets/Mpris.js"
import { Header } from "./Widgets/Header.js"
import { NetworkAudioRow } from "./Widgets/NetworkAudioRow/Row.js"

export const padding = () => Widget.EventBox({
    can_focus: false,
    hexpand: true,
    vexpand: true,
    child: Widget.Box({}),
    setup: w => w.on("button-press-event", () => App.toggleWindow("controlpanelmenu")),
})

// this is incredibly scuffed.

export const controlpanelmenu = () => Widget.Window({
    name: "controlpanelmenu",
    class_name: "controlpanelmenu",
    setup: w => {w.keybind("Escape", () => App.closeWindow("controlpanelmenu"));
        // w.keybind("Space", () => Media.TogglePlaying()) scrapped, idk how to make it work
    },
    keymode: "on-demand",
    exclusivity: "ignore",
    layer: "overlay",
    anchor: ["top", "bottom", "right", "left"],
    visible: false,
    child: Widget.Box({},
        padding(),
        Widget.Box(
            {
                hexpand: false,
                vertical: true,
            },
            Widget.Box({
                css: "padding: 1px;"
            }, Widget.Revealer({
                transition: "slide_left",
                transitionDuration: 500,
                child: Widget.Box({
                    vertical: true,
                    children: [
                        Widget.EventBox({
                            child: Widget.Box({
                                css: "min-height: 46px",
                            }),
                            on_primary_click: () => App.toggleWindow("controlpanelmenu"),
                            //setup: w => w.on("button-press-event", () => App.toggleWindow("controlpanelmenu")),
                        }),
                        Widget.Box({
                            class_name: "controlpanelframe",
                            vertical: true,
                            spacing: 8,
                            children: [
                                Header(),
                                NetworkAudioRow(),
                                Media(),
                            ]
                        })
                    ],
                }),
                setup: self => self.hook(App, (_, wname, visible) => {
                    if (wname === "controlpanelmenu") {
                        self.reveal_child = visible
                    }
                }),
            })),
            padding(),
        ),
    ),
})