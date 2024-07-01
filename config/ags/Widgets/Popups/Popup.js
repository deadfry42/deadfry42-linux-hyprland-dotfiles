export const padding = () => Widget.EventBox({
    can_focus: false,
    hexpand: true,
    vexpand: true,
})

// this is incredibly scuffed.

export const popupmenu = () => Widget.Window({
    name: "popupmenu",
    class_name: "popupmenu",
    keymode: "on-demand",
    exclusivity: "ignore",
    layer: "top",
    anchor: ["top", "bottom", "right", "left"],
    visible: false,
    child: Widget.Box({},
        padding(),
        Widget.Box({
                hexpand: false,
                vertical: true,
            },
            Widget.Box({
                css: "padding: 1px;"
            }),
            Widget.Box({
                vertical: true,
                children: [
                    Widget.EventBox({
                        child: Widget.Box({
                            css: "min-height: 46px",
                        }),
                    }),
                    Widget.Box({
                        class_name: "popupframe",
                        vertical: true,
                        spacing: 8,
                    })
                ],
            }),
            padding(),
        ),
    ),
})