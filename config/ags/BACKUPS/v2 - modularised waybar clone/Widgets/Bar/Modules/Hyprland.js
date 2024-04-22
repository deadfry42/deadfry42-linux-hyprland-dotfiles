const hyprland = await Service.import("hyprland")

const workspaceswap = ws => hyprland.messageAsync(`dispatch workspace ${ws}`);

export const HyprlandWorkspaces = () => {
    return Widget.EventBox({
        onScrollUp: () => workspaceswap('-1'),
        onScrollDown: () => workspaceswap('+1'),
        child: Widget.Box({
            children: Array.from({ length: 10 }, (_, i) => i + 1).map(i => Widget.Button({
                attribute: i,
                label: `  ${i}  `,
                onClicked: () => workspaceswap(i),
                class_names: ["workspace-button"],
            })),

            setup: self => self.hook(hyprland, () => self.children.forEach(btn => {
                btn.visible = hyprland.workspaces.some(ws => ws.id === btn.attribute);
                if (hyprland.active.workspace.id == btn.attribute) {
                    btn.class_names = ["workspace-button", "workspace-button-focused"]
                } else {
                    btn.class_names = ["workspace-button"]
                }
            })),
        }),
    })
}

export const HyprlandWindow = () => {
    return Widget.Label({
        class_name: "alonebox",
        label: hyprland.active.client.bind('title'),
        visible: hyprland.active.client.bind('address')
            .as(addr => !!addr),
    })
}