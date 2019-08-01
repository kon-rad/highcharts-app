import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import HighchartExample2 from './components/HighchartExample2';
import GridView from './components/GridView';

const options = {
  title: {
    text: 'My chart'
  },
  series: [{
    data: [1, 2, 3]
  }]
}

function App() {
  return (
    <div className="App">
      <GridView />
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
      <HighchartExample2 />
    </div>
  );
}

export default App;
