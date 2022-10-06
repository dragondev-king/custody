var ChartJsPresets;

ChartJsPresets = (function () {
  function ChartJsPresets() {}

  ChartJsPresets.tooltipStyle = function () {
    return {
      backgroundColor: "rgba(255,255,255,0.93)",
      titleFontSize: 14,
      titleFontColor: "#666",
      titleSpacing: 10,
      titleMarginBottom: 14,
      bodyFontSize: 14,
      bodyFontColor: "#666",
      xPadding: 14,
      yPadding: 14,
      cornerRadius: 3,
      displayColors: false,
      borderColor: "#ddd",
      borderWidth: 1,
      caretSize: 8,
    };
  };

  ChartJsPresets["default"] = function () {
    return {
      responsive: true,
      maintainAspectRatio: false,
      layout: {
        padding: {
          top: 5,
          bottom: 5,
        },
      },
      legend: {
        display: false,
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              display: false,
            },
            ticks: {
              maxTicksLimit: 8,
            },
          },
        ],
        yAxes: [
          {
            display: false,
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
      elements: {
        point: {
          backgroundColor: "#EB0FB0",
          borderColor: "#FFFFFF",
          borderWidth: 2,
          radius: 4,
          hoverRadius: 6,
        },
        line: {
          tension: 0.1,
          borderColor: "#EB0FB0",
        },
      },
      tooltips: this.tooltipStyle(),
    };
  };

  ChartJsPresets.minimalLineOptions = function () {
    return {
      responsive: true,
      maintainAspectRatio: false,
      layout: {
        padding: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        },
      },
      legend: {
        display: false,
      },
      scales: {
        xAxes: [
          {
            display: false,
            ticks: {
              padding: 0,
            },
          },
        ],
        yAxes: [
          {
            display: false,
            ticks: {
              padding: 0,
            },
          },
        ],
      },
      elements: {
        point: {
          radius: 0,
          borderWidth: 0,
          hoverRadius: 0,
          hoverBorderWidth: 0,
        },
        line: {
          backgroundColor: "rgba(255,255,255,0)",
          borderWidth: 2,
          tension: 0.3,
        },
      },
      tooltips: {
        enabled: false,
      },
    };
  };

  return ChartJsPresets;
})();

export default ChartJsPresets;
