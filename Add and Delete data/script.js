const input = document.querySelector('#items-name');
const button = document.querySelector('button');
const allItems = document.querySelector('.all-items');
const clearButton = document.querySelector('.clear')


button.addEventListener('click',function(){
    console.log(input.value)
    allItems.innerHTML += '<h3>'+ input.value + '</h3>'
    
    input.value='';
})
clearButton.addEventListener('click',function(){
    allItems.innerHTML = '';
    
})
