export const controlcenterwindow = () => {
    return Widget.Window({
        name: `controlcenter`,
        class_name: "cc-out",
        exclusivity: "exclusive",
        visible: false,
    })
}