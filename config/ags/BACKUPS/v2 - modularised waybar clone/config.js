import { topbar } from "./Widgets/Bar/Bar.js"

App.config({
	style: "./style.css",
	windows: [
		topbar({monitor: 0}), // highest priority
		],
})
