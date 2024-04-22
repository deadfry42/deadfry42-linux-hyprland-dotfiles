import { topbar, controlcenter } from "./Widgets/topbar.js"

App.config({
	style: "./style.css",
	windows: [
		topbar({monitor: 0}), // highest priority
		controlcenter(),
		],
})
