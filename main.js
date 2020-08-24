const $btn = document.getElementById('btn-kick');
const $btnPunch = document.getElementById('btn-punch');

/*

😎ЗАДАЧА СО ЗВЕЗДОЧКОЙ

Добавить еще одну кнопку, которая будет наносить другой урон. Сопернику!
Придумай, как при помощи функций оптимизировать код и не повторять его.

Выполнение этой задачи не обязательно, но будет жирным плюсом.


⏳Срок сдачи 23 августа, воскресенье, до 16:00 по московскому времени. Кто успеет сдать, пройдет на 2-ую неделю марафона.

*/
const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
}

const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
}

/* $btn.addEventListener('click', function () {
     console.log('Kick');   
     changeHP(random(20), character);
     changeHP(random(20), enemy);
 })

 $btnPunch.addEventListener('click', function () {
     console.log('Punch');
     changeHP(random(30), enemy);
 })
 */

buttonEvent($btn, 'click', 'Kick', 20, 20);            
buttonEvent($btnPunch, 'click', 'Punch', 0, 30);

// Функция для настройки "Ивента" кнопки
function buttonEvent(button, event, consoleMessage, characterDamage, enemyDamage) {  // Допольнительные параметры в метод для возможности сделать урон "односторонним"
    button.addEventListener(event, function () {
        console.log(consoleMessage);
        changeHP(random(characterDamage), character);
        changeHP(random(enemyDamage), enemy);
    })
} 

function init() {
    console.log('Start The Game!');
    renderHP(character);
    renderHP(enemy);
}

function renderHP(person) {
    renderHPLife(person);
    renderProgressbarHP(person);
}

function renderHPLife(person) {
    person.elHP.innerText = person.damageHP + ' / ' + person.defaultHP;
}

function renderProgressbarHP(person) {
    person.elProgressbar.style.width = person.damageHP + '%';
}

function changeHP(count, person) {
    if(person.damageHP < count) {
        person.damageHP = 0;
        alert('Poor ' + person.name + ' lost!');
        disableButton($btn);
        disableButton($btnPunch);
    } else {
    person.damageHP -= count;
    }
    renderHP(person);
}

function disableButton(button) { // Функция для того, чтобы сделать кнопку неактивной
    button.disabled = true;
}

function random(num) {
    return Math.ceil(Math.random() * num);
}

init();