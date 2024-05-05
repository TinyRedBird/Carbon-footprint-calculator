
const FlyemissionFactor1 = 0.275
const FlyemissionFactor2 = 0.105
const FlyemissionFactor3 = 0.139
const paperA4EmissionFactor = 0.0076
const DressEmissionFactor = 13.42
const RiceFoodEmissionFactor = 1.617
const porkEmissionFactor = 2.0286
const areaEmissionFactor = 334.17
const ElectricEmissionFactor = 0.581
const GasEmissionFactor = 0.0017
const H2oEmissionFactor = 0.82
const trainsEmissionFactor = 0.035
const BusesEmissionFactor = 0.102
const CarsEmissionFactor = 0.513
const BicycleEmissionFactor = 0.0076
const wineEmissionFactor = 1.75
const milkEmissionFactor = 1.07
const solarWaterHeaterEmissionFactor1 = 33.53 / 1000 * 4.8
const efficientLightsEmissionFactor1 = 26.4 * 0.6
const recycleOldEmissionFactor1 = 0.15977
const solarWaterHeaterEmissionFactor2 = 0.798 * 4.8
const efficientLightsEmissionFactor2 = 26.4 * 0.96
const recycleOldEmissionFactor2 = 0.189

function primaryTab() {
    let Tab = document.getElementById('tabBox')
    let Lable = Tab.getElementsByClassName('lableBox')[0]
    let Lables = Lable.getElementsByTagName('li')
    let Content = Tab.getElementsByClassName('contentBox')[0]
    let Contents = Content.getElementsByClassName('content')
    Lables[0].className = 'active'
    Contents[0].style.display = 'block'
    for (let i = 0; i < Lables.length; i++) {
        Lables[i].onclick = function () {
            for (let n = 0; n < Lables.length; n++) {
                Lables[n].className = ''
                Contents[n].style.display = 'none'
            }
            this.className = 'active'
            Contents[i].style.display = 'block'
        }
    }
}

let myaudio = document.getElementById("audio");
let mydiv = document.getElementById("box");
myaudio.volume = 0.8;
mydiv.onclick = function () {
    if (myaudio.paused) {
        myaudio.play();
    }
    else {
        myaudio.pause();
    }
}

function saveData() {
    let carbonEmission = 0   
    let RiceFood =document.getElementById('RiceFood').value;
    let pork =document.getElementById('pork').value;
    let wine =document.getElementById('wine').value;
    let milk =document.getElementById('milk').value;
    let paperA4 =document.getElementById('paperA4').value;
    let Dress =document.getElementById('Dress').value;
    let solarWaterHeater =document.getElementById('solarWaterHeater').value;
    let recycleOld =document.getElementById('recycleOld').value;
    let efficientLights =document.getElementById('efficientLights').value;
    let Fly =document.getElementById('Fly').value;
    let trains =document.getElementById('trains').value;
    let Buses =document.getElementById('Buses').value;
    let Cars =document.getElementById('Cars').value;
    let Bicycle =document.getElementById('Bicycle').value;
    let area =document.getElementById('area').value;
    let Electric =document.getElementById('Electric').value;
    let Gas =document.getElementById('Gas').value;
    let H2o =document.getElementById('H2o').value;

    localStorage.setItem('RiceFoodData', RiceFood);
    localStorage.setItem('porkData', pork);
    localStorage.setItem('wineData', wine);
    localStorage.setItem('milkData', milk);
    localStorage.setItem('paperA4Data', paperA4);
    localStorage.setItem('DressData', Dress);
    localStorage.setItem('solarWaterHeaterData', solarWaterHeater);
    localStorage.setItem('recycleOldData', recycleOld);
    localStorage.setItem('efficientLightsData', efficientLights);
    localStorage.setItem('FlyData', Fly);
    localStorage.setItem('trainsData', trains);
    localStorage.setItem('BusesData', Buses);
    localStorage.setItem('CarsData', Cars);
    localStorage.setItem('BicycleData', Bicycle);
    localStorage.setItem('areaData', area);
    localStorage.setItem('ElectricData', Electric);
    localStorage.setItem('GasData', Gas);
    localStorage.setItem('H2oData', H2o);
    
    let result = document.getElementById('result')
    carbonEmission += paperA4 * paperA4EmissionFactor
    carbonEmission += Dress * DressEmissionFactor
    carbonEmission += RiceFood * RiceFoodEmissionFactor
    carbonEmission += pork * porkEmissionFactor
    carbonEmission += area * areaEmissionFactor
    carbonEmission += Electric * ElectricEmissionFactor
    carbonEmission += Gas * GasEmissionFactor
    carbonEmission += H2o * H2oEmissionFactor
    carbonEmission += trains * trainsEmissionFactor
    carbonEmission += Buses * BusesEmissionFactor
    carbonEmission += Cars * CarsEmissionFactor
    carbonEmission += Bicycle * BicycleEmissionFactor
    carbonEmission += wine * wineEmissionFactor
    carbonEmission += milk * milkEmissionFactor
    if (0 <= Fly && Fly < 200) { //km
        carbonEmission += FlyemissionFactor1 * Fly
    } else if (200 <= Fly && Fly <= 1000) { //km
        carbonEmission += FlyemissionFactor2 * (Fly - 200) + 55
    } else {
        carbonEmission += FlyemissionFactor3 * Fly
    }
    const solarWaterHeaterischecked = document.querySelector('#solarWaterHeater');

    const efficientLightsischecked = document.querySelector('#efficientLights');

    const recycleOldischecked = document.querySelector('#recycleOld');
    console.log(solarWaterHeaterischecked.checked);
    console.log(recycleOldischecked.checked);
    console.log(efficientLightsischecked.checked);
    if (recycleOldischecked.checked == true) {
        carbonEmission += recycleOldEmissionFactor1      
    } else {
        carbonEmission += recycleOldEmissionFactor2       
    }
    if (efficientLightsischecked.checked == true) {
        carbonEmission += efficientLightsEmissionFactor1      
    } else {
        carbonEmission += efficientLightsEmissionFactor2      
    }
    if (solarWaterHeaterischecked.checked == true) {
        carbonEmission += solarWaterHeaterEmissionFactor1       
    } else {
        carbonEmission += solarWaterHeaterEmissionFactor2      
    }
    result.innerHTML = '计算结果为：' + carbonEmission

    // alert('Data saved successfully!');
}

let text = document.getElementById('text');
let forest = document.getElementById('forest');
let forest1 = document.getElementById('forest1');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 1.69 + 'px';
    forest.style.top = value * 0.5 + 'px';
    forest1.style.top = value * 0.25 + 'px';
    hill5.style.left = value * 1.25 + 'px';
    hill4.style.left = value * -1.25 + 'px';
    hill1.style.top = value * 0.5 + 'px';
})

primaryTab()
