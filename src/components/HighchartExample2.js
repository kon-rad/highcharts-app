import React from 'react';

let Highchart = null;

try {
    Highchart = require('highcharts');
} catch (e) {
    console.log('prevented highcharts from loading twice', e);
}

class HighchartExample2 extends React.PureComponent {
    componentDidMount() {
        this.chart = Highchart.chart(this.node, {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Fruit Consumption'
            },
            xAxis: {
                categories: ['Apples', 'Bananas', 'Oranges']
            },
            yAxis: {
                title: {
                    text: 'Fruit eaten'
                }
            },
            series: [{
                name: 'Jane',
                data: [1, 0, 4]
            }, {
                name: 'John',
                data: [5, 7, 3]
            }]
        });

    }
    render() {
        return (
            <div>
                <h2>Highchart Example 2</h2>
                <div ref={node => (this.node = node)} />
            </div>
        )
    }
}

export default HighchartExample2;