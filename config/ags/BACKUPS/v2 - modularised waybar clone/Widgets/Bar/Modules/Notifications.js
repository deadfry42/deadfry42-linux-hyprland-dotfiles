export const Notifications = () => {
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