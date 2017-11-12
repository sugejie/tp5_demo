$(function() {
    // 全局配置，针对页面上所有图表有效
    Highcharts.setOptions({
        chart: {
        },
        credits:{
            enabled: false 
        }
    });

    // HMcontainer
    var chart1 = new Highcharts.Chart({
        chart: {
            renderTo: 'HMcontainer',
            polar: true,
            type: 'line'
        },
        title: {
            text: null
        },
        xAxis: {
            categories: ['费用指数', '时间指数', '药费指数', '材料指数'],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },
        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0
        },
        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}"><b>{point.y}</b><br/>'
        },
         series: [{
             name: '指数',
            data: [0.98, 0.99, 0.97, 0.98],
            pointPlacement: 'on'
        }]
    });

    // HMcontainer2
    var colors = ['#2DC7C9', '#59B1F0', '#D97A80', '#FA0100', '#9E004F', '#790222'];
    var chart2 = new Highcharts.Chart({
        chart: {
            renderTo: 'HMcontainer2',
            type: 'gauge',
            height: 220
        },
        title: {
            text: '<b>中低风险疾病死亡率</b>',
            x:-40,
            margin:80
        },
        pane: [{
            startAngle: -90,
            endAngle: 90,
            background: null,
            center: ['45%', '100%'],
            size: 300
        }],
        yAxis: [{
            //      tickLength:0,
            //         minorTickLength:0,
            min: 0,
            max: 8,
            minorTickPosition: 'inside',
            tickPosition: 'inside',
            labels: {
                //        enabled:false,
                rotation: 'auto',
                distance: 10
            },
            plotBands: [{ //分区段
                from: 0,
                to: 2,
                color: colors[0],
                innerRadius: '100%',
                outerRadius: '65%'
            }, {
                from: 2,
                to: 6,
                color: colors[1],
                innerRadius: '100%',
                outerRadius: '65%'
            }, {
                from: 6,
                to: 8,
                color: colors[2],
                innerRadius: '100%',
                outerRadius: '65%'
            }],
            // title: {
            //     text: '中低风险疾病死亡率',
            //     style: {
            //         fontSize: '14px',
            //         marginTop: '10px'
            //     },
            //     y: 20
            // }
        }],
        exporting: {
            enabled: true
        },
        plotOptions: {
            gauge: {
                dataLabels: {
                    enabled: true,
                    y: -20
                },
                dial: { //仪表盘指针
                    radius: '80%',
                    rearLength: '0%',
                    backgroundColor: 'silver',
                    borderColor: 'silver',
                    borderWidth: 1,
                    baseWidth: 10,
                    topWidth: 1,
                    baseLength: '30%'
                }
            }
        },
        tooltip: {
            formatter: function() {
                return '中低风险疾病死亡率: ' + this.y + '%';
            }
        },
        series: [{
            name: '中低风险疾病死亡率',
            data: [0.00],
            yAxis: 0
        }]
    });

    // HMcontainer3
    var chart3 = new Highcharts.Chart({
        chart: {
            renderTo: 'HMcontainer3',
            type: 'gauge',
            height:220
        },
        title: {
            text: '<b>高风险疾病死亡率</b>',
            x:-40,
            margin:10
        },
        pane: [{
            startAngle: -90,
            endAngle: 90,
            background: null,
            center: ['45%', '100%'],
            size: 300
        }],
        yAxis: [{
            //      tickLength:0,
            //         minorTickLength:0,
            min: 0,
            max: 8,
            minorTickPosition: 'inside',
            tickPosition: 'inside',
            labels: {
                //        enabled:false,
                rotation: 'auto',
                distance: 10
            },
            plotBands: [{ //分区段
                from: 0,
                to: 2,
                color: colors[0],
                innerRadius: '100%',
                outerRadius: '65%'
            }, {
                from: 2,
                to: 6,
                color: colors[1],
                innerRadius: '100%',
                outerRadius: '65%'
            }, {
                from: 6,
                to: 8,
                color: colors[2],
                innerRadius: '100%',
                outerRadius: '65%'
            }],
            // title: {
            //     text: '高风险疾病死亡率',
            //     style: {
            //         fontSize: '14px',
            //         marginTop: '10px'
            //     },
            //     y: 20
            // }
        }],
        exporting: {
            enabled: true
        },
        plotOptions: {
            gauge: {
                dataLabels: {
                    enabled: true,
                    y: -20
                },
                dial: { //仪表盘指针
                    radius: '80%',
                    rearLength: '0%',
                    backgroundColor: 'silver',
                    borderColor: 'silver',
                    borderWidth: 1,
                    baseWidth: 10,
                    topWidth: 1,
                    baseLength: '30%'
                }
            }
        },
        tooltip: {
            formatter: function() {
                return '高风险疾病死亡率: ' + this.y + '%';
            }
        },
        series: [{
            name: '高风险疾病死亡率',
            data: [0.00],
            yAxis: 0
        }]
    });

    // HMcontainer4
    var chart4= new Highcharts.Chart({
        chart: {
            type: 'spline',
            renderTo: 'HMcontainer4'
        },
        title: {
            text: '该医疗机构危重病救治情况H05'
        },
        xAxis: {
            categories: ['转院率', '转社区机构率', '未救治率', '非医嘱离院率']
        },
        yAxis: {
            title: {
                text: null
            },
            labels: {
                formatter: function () {
                    return this.value + '%';
                }
            }
        },
        tooltip: {
            // pointFormat: '脑卒中：{point.y} %',
            crosshairs: true,
            shared: true
        },
        // legend: {
        //     layout: 'vertical',
        //     align: 'right',
        //     verticalAlign: 'middle'
        // },
        series: [{
            name: '脑卒中',
            data: [0, 0, 0, 3.67]
        }, {
            name: '心梗',
            data: [0, 0, 0, 0]
        }],
    });

    // HMcontainer5  样式1
    var chart5= new Highcharts.Chart({
        chart: {
            type: 'spline',
            renderTo: 'HMcontainer5'
        },
        title: {
            text: '该医疗机构前十大病种H15'
        },
        xAxis: {
            categories: ['住院人次', '平均住院日', '次均费用', '百元药品比列']
        },
        yAxis: {
            title: {
                text: null
            },
            labels: {
                formatter: function () {
                    return this.value + '%';
                }
            }
        },
        tooltip: {
            // pointFormat: '脑卒中：{point.y} %',
            crosshairs: true,
            shared: true
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
        series: [{
            name: 'RU14-恶性增生性疾病的化学及/或免疫治疗（7天内）',
            data: [772, 4, 5426.8, 54.83]
        }, {
            name: 'RW29-恶性增生性疾病的支持性治疗',
            data: [292, 9.1, 9095.41, 39.89]
        }, {
            name: 'OC15-经阴道分娩伴手术，不伴合并症与伴随病',
            data: [259, 4.2, 3335.96, 12.52]
        }, {
            name: 'RU12-恶性增生性疾病的化学及/或免疫治疗（30天内）',
            data: [207, 12.1, 11130.70, 46.09]
        }, {
            name: 'ES10-呼吸系统感染/炎症，<17岁',
            data: [196, 6.5, 3534.48, 23.29]
        }, {
            name: 'BR23-脑缺血性疾病，伴合并症与伴随病',
            data: [176, 8.7, 11068.93, 31.97]
        }, {
            name: 'BR25-脑缺血性疾病，不伴合并症与伴随病',
            data: [166, 8.4, 10622.02, 30.26]
        }, {
            name: 'CB39-晶体手术',
            data: [141, 4.3, 6452.43, 4.44]
        }, {
            name: 'GX19-消化系统特殊疾病',
            data: [123, 6.5, 4648.82, 29.83]
        }, {
            name: 'GU15-食管炎、肠胃炎,不伴合并症与伴随病',
            data: [110, 6.2, 4122.31, 34.37]
        }],
    });

    //  HMcontainer6  样式2
    var chart6= new Highcharts.Chart({
        chart: {
            type: 'spline',
            renderTo: 'HMcontainer6'
        },
        title: {
            text: '该医疗机构前十大病种H15'
        },
        xAxis: {
            categories: ['RU14', 'RW29', 'OC15', 'RU12', 'ES10', 'BR23', 'BR25', 'CB39', 'GX19', 'GU15']
        },
        yAxis: {
            title: {
                text: null
            },
            
        },
        tooltip: {
            // pointFormat: '脑卒中：{point.y} %',
            crosshairs: true,
            shared: true
        },
        
        series: [{
            name: '住院人次/天',
            data: [772, 292, 259, 207, 196 , 176, 166, 141, 123, 110]
        }, {
            name: '平均住院日/天',
            data: [4, 9.1, 4.2, 12.1, 6.5 , 8.7, 8.4, 4.3, 6.5, 6.2]
        }, {
            name: '次均费用/元',
            data: [5426.80, 9094.41, 3335.96, 11130.70, 3534.48 , 11068.93, 10622.02, 6452.43, 4648.81, 4122.31]
        }, {
            name: '百元药品比列/%',
            data: [54.83, 39.89, 12.52, 46.09, 23.29 , 31.97, 30.26, 4.44, 29.83, 34.37]
        }],
    });

    // HMcontainer7
    var chart7 = new Highcharts.Chart({
        chart: {
            renderTo: 'HMcontainer7',
            polar: true,
            type: 'line'
        },
        title: {
            text: null
        },
        xAxis: {
            categories: ['费用指数', '时间指数', '药费指数', '材料指数'],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },
        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0
        },
        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}"><b>{point.y}</b><br/>'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
         series: [{
             name: 'RU14-恶性增生性疾病的化学及/或免疫治疗（7天内）',
            data: [0.98, 0.99, 0.97, 0.98],
            pointPlacement: 'on'
        }, {
            name: 'RW29-恶性增生性疾病的支持性治疗',
            data: [0.99, 1.00, 1.05, 1.05],
            pointPlacement: 'on'
        }, {
            name: 'OC15-经阴道分娩伴手术，不伴合并症与伴随病',
            data: [0.99, 1.00, 0.99, 0.99],
            pointPlacement: 'on'
        }, {
            name: 'RU12-恶性增生性疾病的化学及/或免疫治疗（30天内）',
            data: [1.03, 1.01,1.01, 1.11],
            pointPlacement: 'on'
        }, {
            name: 'ES10-呼吸系统感染/炎症，<17岁',
            data: [0.98, 0.99, 0.97, 0.98],
            pointPlacement: 'on'
        }, {
            name: 'BR23-脑缺血性疾病，伴合并症与伴随病',
            data: [0.98, 0.99, 0.97, 0.98],
            pointPlacement: 'on'
        }, {
            name: 'BR25-脑缺血性疾病，不伴合并症与伴随病',
            data: [1.03, 1.01, 1.01, 1.11],
            pointPlacement: 'on'
        }, {
            name: 'CB39-晶体手术',
            data: [1.00, 1.00, 0.90, 0.98],
            pointPlacement: 'on'
        }, {
            name: 'GX19-消化系统特殊疾病',
            data: [0.98, 1.02, 1.00, 0.93],
            pointPlacement: 'on'
        }, {
            name: 'GU15-食管炎、肠胃炎，不伴合并症与伴随病',
            data: [1.00, 0.98, 1.01, 1.00],
            pointPlacement: 'on'
        }]
    });



});