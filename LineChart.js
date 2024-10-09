const ctx = document.getElementById('progressChart').getContext('2d');
const progressChart = new Chart(ctx, {
  type: 'line', 
  data: {
    labels: ['W1', 'W2', 'W3', 'W5', 'W9', 'W13', 'W17', 'W21', 'W25', 'W29', 'W33', 'W37', 'W41', 'W43'], // Labels for the x-axis
    datasets: [
      {
        label: 'Week Progress',
        borderColor: '#00008B', 
        data: [0, 5, 10, 15, 20, 30, 50, 60, 70, 80, 90, 95, 100], 
        fill: false, 
        tension: 0.4, // Smooth curve for the line
      },
      {
        label: 'Actual Progress',
        borderColor: '#FFA500', 
        data: [0, 1, 5, 10, 20, 40, 50, 70, 85, 100, 100, 100, 100], 
        fill: false, 
        tension: 0.4,
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Week'
        }
      },
      y: {
        min: 0,
        max: 125, 
        ticks: {
          callback: function(value) {
            return value + '%'; // Show percentage on y-axis
          }
        },
        title: {
          display: true,
          text: 'Progress (%)'
        }
      }
    },
    plugins: {
      legend: {
        position: 'top', 
      },
    },
    animation: {
      duration: 2000, // Duration of the animation in milliseconds (2 seconds)
      easing: 'easeInOutQuad', // Smooth easing function
    }
  }
});