 // Sample data for charts
 const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: 'rgba(3,10,118, 1)',
        backgroundColor: 'rgba(3,10,118, 0.2)',
        fill: true,
    }]
};

const barChartData = {
    labels: ['YTS', 'WIP', 'Completed'],
    datasets: [{
        label: 'Status',
        data: [12, 19, 3],
        backgroundColor: [
            'rgba(3, 10, 118, 0.1)', // Dark blue
            'rgba(3, 10, 118, 0.5)', // Medium blue
            'rgba(3, 10, 118, 1)',   // Medium blue
        ],
        borderColor: [
            '#030A76', // Dark blue
            '#030A76', // Medium blue
            '#030A76', // Light blue
        ],
        borderWidth: 1
    }]
};

const pieChartData = {
    labels: ['Done', 'To Do Done'],
    datasets: [{
        label: '# of Votes',
        data: [200, 500],
        backgroundColor: [
            'rgba(3, 10, 118, 0.1)', // Dark blue
            'rgba(3, 10, 118, 0.9)', // Medium blue
        ],
        borderColor: [
            '#030A76', // Dark blue
        ],
        borderWidth: 1
    }]
};

document.addEventListener('DOMContentLoaded', function () {
    const lineChartCtx = document.getElementById('lineChart').getContext('2d');
    new Chart(lineChartCtx, {
        type: 'line',
        data: lineChartData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
            },
        }
    });

    const barChartCtx = document.getElementById('barChart').getContext('2d');
    new Chart(barChartCtx, {
        type: 'bar',
        data: barChartData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
            },
        }
    });

    const pieChartCtx = document.getElementById('pieChart').getContext('2d');
    new Chart(pieChartCtx, {
        type: 'pie',
        data: pieChartData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
            },
        }
    });
});