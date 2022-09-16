var counter = document.querySelector('.counter');
var limit = document.querySelector('.limit');
var textarea = document.querySelector('.textarea');



textarea.addEventListener('keyup' , function(){
    counter.innerHTML = textarea.value.length 
    limit.innerHTML = 500-textarea.value.length
});