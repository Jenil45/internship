const sidebar = document.getElementById("sidebar");
const main = document.getElementById("main");

function setSidebar() {
    sidebar.classList.toggle("sidebar-active");
    main.classList.toggle("main-active");
}

    var dataPoints = [
    {x:1 , y:100},
    {x:2 , y:100},
    {x:3 , y:100},
    {x:4 , y:100},
];

var chart = new CanvasJS.Chart("myChart", {
	animationEnabled: true,
	theme: "light2",
	title: {
		text: "Daily Sales Data"
	},
	axisY: {
		title: "Units",
		titleFontSize: 24,
		includeZero: true
	},
	data: [{
        type: "column",
		yValueFormatString: "#,### Units",
		dataPoints: dataPoints
	}]
});