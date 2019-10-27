var ctx = document.getElementById('myChart').getContext("2d");

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL"],
        datasets: [
        {
            label: "Data",
            borderColor: "#00b7f4",
            pointBorderColor: "#00b7f4",
            pointBackgroundColor: "#00b7f4",
            pointHoverBackgroundColor: "#00b7f4",
            pointHoverBorderColor: "#00b7f4",
            pointBorderWidth: 5,
            pointHoverRadius: 5,
            pointHoverBorderWidth: 1,
            pointRadius: 3,
            fill: false,
            borderWidth: 4,
            data: [100, 120, 150, 170, 180, 170, 160]
        },
        {
            label: "Data",
            borderColor: "#40b977",
            pointBorderColor: "#40b977",
            pointBackgroundColor: "#40b977",
            pointHoverBackgroundColor: "#40b977",
            pointHoverBorderColor: "#40b977",
            pointBorderWidth: 5,
            pointHoverRadius:5,
            pointHoverBorderWidth: 1,
            pointRadius: 3,
            fill: false,
            borderWidth: 4,
            data: [90, 150, 170, 110, 280, 250, 240]
        }

    ]
    },
    options: {
        legend: {
            position: "bottom"
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "rgba(0,0,0,0.5)",
                    fontStyle: "bold",
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    padding: 20
                },
                gridLines: {
                    drawTicks: false,
                    display: false
                }

            }],
            xAxes: [{
                gridLines: {
                    zeroLineColor: "transparent"
                },
                ticks: {
                    padding: 20,
                    fontColor: "rgba(0,0,0,0.5)",
                    fontStyle: "bold"
                }
            }]
        }
    }
});