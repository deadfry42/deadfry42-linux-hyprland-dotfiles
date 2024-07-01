const network = await Service.import('network')

var size = 20;
var padding = 7;

const WifiIndicator = () => Widget.Box({
    children: [
        Widget.Box({
            width_request: padding,
        }),
        Widget.Icon({
            icon: network.wifi.bind('icon_name'),
            size: size,
            margin_right: 10,
        }),
        Widget.Label({
            label: network.wifi.bind('ssid')
                .as(ssid => ssid || 'Unknown'),
        }),
        Widget.Box({
            width_request: padding,
        })
    ],
})

const WiredIndicator = () => Widget.Icon({
    icon: network.wired.bind('icon_name'),
    size: size,
})

const NetworkIndicator = () => Widget.Stack({
    children: {
        wifi: WifiIndicator(),
        wired: WiredIndicator(),
    },
    shown: network.bind('primary').as(p => p || 'wifi'),
})

export function Network() {
    return Widget.Box({
        child: Widget.Box({
            class_name: "ccitembg",
            heightRequest: 50,
            hexpand: true,
            child: NetworkIndicator(),
        })
    })
}