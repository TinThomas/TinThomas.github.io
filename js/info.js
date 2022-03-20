const ctx = document.getElementById('myChart');

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
slider.value = localStorage.getItem("waterThreshold");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
  localStorage.setItem("waterThreshold",this.value);
}

const data = {
  labels: ['Restroom/Shower', 'Kitchen/Dishwashing', 'Cooling/Heating', 'Landscaping', 'Other'],
  datasets: [
    {
      label: 'Water Consumption',
      data: [10, 14, 30, 14, 5],
      backgroundColor: [
        'rgb(255, 20, 20)',
        'rgb(255, 150, 0)',
        'rgb(0, 255, 45)',
        'rgb(220, 50, 255)',
        'rgb(54, 162, 235)',
      ]
    }
  ]
};

const config = {
  type: 'pie',
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'left',
      },
      title: {
        display: true,
        text: 'Water Usage'
      }
    }
  },
};

const myChart = new Chart(ctx, config);
Chart.defaults.font.size = 14;