# homework10
### Вопросы 💎

## 1. Какие есть способы объявления функций?
Выделяют три варианта для определения функций:

1. Function Declaration (FD). Для объявления функции таким образом надо указать:
- ключевое слово function;
- обязательный идентификатор (имя функции);
- параметры функции в круглых скобках; 
- тело функции - инструкция в {};
2. Function Expression (FE). Создает функцию в середине выражения. Для ее создания переменной присваивается значение - новая функция, для которой указывается function, параметры и тело функции.
3. Стрелочные функции (AF). По сути то же, что и FE, но имеет более простую запись: после имени переменной знак "равно", затем параметры функции, затем => и инструкция (если вмещается в одну строчку, записывается просто, если многострочная - в {} и со словом return)

## 2. Приведите примеры вызова одной и той же функции всеми известными вам способами.
В вопросе имеется в виду "вызов функции" или все же объявление?
Предполагаю, второе. Значит
1. FD
function giveSmile () {
    console.log(':-)');
}

2. FE
let giveSmile = function() {
    console.log(':-)');
};

3. AF
let giveSmile = () => console.log(':-)');

Если мое предположение не верно, и речь действительно про вызов функции, мне известен только такой способ - имя функции и круглые скобки (он же в материалах к уроку). Для примера выше так: giveSmile().
Нагуглила еще варианты: Вызов метода, вызов через apply() и call(), а также через конструкторы. Но пока это все просто китайский))

## 3. В чём разница между тестированием и отладкой (дебаггингом)? А что такое логирование?
Отладка (синоним "дебаггинг") - это процесс поиска и устранения ошибок в коде (их причин).
Тестирование - это проверка программы на некотором наборе данных, чтобы выявить проявление ошибок.
Логирование - это вывод из кода конкретной информации, чтобы зафиксировать, что происходит. Вывод может быть в консоль, на почту, в текстовый файл. Оно может пригодится разработчику для отлавливания ошибок (вместо инструментов отладки), или для заказчика (по запросу).

## 4. В чём разница между Function Expression и Function Declaration?
Есть несколько отличий:
1) разный синтаксис;
2) момент, когда движок создает функцию.
Для FD функция создается, когда движок JS готовится выполнять скрипт (блок кода), поэтому она видна везде в скрипе, а для FE функция создаётся, когда выполнение доходит до нее. Как следствие, разница в том, может ли функция быть вызвана раньше своего определения. Для FD - да, а вот FE - нет;
3) область видимости. У FD блочная область видимости, т.е. указанные в ней переменные доступны внутри функции, но не доступны снаружи.


## 5. Что делает функция `console.log()`?
Она выводит (печатает) в консоль браузера информацию, которую у нее запросили.

## 6. По какой причине, мы можем использовать до объявления функцию, объявленную через `Function Declaration`, но не можем ту, которая объявлена через `Function Expression` ? 
Разница в моменте, когда движок JS создает функцию. Для FD функция создается, когда движок JS готовится выполнять скрипт (блок кода) (для FE функция создаётся, когда выполнение доходит до нее). То, что FD функция создается "заранее" возможно, т.к. движок выполняет код не построчно. Сначала идет компиляция кода. На этом этапе компилятор нахоит все FD и объявит их, а потом найдет переменные, присвоим им undefined.

## 7. Что такое глобальная зона видимости функций?
Это область видимости за пределами любых функций, она является самой внешней областью видимости. Все переменные, объявленные в ней, называются глобальными, они доступны с любой другой области видимости.

## 8. Что вернёт код? 
28
    
## 9. Что выведет этот код?
5
    
## 10. Что выведет код?
Сразу undefined, а потом Cat