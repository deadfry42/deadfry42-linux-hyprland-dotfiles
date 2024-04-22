const systemtray = await Service.import("systemtray")

export const SystemTray = () => {
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