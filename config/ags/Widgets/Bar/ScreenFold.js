export const screenfold = ({monitor = 0}) => {
    return Widget.Window({
        name: `agsscreenfold-${monitor}`,
        class_name: "agsscreenfold-outer",
        height_request: 30,
        click_through: true,
        monitor,
        anchor: ["top", "left", "right", "bottom"],
        child: Widget.Box({
            class_name: "screenfold-corner",
            expand: true,
        }),
    })
}