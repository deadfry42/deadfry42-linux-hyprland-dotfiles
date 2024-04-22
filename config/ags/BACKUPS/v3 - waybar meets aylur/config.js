import { topbar } from "./Widgets/Bar/Bar.js"
import { screenfold } from "./Widgets/Bar/ScreenFold.js"

App.config({
	style: "./style.css",
	windows: [
		topbar({monitor: 0}), // highest priority
		screenfold({monitor: 0})
		],
})
