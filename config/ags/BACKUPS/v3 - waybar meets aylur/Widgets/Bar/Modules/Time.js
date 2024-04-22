const date = Variable('', {
    poll: [1000, 'date'],
})

export const Time = () => {
    return Widget.EventBox({
        class_name: "timebox",
        child: Widget.Box({
            class_names: ["alonebox", "boxleft"],
            children: [Widget.Label({
                label: "\uf017 "
            }),
            Widget.Label({
                label: date.bind()
            })]
        })
    })
}