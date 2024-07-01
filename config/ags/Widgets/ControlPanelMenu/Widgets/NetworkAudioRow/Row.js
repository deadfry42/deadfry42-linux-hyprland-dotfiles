import { Audio } from "./Audio.js"
import { Network } from "./Network.js"

export function NetworkAudioRow() {
    return Widget.Box({
        child: Widget.Box({
            spacing: 8,
            children: [
                Audio(),
                Network(),
            ]
        })
    })
}