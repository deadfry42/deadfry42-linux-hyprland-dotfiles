const hyprland = await Service.import("hyprland")

const workspaceswap = ws => hyprland.messageAsync(`dispatch workspace ${ws}`);

// if hyprland is not active, this will not return anything
// remove "if (!hyprland.active) return;" in each export to return this functionality
// (it will crash if you remove it and you're not on hyprland)

// i love playing with this
export const HyprlandWorkspaces = () => {
    if (!hyprland.active) return;
    return Widget.EventBox({
        onScrollUp: () => workspaceswap('-1'),
        onScrollDown: () => workspaceswap('+1'),
        child: Widget.Box({
            children: Array.from({ length: 20 }, (_, i) => i + 1).map(i => Widget.EventBox({
                hexpand: false,
                child: Widget.Label({
                    attribute: i,
                    label: `${i}`,

                    vpack: "center",
                    
                    class_names: ["workspace-button"],
                }),
                on_primary_click: () => workspaceswap(i),
            })),
            setup: self => self.hook(hyprland, () => self.children.forEach(btn => {
                var visible = hyprland.workspaces.some(ws => ws.id === btn.child.attribute);
                if (visible) {
                    if (hyprland.active.workspace.id == btn.child.attribute) {
                        btn.child.class_names = ["workspace-button", "workspace-button-focused"]
                    } else {
                        btn.child.class_names = ["workspace-button"]
                    }
                } else {
                    btn.child.class_names = ["workspace-button", "workspace-button-dead"]
                }
            })),
        }),
    })
}

export const HyprlandWindow = () => {
    if (!hyprland.active) return;
    return Widget.Label({
        class_name: "alonebox",
        css: "margin-left: 20px; margin-right: 20px",
        truncate: "end",
        label: hyprland.active.client.bind('title'),
        visible: hyprland.active.client.bind('address')
            .as(addr => !!addr),
    })
}