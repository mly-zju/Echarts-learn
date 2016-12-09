var echarts = require('echarts');
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));

var data0 = {
  deviceId: '0',
  deviceName: 'condition',
  deviceIp: '192.168.0.2',
  neighbors: ['192.168.0.3', '192.168.0.5']
};
var data1 = {
  deviceId: '1',
  deviceName: 'computer',
  deviceIp: '192.168.0.3',
  neighbors: ['192.168.0.2', '192.168.0.4']
};
var data2 = {
  deviceId: '2',
  deviceName: 'refrigeritor',
  deviceIp: '192.168.0.4',
  neighbors: ['192.168.0.3', '192.168.0.5']
};

var data3 = {
  deviceId: '3',
  deviceName: 'condition 2',
  deviceIp: '192.168.0.5',
  neighbors: ['192.168.0.4', '192.168.0.2', '192.168.0.6']
};

var data4 = {
  deviceId: '4',
  deviceName: 'computer 2',
  deviceIp: '192.168.0.6',
  neighbors: ['192.168.0.5']
};

var buf = [];
buf.push(data0);
buf.push(data1);
buf.push(data2);
buf.push(data3);
buf.push(data4);

var data = [];
var links = [];
var linkFlag = new Set();

var i = 0;
for (i = 0; i < 5; i++) {
  data.push({name: buf[i].deviceIp, value: buf[i].deviceName});
  var source = buf[i].deviceIp;
  var neighbor = buf[i].neighbors;
  neighbor.forEach(function(ele, index) {
    var key1 = source + 'to' + ele;
    var key2 = ele + 'to' + source;
    if (!linkFlag.has(key1) && !linkFlag.has(key2)) {
      linkFlag.add(key1);
      links.push({source: source, target: ele});
    }
  });
}

console.log(data);
console.log(links);

var option = {
  title: {
    text: '网络拓扑图'
  },
  tooltip: {
    formatter: '{c}'
  },
  animationDurationUpdate: 1500,
  animationEasingUpdate: 'quinticInOut',
  series: [
    {
      type: 'graph',
      layout: 'force',
      force: {
        edgeLength: 300,
        repulsion: 150,
        gravity: 0.05
      },
      symbolSize: 70,
      roam: true,
      label: {
        normal: {
          show: true,
          formatter: '{b}'
        }
      },
      edgeSymbol: 'circle',
      edgeSymbolSize: 1,
      edgeLabel: {
        normal: {
          show: false
        },
        emphasis: {
          show: false
        }
      },
      data: data,
      links: links,
      lineStyle: {
        normal: {
          opacity: 0.9,
          width: 2,
          curveness: 0
        }
      }
    }
  ]
};

myChart.setOption(option);
