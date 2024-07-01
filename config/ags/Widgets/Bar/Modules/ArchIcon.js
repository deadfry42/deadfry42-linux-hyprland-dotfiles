// export const ArchIcon = () => {
//     return Widget.EventBox({
//         on_primary_click: () => App.toggleWindow("archflexmenu"),
//         child: Widget.Label({
//             class_names: ["arch-flex", "alonebox"],
//             label: "\udb82\udcc7",
//             width_request: 37,
//         })
//     })
// }

let window = "archflexmenu";

export const ArchIcon = () => {
    return Widget.Button({
        child: Widget.Label({
            class_names: ["arch-flex", "alonebox"],
            label: "\udb82\udcc7",
            //label: "\ue711",
            // label: "\ue70f",
            // width_request: 37,
        }),

        class_name: "archflexbutton",
        
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
                    self.class_name = "archflexbutton"
                }

                if (visible) {
                    open = true
                    self.class_name = "archflexbutton-active"
                }
            })
        }
    })
}