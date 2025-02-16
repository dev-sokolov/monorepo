
// const canvas = document.getElementById('canvas')
// const contextCanvas = canvas.getContext('2d')

canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
// ctx.fillStyle = "rgb(209, 101, 99)"
// ctx.fillRect(10, 50, 200, 100)

// ctx.beginPath();
// ctx.moveTo(50, 70);
// ctx.lineTo(200, 70);
// ctx.strokeStyle = "red";
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(50, 70);
// ctx.lineTo(200, 70);
// ctx.lineTo(200, 150);
// ctx.closePath()
// // ctx.lineTo(50, 70);
// // ctx.lineTo();
// ctx.fillStyle = "brown";
// ctx.fill();




// ctx.fillStyle = "rgb(90, 25, 24)"
// ctx.fillRect(100, 250, 250, 150)
// // Нарисовать треугольник произвольного размера, обведенный зеленым контуром.

// ctx.beginPath();
// ctx.arc(175, 400, 0, 0, 2 * Math.PI)


// ctx.beginPath();
// console.log(canvas.width);

// console.log(canvas.getBoundingClientRect().width);

// const width = canvas.getBoundingClientRect().width;
// const height = canvas.getBoundingClientRect().height;
// const x1 = Math.random() * width;
// const y1 = Math.random() * height;

// const x2 = Math.random() * width;
// const y2 = Math.random() * height;

// const x3 = Math.random() * width;
// const y3 = Math.random() * height;

// ctx.beginPath();
// ctx.moveTo(x1, y1);
// ctx.lineTo(x2, y2);
// ctx.lineTo(x3, y3);
// ctx.closePath();
// ctx.strokeStyle = "green";
// ctx.stroke();



// Katerina
// console.log(canvas.getBoundingClientRect().width);
// // Math.random()
// const width = canvas.getBoundingClientRect().width
// const height = canvas.getBoundingClientRect().height
// const x1 = Math.random()*width;
// const y1 = Math.random()*height;
// // const width = canvas.getBoundingClientRect().width
// // const height = canvas.getBoundingClientRect().height
// const x2 = Math.random()*width;
// const y2 = Math.random()*height;
// const x3 = Math.random()*width;
// const y3 = Math.random()*height;
// //  начинаем отрисовку
// ctx.beginPath();
// ctx.moveTo(x1, y1);
// ctx.lineTo(x2, y2);
// ctx.lineTo(x3,y3);
// ctx.closePath();
// ctx.strokeStyle = "green";
// ctx.stroke();


// Создать линейный градиент произвольного цвета.


const lingrad = ctx.createLinearGradient(0, 0, canvas.getBoundingClientRect().width, canvas.getBoundingClientRect().height);
// const lingrad = ctx.createLinearGradient(0, 0, 200, 200);

const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};

lingrad.addColorStop(0, randomColor());
lingrad.addColorStop(0.5, randomColor());
lingrad.addColorStop(1, randomColor());
ctx.fillStyle = lingrad;
ctx.fillRect(0, 0, canvas.getBoundingClientRect().width, canvas.getBoundingClientRect().height);
// ctx.fillRect(0, 0, 200, 200);
// ctx.fillRect(10, 10, 130, 130);








// Bekbolot
// const lingrad = ctx.createLinearGradient(0, 0, 0, 150);
// lingrad.addColorStop(0, "#00ABEB");
// lingrad.addColorStop(1, "#fff");
// ctx.fillStyle = lingrad;
// ctx.fillRect(10, 10, 130, 130);