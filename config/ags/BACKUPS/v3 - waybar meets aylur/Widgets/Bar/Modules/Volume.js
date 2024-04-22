const audio = await Service.import("audio")

export const Volume = () => {
    const icons = {
        101: "overamplified",
        67: "high",
        34: "medium",
        1: "low",
        0: "muted"
    }

    function getIcon() {
        const icon = audio.speaker.is_muted ? 0 : [101, 67, 34, 1, 0].find(
            threshold => threshold <= audio.speaker.volume * 100)

        return `audio-volume-${icons[icon]}-symbolic`
    }
    
    function humanifyAudio() {
        return Math.round(audio.speaker.volume*100)
    }
    
    const icon = Widget.Icon({
        class_name: "audio-icon",
        icon: Utils.watch(getIcon(), audio.speaker, getIcon),
        size: 15,
        margin_right: 10,
    })

    const label = Widget.Label({
        class_name: "audio-label",
        label: humanifyAudio()+"%",
        setup: self => self.hook(audio.speaker, () => {
            self.label = humanifyAudio()+"%" || "0%"
        })
    })

    return Widget.EventBox({
        class_name: "audiobox",
        on_scroll_up: () => audio.speaker.volume += 0.01,
        on_scroll_down: () => audio.speaker.volume -= 0.01,
        child: Widget.Box({
            class_name: "alonebox",
            children: [icon, label],
        })
    })
}