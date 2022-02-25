import React from 'react';
import { Card } from './Card';
import { lightGrey, darkerGrey } from './GlobalStyle';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
  chart: {
    height: '360px',
    type: 'column',
    backgroundColor: 'white',
    style: {
      fontFamily: `'Blinker', sans-serif`,
      fontSize: '14px !important',
    },
  },
  title: {
    text: 'Revenue by Product',
    style: {
      color: 'black',
    },
  },
  xAxis: {
    labels: {
      style: {
        color: 'black',
      },
    },
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
  },
  yAxis: {
    gridLineColor: lightGrey,
    labels: {
      style: {
        color: 'black',
      },
    },
    min: 0,
    reversedStacks: false,
    title: {
      style: {
        color: 'black',
      },
      text: 'Billions of Dollars',
    },
  },
  tooltip: {
    pointFormat:
      '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
    shared: true,
    backgroundColor: 'white',
    style: {
      color: 'black',
    },
  },
  plotOptions: {
    series: {
      borderWidth: 0,
    },
    column: {
      stacking: 'normal',
    },
  },
  legend: {
    itemStyle: {
      color: 'black',
    },
  },

}

const app = () => <div></div>;

export function Chart() {
  return <Card height={400}>
    <HighchartsReact highcharts={Highcharts} options={options} />
  </Card>
}