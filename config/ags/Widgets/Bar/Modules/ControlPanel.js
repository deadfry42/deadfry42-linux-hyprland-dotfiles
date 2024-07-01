// export const ControlPanel = () => {
//     return Widget.EventBox({
//         margin_left: 3,
//         on_primary_click: () => {
//         },
//         child: Widget.Label({
//             class_names: ["arch-flex", "alonebox"],
//             label: " \ue690 ",
//             width_request: 37,
//         })
//     })
// }

let window = "controlpanelmenu";

export const ControlPanel = () => {
    return Widget.Button({
        child: Widget.Label({
            class_names: ["arch-flex", "alonebox"],
            label: " \ue690 ",
            width_request: 37,
        }),
        
        class_name: "controlpanelbutton",
        on_clicked: () => {
            App.toggleWindow(window)
        },
        setup: self => {
            let open = false;

            self.hook(App, (_, win, visible) => {
                if (win !== window)
                    return

                if (open && !visible) {
                    open = false
                    self.class_name = "controlpanelbutton"
                }

                if (visible) {
                    open = true
                    self.class_name = "controlpanelbutton-active"
                }
            })
        }
    })
}