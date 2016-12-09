var echarts = require('echarts');
var data = require('./data.json');
var worldJson = require('../map/world.json');
echarts.registerMap('world', worldJson);
var myChart = echarts.init(document.getElementById('main'));

var option = {
  baseOption: {
    title: {
      text: '大国崛起：改革开放以来中国GDP排名变化情况',
      left: 'center',
      top: 'top',
      textStyle: {
        fontSize: 25,
        color: 'rgba(0,0,0, 0.9)'
      }
    },
    tooltip: {
      formatter: '{b}: {c0}'
    },
    grid: {
      left: 150,
      right: 400,
      top: '70%',
      bottom: 20
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.1]
    },
    yAxis: {
      type: 'category',
      data: data[0].data.map(function(ele) {
        return ele.value[2]
      }).reverse()
    },
    visualMap: {
      dimension: 0,
      left: 10,
      min: data[0].data[9].value[0],
      max: data[0].data[0].value[0],
      text: ['High', 'Low'],
      inRange: {
        color: ['lightskyblue', 'yellow', 'orangered']
      }
    },
    series: [
      {
        type: 'map',
        mapType: 'world',
        roam: true,
        top: '10%',
        bottom: '25%',
        left: 10,
        itemStyle: {
          emphasis: {
            label: {
              show: true
            },
            areaColor: 'rgba(0,0,0, 0.5)'
          }
        },
        data: data[0].data
      }, {
        type: 'bar',
        tooltip: {
          show: false
        },
        label: {
          normal: {
            show: true,
            position: 'right',
            textStyle: {
              color: '#000'
            }
          }
        },
        data: data[0].data.map(function(ele) {
          return ele.value[0]
        }).sort(function(a, b) {
          return a > b;
        })
      },{
        type: 'pie',
        radius: '20%',
        center: ['70%','85%'],
        tooltip: {
          formatter: '{b} {d}%'
        },
        data: data[0].data.map(function(ele){
          return {
            name: ele.value[2],
            value: ele.value[0]
          }
        })
      }
    ]
  }
}



myChart.setOption(option);
