const audio = await Service.import("audio")

export const Audio = () => {
    // const icons = {
    //     100: "overamplified",
    //     67: "high",
    //     34: "medium",
    //     1: "low",
    //     0: "muted"
    // }

    const icons = {
        100: "\udb84\udd20",
        67: "\udb81\udd7e",
        34: "\udb81\udd80",
        1: "\udb81\udd7f",
        0: "\udb81\udf5f"
    }

    function getIcon() {
        const icon = audio.speaker.is_muted ? 0 : [100, 67, 34, 1, 0].find(
            threshold => threshold <= audio.speaker.volume * 100)

        return `${icons[icon]}`
    }
    
    function humanifyAudio() {
        return Math.round(audio.speaker.volume*100)
    }
    
    // const icon = Widget.Icon({
    //     class_name: "audio-icon",
    //     icon: Utils.watch(getIcon(), audio.speaker, getIcon),
    //     size: 20,
    //     margin_right: 10,
    // })

    const icon = Widget.Label({
        class_name: "arch-flex",
        label: Utils.watch(getIcon(), audio.speaker, getIcon),
        css: "font-size: 20px",
        margin_right: 10,
    })

    const label = Widget.Label({
        label: humanifyAudio()+"%",
        setup: self => self.hook(audio.speaker, () => {
            self.label = humanifyAudio()+"%" || "0%"
        })
    })

    return Widget.EventBox({
        class_name: "ccitembg",
        on_scroll_up: () => audio.speaker.volume += 0.01,
        on_scroll_down: () => audio.speaker.volume -= 0.01,
        height_request: 50,
        hexpand: true,
        child: Widget.Box({
            children: [
                Widget.Box({
                    width_request: 7
                }), 
                icon, 
                label, 
                Widget.Box({
                    width_request: 7
                })],
        })
    })
}