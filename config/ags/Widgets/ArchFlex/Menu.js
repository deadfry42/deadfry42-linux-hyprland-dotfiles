export const padding = () => Widget.EventBox({
    can_focus: false,
    hexpand: true,
    vexpand: true,
    child: Widget.Box({}),
    setup: w => w.on("button-press-event", () => App.toggleWindow("archflexmenu")),
})

// this is incredibly scuffed.

export const archflexmenu = () => Widget.Window({
    name: "archflexmenu",
    class_name: "controlpanelmenu",
    setup: w => w.keybind("Escape", () => App.closeWindow("archflexmenu")),
    keymode: "on-demand",
    exclusivity: "ignore",
    layer: "overlay",
    anchor: ["top", "bottom", "right", "left"],
    visible: false,
    child: Widget.Box({},
        Widget.Box(
            {
                hexpand: false,
                vertical: true,
            },
            Widget.Box({
                css: "padding: 1px;"
            }, Widget.Revealer({
                transition: "slide_up",
                transitionDuration: 500,
                child: Widget.Box({
                    vertical: true,
                    children: [
                        Widget.EventBox({
                            child: Widget.Box({
                                css: "min-height: 50px",
                            }),
                            on_primary_click: () => App.toggleWindow("archflexmenu"),
                        }),
                        Widget.Box({
                            class_name: "archflexframe",
                            child: Widget.Box({
                                children: [
                                    Widget.Icon({
                                        icon: "/home/nik/.config/ags/archflex.png",
                                        size: 100,
                                    }),
                                    Widget.Label("I use arch btw.\nAren't you suprised?")
                                ]
                            })
                        })
                    ],
                }),
                setup: self => self.hook(App, (_, wname, visible) => {
                    if (wname === "archflexmenu") {
                        self.reveal_child = visible
                    }
                }),
            })),
            padding(),
        ),
        padding()
    ),
})