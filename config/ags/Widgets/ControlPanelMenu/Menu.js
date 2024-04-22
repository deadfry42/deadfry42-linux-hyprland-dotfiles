export const controlpanelmenu = () => Widget.Window({
    name: "controlpanelmenu",
    class_name: "controlpanelmenu",
    setup: w => w.keybind("Escape", () => App.closeWindow("controlpanelmenu")),
    keymode: "on-demand",
    exclusivity: "ignore",
    layer: "top",
    child: Widget.Box({
        vexpand: false,
        vertical: true,
    })
})