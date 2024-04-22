export const ControlPanel = () => {
    return Widget.EventBox({
        margin_left: 3,
        on_primary_click: () => {
        },
        child: Widget.Label({
            class_names: ["arch-flex", "alonebox"],
            label: " \ue690 ",
            width_request: 37,
        })
    })
}