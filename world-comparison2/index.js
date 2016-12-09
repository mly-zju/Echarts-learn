var echarts=require('echarts');
var data=require('./data.json');
var worldJson=require('../map/world.json');
echarts.registerMap('world',worldJson);
var myChart=echarts.init(document.getElementById('main'));

var option={
  baseOption: {
    title: {
        text: '大国崛起：改革开放以来中国gdp排名变化情况',
        left: 'center',
        top: 'top',
        textStyle: {
            fontSize: 25,
            color: 'rgba(0,0,0, 0.9)'
        }
    },
    tooltip:{},
    visualMap:{
      dimension: 0,
      left: 10,
      min: data[0].data[9].value[0],
      max: data[0].data[0].value[0],
      text: ['High','Low'],
      inRange: {
           color: ['lightskyblue','yellow', 'orangered']
       }
    },
    series: [
      {
        type: 'map',
        mapType: 'world',
        roam: true,
        itemStyle: {
          emphasis: {
            label: {
              show: true
            },
            areaColor: 'rgba(0,0,0, 0.5)'
          }
        },
        data: data[0].data
      }
    ]
  }
}



myChart.setOption(option);
