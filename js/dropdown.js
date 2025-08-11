/* Объявление переменной кнопки выпадающего списка */
let button = document.getElementById("dropBut");
/* Обработчик события этой кнопки */
button.addEventListener('click', ()=>{
    myClick();
})
/* Функция с кликом */
function myClick(){
    document.getElementById("dropUl").classList.toggle("show");
}