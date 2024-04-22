import { topbar } from "./Widgets/Bar/Bar.js"
import { screenfold } from "./Widgets/Bar/ScreenFold.js"

import { controlpanelmenu } from "./Widgets/ControlPanelMenu/Menu.js"

App.config({
	style: "./style.css",
	windows: [
		topbar({monitor: 0}), // highest priority
		screenfold({monitor: 0}),
		controlpanelmenu(),
		],
})

App.closeWindow("controlpanelmenu")