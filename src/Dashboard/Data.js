function generateData(count, start, growth) {
  const data = [];
  for (let i = 0; i < count; i++) {
    data.push(Math.floor(start + (Math.random() * i) * growth));
  }
  return data;
}

export const chartData = [
  {
    name: 'Phones',
    data: generateData(12, 30, 5),
    color: '#149947'
  },
  {
    name: 'Services',
    data: generateData(12, 10, 0.2),
    color: '#1DDA65'
  },
  {
    name: 'Laptops',
    data: generateData(12, 6, 0.3),
    color: '#5CF396'
  },
  {
    name: 'Tablets',
    data: generateData(12, 5, 0.5),
    color: '#C1FAD7'
  },
];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function format(num) {
  return `$${num} Billion`;
}

export const tableRows = months.map((month, i) => ({
  month,
  phones: format(chartData[0].data[i]),
  services: format(chartData[1].data[i]),
  laptops: format(chartData[2].data[i]),
  tablets: format(chartData[3].data[i]),
}));