document.addEventListener('DOMContentLoaded', function () {
    let paperA4Data = localStorage.getItem('paperA4Data');
    let porkData = localStorage.getItem('porkData');
    let RiceFoodData = localStorage.getItem('RiceFoodData');
    let wineData = localStorage.getItem('wineData');
    let milkData = localStorage.getItem('milkData');
    let DressData = localStorage.getItem('DressData');
    let ElectronicData = localStorage.getItem('ElectronicData');
    let solarWaterHeaterData = localStorage.getItem('solarWaterHeaterData');
    let recycleOldData = localStorage.getItem('recycleOldData');
    let efficientLightsData = localStorage.getItem('efficientLightsData');
    let FlyData = localStorage.getItem('FlyData');
    let trainsData = localStorage.getItem('trainsData');
    let BusesData = localStorage.getItem('BusesData');
    let CarsData = localStorage.getItem('CarsData');
    let BicycleData = localStorage.getItem('BicycleData');
    let areaData = localStorage.getItem('areaData');
    let ElectricData = localStorage.getItem('ElectricData');
    let GasData = localStorage.getItem('GasData');
    let H2oData = localStorage.getItem('H2oData');
    let yong = paperA4Data + DressData
    if (paperA4Data > 4) {
        document.getElementById('paperA4Data').innerText = '转为无纸化账单'
    }
    if (porkData > 3) {
        document.getElementById('porkData').innerText = '在保证健康的前提下少吃肉，尤其是进口肉和进口牛肉,多吃本地供应的食物（可减少运输碳排放),购买可持续生产的食物和物品少吃肉类产品，尤其是牛肉和羊肉采购本地生产的应季食物'
    }
    if (RiceFoodData > 3) {
        document.getElementById('RiceFoodData').innerText = '采购有机食物,减少食物浪费'
    }
    if (wineData > 1) {
        document.getElementById('wineData').innerText = '避免过度使用一次性餐具'
    }
    if (ElectricData > 10) {
        document.getElementById('ElectricData').innerText = '全球温室气体排放量的73%来自发电.出于这个原因，离开房间时随手关灯、拔下不使用的电子设备插头以及将白炽灯泡换成LED灯都是一些节约用电的技巧。如果可能的话，建议使用更清洁的能源，比如太阳能，安装太阳能电池板或太阳能热水器是很好的措施';
    }
    if (GasData > 25) {
        document.getElementById('GasData').innerText = '';
    }
    if (milkData > 15) {
        document.getElementById('milkData').innerText = ''
    }
    if (DressData > 0) {
        document.getElementById('DressData').innerText = '积极参与垃圾分类,随手关灯,关掉暖气,拔掉设备的电源插头,种植花,衣物自然晾干'
    }
    if (ElectronicData > 15) {
        document.getElementById('ElectronicData').innerText = '换成节能灯具如果有条件可以加装太阳能光伏家庭发电系统 安装智能家居自动控制能耗 家电采用最节能的最好 不适用台式电脑，使用笔记本电脑'
    }
    if (solarWaterHeaterData ) {
        document.getElementById('solarWaterHeaterData').innerText = '减少使用一次性购物塑料袋 多淘二手市场物品'
    }
    if (recycleOldData) {
        document.getElementById('recycleOldData').innerText = '回收部分废弃物，可减少废弃物处理不当造成的温室气体排放。德拉马萨说：“在分解过程中，许多材料都会释放出碳。还有一个事实是，我们在日常生活中使用的一些物品需要很多年才能分解，并会对环境造成进一步的破坏。”塑料容器和危险废弃物，如电池、灯泡、化学产品等，如果能被回收再利用，将对减少碳足迹产生积极作用。此外，在回收再利用方面，有机废物的再利用也是减少碳排放的重要措施之一。“有机废物，如食物残渣，会释放甲烷等气体，而甲烷是一种温室气体。”'
    }
    if (efficientLightsData) {
        document.getElementById('efficientLightsData').innerText = '重复利用任何能循环使用的物品更少的消费'
    }
    if (FlyData) {
        document.getElementById('FlyData').innerText = '减少飞机出行'
    }
    if (trainsData) {
        document.getElementById('trainsData').innerText = '减少或不采购瓶装水'
    }
    if (BusesData) {
        document.getElementById('BusesData').innerText = ''
    }
    if (CarsData) {
        document.getElementById('CarsData').innerText = '选择与由汽油或生物燃料驱动的车辆相比更为清洁的交通工具。加尔布塞拉说：“最好选用公共交通工具或零排放的出行方式，例如骑自行车或步行。”电动汽车也有助于减少碳足迹。'
    }
    if (BicycleData) {
        document.getElementById('BicycleData').innerText = '尽可能多使用公共交通出行,多骑行和步行,步行或骑行去上班乘用公共交通工具,租用电动汽车,识别并支持带环境友好标签的物品'
    }

    function goBarChart(dataArr) {
        // 声明所需变量
        var canvas, ctx;
        // 图表属性
        var cWidth, cHeight, cMargin, cSpace;
        var originX, originY;
        // 柱状图属性
        var bMargin, tobalBars, bWidth, maxValue;
        var totalYNomber;
        var gradient;

        // 运动相关变量
        var ctr, numctr, speed;
        //鼠标移动
        var mousePosition = {};

        // 获得canvas上下文
        canvas = document.getElementById("barChart");
        if (canvas && canvas.getContext) {
            ctx = canvas.getContext("2d");
        }
        initChart(); // 图表初始化
        drawLineLabelMarkers(); // 绘制图表轴、标签和标记
        drawBarAnimate(); // 绘制柱状图的动画
        //检测鼠标移动
        var mouseTimer = null;
        canvas.addEventListener("mousemove", function (e) {
            e = e || window.event;
            if (e.layerX || e.layerX == 0) {
                mousePosition.x = e.layerX;
                mousePosition.y = e.layerY;
            } else if (e.offsetX || e.offsetX == 0) {
                mousePosition.x = e.offsetX;
                mousePosition.y = e.offsetY;
            }

            clearTimeout(mouseTimer);
            mouseTimer = setTimeout(function () {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                drawLineLabelMarkers();
                drawBarAnimate(true);
            }, 10);
        });
        //点击刷新图表
        canvas.onclick = function () {
            initChart(); // 图表初始化
            drawLineLabelMarkers(); // 绘制图表轴、标签和标记
            drawBarAnimate(); // 绘制折线图的动画
        };


        // 图表初始化
        function initChart() {

            // 图表信息
            cMargin = 30;
            cSpace = 60;
            cHeight = canvas.height - cMargin * 2 - cSpace;
            cWidth = canvas.width - cMargin * 2 - cSpace;
            originX = cMargin + cSpace;
            originY = cMargin + cHeight;
            // 柱状图信息
            bMargin = 15;
            tobalBars = dataArr.length;
            bWidth = parseInt(cWidth / tobalBars - bMargin);
            maxValue = 0;
            for (var i = 0; i < dataArr.length; i++) {
                var barVal = parseInt(dataArr[i][1]);
                if (barVal > maxValue) {
                    maxValue = barVal;
                }
            }
            maxValue += 50;
            totalYNomber = 10;
            // 运动相关
            ctr = 1;
            numctr = 100;
            speed = 10;
            //柱状图渐变色
            gradient = ctx.createLinearGradient(30, 0, 0, 400);
            gradient.addColorStop(0, '#359381');
            gradient.addColorStop(1, 'rgba(88, 44, 106, 0.48)');
        }

        // 绘制图表轴、标签和标记
        function drawLineLabelMarkers() {
            ctx.translate(0.5, 0.5);  // 当只绘制1像素的线的时候，坐标点需要偏移，这样才能画出1像素实线
            ctx.font = "12px Arial";
            ctx.lineWidth = 1;
            ctx.fillStyle = "#000";
            ctx.strokeStyle = "#000";
            // y轴
            drawLine(originX, originY, originX, cMargin);
            // x轴
            drawLine(originX, originY, originX + cWidth, originY);

            // 绘制标记
            drawMarkers();
            ctx.translate(-0.5, -0.5);  // 还原位置
        }

        // 画线的方法
        function drawLine(x, y, X, Y) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(X, Y);
            ctx.stroke();
            ctx.closePath();
        }

        // 绘制标记
        function drawMarkers() {
            ctx.strokeStyle = "#E0E0E0";
            // 绘制 y
            var oneVal = parseInt(maxValue / totalYNomber);
            ctx.textAlign = "right";
            for (var i = 0; i <= totalYNomber; i++) {
                var markerVal = i * oneVal;
                var xMarker = originX - 5;
                var yMarker = parseInt(cHeight * (1 - markerVal / maxValue)) + cMargin;
                //console.log(xMarker, yMarker+3,markerVal/maxValue,originY);
                ctx.fillText(markerVal, xMarker, yMarker + 3, cSpace); // 文字
                if (i > 0) {
                    drawLine(originX, yMarker, originX + cWidth, yMarker);
                }
            }
            // 绘制 x
            ctx.textAlign = "center";
            for (var i = 0; i < tobalBars; i++) {
                var markerVal = dataArr[i][0];
                var xMarker = parseInt(originX + cWidth * (i / tobalBars) + bMargin + bWidth / 2);
                var yMarker = originY + 15;
                ctx.fillText(markerVal, xMarker, yMarker, cSpace); // 文字
            }
            // 绘制标题 y
            ctx.save();
            ctx.rotate(-Math.PI / 2);
            ctx.fillText("今日碳排放量", -canvas.height / 2, cSpace - 10);
            ctx.restore();
            // 绘制标题 x
            ctx.fillText("数据", originX + cWidth / 2, originY + cSpace / 2 + 10);
        };

        //绘制柱形图
        function drawBarAnimate(mouseMove) {
            for (var i = 0; i < tobalBars; i++) {
                var oneVal = parseInt(maxValue / totalYNomber);
                var barVal = dataArr[i][1];
                var barH = parseInt(cHeight * barVal / maxValue * ctr / numctr);
                var y = originY - barH;
                var x = originX + (bWidth + bMargin) * i + bMargin;
                drawRect(x, y, bWidth, barH, mouseMove);  //高度减一避免盖住x轴
                ctx.fillText(parseInt(barVal * ctr / numctr), x + 15, y - 8); // 文字
            }
            if (ctr < numctr) {
                ctr++;
                setTimeout(function () {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    drawLineLabelMarkers();
                    drawBarAnimate();
                }, speed);
            }
        }

        //绘制方块
        function drawRect(x, y, X, Y, mouseMove) {

            ctx.beginPath();
            ctx.rect(x, y, X, Y);
            if (mouseMove && ctx.isPointInPath(mousePosition.x, mousePosition.y)) { //如果是鼠标移动的到柱状图上，重新绘制图表
                ctx.fillStyle = "green";
            } else {
                ctx.fillStyle = gradient;
                ctx.strokeStyle = gradient;
            }
            ctx.fill();
            ctx.closePath();

        }


    }


    goBarChart(
        [['纸张', paperA4Data * 0.0076], ['衣服', DressData * 13.42], ['主食', RiceFoodData * 1.617], ['肉', porkData], ['葡萄酒', wineData], ['牛奶', milkData], ['电', ElectricData], ['天然气', ElectronicData], ['水', H2oData], ['飞机', FlyData], ['火车', trainsData], ['公交车', BusesData], ['出租车', CarsData], ['自行车', BicycleData]]
    )

});
