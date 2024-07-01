import { topbar } from "./Widgets/Bar/Bar.js"
import { screenfold } from "./Widgets/Bar/ScreenFold.js"

import { archflexmenu } from "./Widgets/ArchFlex/Menu.js"
import { controlpanelmenu } from "./Widgets/ControlPanelMenu/Menu.js"
import { popupmenu } from "./Widgets/Popups/Popup.js"

import { watermarkmenu } from "./Widgets/Watermark/Watermark.js"

App.config({
	style: "./style.css",
	windows: [
		watermarkmenu(),
		popupmenu(),
		topbar({monitor: 0}), // highest priority
		archflexmenu(),
		controlpanelmenu(),
		screenfold({monitor: 0}),
		],
})

// btw a lot of this code is very much "inspired" by aylur's config
// i'm dumb