
// Дано целое трехзначное число. Найдите сумму его цифр.

let getSum = (num) => {
    let hundreds = parseInt(num / 100);
    let dozens = parseInt((num - hundreds*100)/ 10);
    let units = num % 10;
    return hundreds + dozens + units;
};

getSum(123);

// В некоторой школе решили набрать три новых математических класса и оборудовать кабинеты для них новыми партами. За каждой партой может сидеть два учащихся. 
// Известно количество учащихся в каждом из трех классов. Выведите наименьшее число парт, которое нужно приобрести для них. Каждый класс сидит в своем кабинете. 
// Программа получает на вход три целых неотрицательных числа: количество учащихся в каждом из трех классов (числа не превышают 1000).

let getDesksNumber = (studentsAmount1, studentsAmount2, studentsAmount3) => Math.ceil(studentsAmount1/2) + Math.ceil(studentsAmount2/2) + Math.ceil(studentsAmount3/2);

getDesksNumber (20, 21, 22);

// Пирожок в столовой стоит A рублей и B копеек. Определите, сколько рублей и копеек нужно заплатить за N пирожков.

let getPurchasePrice = (rubles, pennies, quantity) => {
    if (pennies >= 0 && pennies < 10) {
        pennies = '0' + pennies;
    }
    let price = (Number(`${rubles}.${pennies}`))*quantity;
    let purchasePrice = price.toFixed(2);
    let rublesNewPrice = purchasePrice.slice(0, -3);
    let penniesNewPrice = purchasePrice.slice(-2);
    return `К оплате ${rublesNewPrice} руб. и ${penniesNewPrice} коп.`;
}

getPurchasePrice(10, 20, 2)

// Дано целое неотрицательное число N, определите число десятков в нем (предпоследнюю цифру числа). 
// Если предпоследней цифры нет, то можно считать, что число десятков равно нулю.

// Число десятков определяем так:
let getDozens = (num) => parseInt(num / 10);
getDozens(1322);

// А вот предпоследнюю цифру числа можно так:
let getDozens2 = (num) => {
    if ((num >= 0 && num < 10)) {
        return 0;
    } else {
        return +String(num).slice(-2, -1);
    }
}

getDozens2(81);


// Электронные часы показывают время в формате h:mm:ss (от 0:00:00 до 23:59:59), то есть сначала записывается количество часов, потом обязательно двузначное количество минут, 
// затем обязательно двузначное количество секунд. Количество минут и секунд при необходимости дополняются до двузначного числа нулями. С начала суток прошло N секунд. 
// Выведите, что покажут часы. Формат входных данных: На вход дается натурально число N, не превосходящее 10^7 (10 000 000).

let getTime = (sec) => {    
        if (sec <= 86399) {
        let hours = parseInt(sec / 60 / 60);
        let minutes = parseInt(sec/60 - hours*60);
        if (minutes >= 0 && minutes < 10) {
            minutes = '0' + minutes;
        };
        let seconds = sec % 60;
        if (seconds >= 0 && seconds < 10) {
            seconds = '0' + seconds;
        }; 
        return `${hours}:${minutes}:${seconds}`
    } else {
        let day = parseInt(sec / 24 / 60 / 60);
        let hours = parseInt((sec - day*24*60*60) / 60 / 60);
        let minutes = parseInt((sec - day*24*60*60)/60 - hours*60);
        if (minutes >= 0 && minutes < 10) {
            minutes = '0' + minutes;
        };
        let seconds = sec % 60;
        if (seconds >= 0 && seconds < 10) {
            seconds = '0' + seconds;
        };
        return `${hours}:${minutes}:${seconds}`
    }
}

getTime(10000000);


// Даны значения двух моментов времени, принадлежащих одним и тем же суткам: часы, минуты и секунды для каждого из моментов времени. 
// Известно, что второй момент времени наступил не раньше первого. Определите, сколько секунд прошло между двумя моментами времени. Формат входных данных: 
// Программа на вход получает три целых числа: часы, минуты, секунды, задающие первый момент времени и три целых числа, задающих второй момент времени. 
// Формат выходных данных: Выведите число секунд между этими моментами времени.

getTargetSeconds = (hh1, mm1, ss1, hh2, mm2, ss2) => (hh1*60*60+mm1*60+ss1) - (hh2*60*60+mm2*60+ss2);

getTargetSeconds(23,59,0, 0, 1, 0)


// Улитка ползет по вертикальному шесту высотой H метров, поднимаясь за день на A метров, а за ночь спускаясь на B метров. 
// На какой день улитка доползет до вершины шеста? Формат входных данных:  Программа получает на вход целые неотрицательные числа H, A, B, причем H > B. 
// Числа не превосходят 100. Формат выходных данных: Программа должна вывести одно натуральное число. Гарантируется, что A > B.

let getTargetDays = (h, a, b) => {
    if (h > a) {
        let h1 = h-a;
        let days = 1;
        let delta = a-b;
        while (h1 > 0) {
            h1 -= delta;
            days +=1;
        }
        return days;
    } else {
        return 1;
    }
}

getTargetDays (10, 3, 2);