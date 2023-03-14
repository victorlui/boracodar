const options = {
  series: [
    {
      name: "cambio",
      data: [
        {
          x: new Date("2018-02-12").getTime(),
          y: 5.1,
        },
        {
          x: new Date("2018-02-13").getTime(),
          y: 5,
        },
        {
          x: new Date("2018-02-14").getTime(),
          y: 5.18,
        },
        {
          x: new Date("2018-02-15").getTime(),
          y: 5.11,
        },
        {
          x: new Date("2018-02-16").getTime(),
          y: 5.18,
        },
        {
          x: new Date("2018-02-17").getTime(),
          y: 5.25,
        },
        {
          x: new Date("2018-02-18").getTime(),
          y: 5.18,
        },
        {
          x: new Date("2018-02-19").getTime(),
          y: 5.2,
        },
        {
          x: new Date("2018-03-01").getTime(),
          y: 5.15,
        },
        {
          x: new Date("2018-03-03").getTime(),
          y: 5.1,
        },
        {
          x: new Date("2018-03-10").getTime(),
          y: 5.2,
        },
      ],
    },
  ],
  chart: {
    height: 350,
    type: "area",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
  },
  yaxis: {
    min: 5,
    tickAmount: 4,
    labels: {
      formatter: (value) => {
        return value.toFixed(1).replace(".", ",")
      },
    },
  },
  xaxis: {
    labels: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
    axisTicks: {
      show: false,
    },
  },
  fill: {
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 90, 100],
    },
  },
  colors: ["#7C3AED"],
  tooltip: {
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      return `<div class="tooltip">
    <span>${String(series[seriesIndex][dataPointIndex]).replace(
      ".",
      ","
    )}</span>
    <span>${new Date(
      w.globals.seriesX[seriesIndex][dataPointIndex]
    ).toLocaleDateString("pt-BR", {
      weekday: "short",
      month: "short",
      day: "numeric",
    })}</span>
    </div>`
    },
  },
}

const chart = new ApexCharts(document.querySelector("#chart"), options)
chart.render()

function chartZoom(dateInitial, dateFinal) {
  chart.zoomX(new Date(dateInitial).getTime(), new Date(dateFinal).getTime())
}

var resetCssClasses = function (activeEl) {
  var els = document.querySelectorAll("button")
  Array.prototype.forEach.call(els, function (el) {
    el.classList.remove("active")
  })

  activeEl.target.classList.add("active")
}

function exibir(msg) {
  document.getElementById(msg).classList.add("active")
  if (msg == "1d") {
    resetCssClasses(e)
    chartZoom("11 Feb 2018", "13 Feb 2018")
  }

  if (msg == "5d") {
    chartZoom("12 Feb 2018", "17 Feb 2018")
  }

  if (msg == "1m") {
    chartZoom("12 Feb 2018", "20 Feb 2018")
  }

  if (msg == "1a") {
    chartZoom("12 Feb 2018", "12 Feb 2019")
  }

  if (msg == "5a") {
    chartZoom("12 Feb 2018", "12 Feb 2023")
  }
}
