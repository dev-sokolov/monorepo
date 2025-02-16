const blockMain = document.querySelector('.block-main');
const img = document.querySelector('.block-main img');
const button = document.querySelector('.block-main button');

document.body.addEventListener('click', (event) => {
    console.log(event.target);
    alert('body')    
})

blockMain.addEventListener('dbclick', (event) => {
    console.log(event.target);
    alert('blockMain');
});


img.addEventListener('click', (event) => {
    event.stopImmediatePropagation();
    console.log(event.target);
    alert('img');
});

button.addEventListener('click', (event) => {
    event.preventDefault()
    console.log(event.target);
    alert('button');
});



