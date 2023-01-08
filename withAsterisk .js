// Напишите скрипт, который сможет определить, является ли данный год високосным в григорианском календаре. Чтобы определить, является ли год високосным, выполните следующие действия:
//     Шаг 1: Если год делится на 4 равномерно, перейдите к шагу 2. В противном случае    перейдите к шагу 5.
//     Шаг 2: Если год делится на 100 равномерно, перейдите к шагу 3. В противном случае   перейдите к шагу 4.
//     Шаг 3: Если год делится на 400 равномерно, перейдите к шагу 4. В противном случае перейдите к шагу 5.
//     Шаг 4: Год является високосным (366 дней).
//     Шаг 5: Год не високосный (у него 365 дней).

function showLeapYear () {
    console.log(`Год является високосным (366 дней).`);
}

function showCommonYear () {
    console.log(`Год не високосный (у него 365 дней).`)
}

function getLeapYear (year) {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                showLeapYear();
            } else {
                showCommonYear();
            }
        } else {
            showLeapYear();
        }
    } else {
        showCommonYear();
    }
}

getLeapYear(2020);


