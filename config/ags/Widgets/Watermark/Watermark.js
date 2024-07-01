// this is incredibly scuffed.

export const watermarkmenu = () => Widget.Window({
    name: "watermark",
    class_name: "watermark",
    keymode: "none",
    exclusivity: "ignore",
    layer: "overlay",
    visible: false,
    anchor: ["bottom", "right"],
    child: Widget.Box({
        css: `min-width: 367px; min-height: 152px`,
        vertical: true,
        hpack: "start",
        children: [Widget.Label({
            label: "Activate Windows",
            css: "font-size: 24px; opacity: 0.5;font-weight: 600;",
            hpack: "start",
        }), Widget.Label({
            label: "Go to settings to activate Windows.",
            css: "font-size: 18px; opacity: 0.5;",
            hpack: "start",
        }),]
    })
})