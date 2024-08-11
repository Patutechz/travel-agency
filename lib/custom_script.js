$(function () {
	const Toast = Swal.mixin({
		toast: true,
		position: 'top-end',
		showConfirmButton: false,
		timer: 3000
	})

    Toast.fire({
		icon: 'success',
		title: 'Admin Dashboard By Patutechz'
    })
	
	
	
	/* Line Chart */
    var lc = document.getElementById("line-chart").getContext("2d");
    lineChart = new Chart(lc, 
	{
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: new Date().getFullYear(),
            backgroundColor: "#03369e",
            borderColor: "#03369e",
            data: [65, 78, 66, 44, 56, 67, 75],
            fill: false,
          },
          {
            label: new Date().getFullYear() - 1,
            fill: false,
            backgroundColor: "#507dd7",
            borderColor: "#507dd7",
            data: [40, 68, 86, 74, 56, 60, 87],
          },
          {
            label: new Date().getFullYear() - 2,
            fill: false,
            backgroundColor: "#9fb9ed",
            borderColor: "#9fb9ed",
            data: [30, 60, 40, 64, 50, 69, 20],
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Sales Charts",
        },
        legend: {
          labels: {
            fontColor: "rgba(0,0,0,.4)",
          },
          align: "end",
          position: "bottom",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Month",
              },
              gridLines: {
                display: false,
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(33, 37, 41, 0.3)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
                fontColor: "white",
              },
              gridLines: {
                borderDash: [3],
                borderDashOffset: [3],
                drawBorder: false,
                color: "rgba(33, 37, 41, 0.2)",
                zeroLineColor: "rgba(33, 37, 41, 0.15)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    }
	);

    /* Doughnut Chart */
    var dc = document.getElementById("doughnut-chart").getContext("2d");
    doungnutChart = new Chart(dc, 
	{
      type: "doughnut",
      data: {
        labels: [
          "Completed",
          "Pending",
          "Cancelled",
        ],
        datasets: [
          {
            backgroundColor: ['#03369e', '#507dd7','#9fb9ed'],
            data: [30, 20, 60],
          },
        ],
      },
      options: {
		cutoutPercentage: 70,
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Orders Status",
        },
        legend: {
          display : true,
          labels: {
            fontColor: "rgba(0,0,0,.4)",
          },
          align: "center",
          position: "bottom",
        },
      },
    }
	);

     /* Bar Chart */
    var bc = document.getElementById("bar-chart").getContext("2d");
    barChart = new Chart(bc, 
	{
      type: "bar",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: new Date().getFullYear(),
            backgroundColor: "#03369e",
            borderColor: "#03369e",
            data: [65, 78, 66, 44, 56, 67, 75],
            fill: false,
          },
          {
            label: new Date().getFullYear() - 1,
            fill: false,
            backgroundColor: "#507dd7",
            borderColor: "#507dd7",
            data: [40, 68, 86, 74, 56, 60, 87],
          },
          {
            label: new Date().getFullYear() - 2,
            fill: false,
            backgroundColor: "#9fb9ed",
            borderColor: "#9fb9ed",
            data: [30, 60, 40, 64, 50, 69, 20],
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Sales Charts",
        },
        legend: {
          labels: {
            fontColor: "rgba(0,0,0,.4)",
          },
          align: "end",
          position: "bottom",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Month",
              },
              gridLines: {
                display: false,
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(33, 37, 41, 0.3)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
                fontColor: "white",
              },
              gridLines: {
                borderDash: [3],
                borderDashOffset: [3],
                drawBorder: false,
                color: "rgba(33, 37, 41, 0.2)",
                zeroLineColor: "rgba(33, 37, 41, 0.15)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    }
	);

        
    var pc = document.getElementById("pie-chart").getContext("2d");
        pieChart = new Chart(pc, 
			{
			  type: "pie",
			  data: {
				labels: [
				  "Completed",
				  "Pending",
				  "Cancelled",
				],
				datasets: [
				  {
					backgroundColor: ['#03369e', '#507dd7','#9fb9ed'],
					data: [30, 20, 60],
				  },
				],
			  },
			  options: {
				maintainAspectRatio: false,
				responsive: true,
				title: {
				  display: false,
				  text: "Orders Status",
				},
				legend: {
				  display : true,
				  labels: {
					fontColor: "rgba(0,0,0,.4)",
				  },
				  align: "center",
				  position: "bottom",
				},
			  },
			}
		);
  });
