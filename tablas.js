const labels = [
    'Diario(L)',
    'Semanal(L)',
    'Mensual(L)',
    'Anual(L)'
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'Gasto de agua sin metodología',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [105, 105*7, 105*30, 105*365],
    }]
  };

  const data2 = {
    labels: labels,
    datasets: [{
      label: 'Gasto de agua con metodología',
      backgroundColor: '#74fd05',
      borderColor: '#74fd05',
      data: [63, 63*7, 63*30, 63*365],
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {}
  };

  const config2 = {
    type: 'bar',
    data: data2,
    options: {}
  };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );

  const myChart2 = new Chart(
    document.getElementById('myChart2'),
    config2
  );