import { useRef, useEffect } from "react";
import { Chart, registerables } from "chart.js";
import data from "../data.json";

Chart.register(...registerables);

function BarChart() {
  const chartContainer = useRef(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const labels = data.map((item) => item.day);
      const dataset = data.map((item) => item.amount);

      const generateColors = (data) => {
        const max = Math.max(...data);
        return data.map((value) =>
          value === max ? "hsl(186, 34%, 60%)" : "hsl(10, 79%, 65%)",
        );
      };

      const newChartInstance = new Chart(chartContainer.current, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [
            {
              data: dataset,
              backgroundColor: generateColors(dataset),
              borderRadius: 5,
              hoverBackgroundColor: "hsl(10, 79%, 65%, 0.7)",
            },
          ],
        },
        options: {
          scales: {
            x: {
              grid: {
                display: false,
                tickBorderDash: 0,
                tickBorderDashOffset: 0,
              },
              ticks: {
                fontsize: 18,
                color: "hsl(28, 10%, 53%)",
              },
            },
            y: {
              max: 80,
              display: false,
              grid: {
                display: false,
              },
            },
          },

          plugins: {
            legend: {
              display: false,
            },

            tooltip: {
              yAlign: "bottom",
              displayColors: false,
              caretSize: 0,
              callbacks: {
                title: function () {
                  return null;
                },
                label: function (context) {
                  var value = context.parsed.y;
                  if (value !== null) {
                    value = "$" + value.toFixed(2);
                  }
                  return value;
                },
              },
            },
          },
        },
      });

      return () => {
        newChartInstance.destroy();
      };
    }
  }, [chartContainer]);

  return (
    <div>
      <canvas ref={chartContainer} />
    </div>
  );
}

export default BarChart;
