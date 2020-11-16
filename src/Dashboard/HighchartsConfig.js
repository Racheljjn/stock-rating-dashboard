
export default function(buy, hold, sell, period, sym){
 
 return{
 
    chart: {
        type: 'column'
    },
    title: {
        text: `${sym} recommendation trends`
    },
    xAxis: {
        categories: period
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Analysis'
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: 'gray'
            }
        }
    },
    legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor:'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true
            }
        }
    },
    series: [{
        name: 'buy',
        data: buy
    }, {
        name: 'hold',
        data: hold
    }, {
        name: 'sell',
        data: sell
    }]
   }

              
}