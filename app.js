const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');


ctx.lineWidth = 3;


//semi circulo cheio da esquerda
ctx.beginPath();
ctx.arc(150, 200, 50, Math.PI/2, 3*Math.PI/2, true);
ctx.strokeStyle = '#fff';
ctx.stroke();
ctx.closePath();

// //semicirculo cheio direita
ctx.beginPath();
ctx.arc(650, 200, 50, 3*Math.PI/2, Math.PI/2, true);
ctx.strokeStyle = '#fff';
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(50, 200, 150, Math.PI/2, 3*Math.PI/2, true);
ctx.strokeStyle = '#fff';
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(750, 200, 150, 3*Math.PI/2, Math.PI/2, true);
ctx.stroke();
ctx.closePath();

// //linhas das bordas dos circulos até os cantos da quadra
ctx.beginPath();
ctx.moveTo(750, 350);
ctx.lineTo(800, 350);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(750, 50);
ctx.lineTo(800, 50);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(0, 350);
ctx.lineTo(50, 350);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(0, 50);
ctx.lineTo(50, 50);
ctx.stroke();
ctx.closePath();

// //retangulos esquerda
ctx.strokeRect(-1, 150, 150, 100);
ctx.strokeRect (-1, 130, 150, 140);

ctx.fillStyle = '#ff6600';

ctx.fillRect(-2, 151, 149, 98);

// //retangulos direita
ctx.strokeRect(650, 150, 151, 100);
ctx.strokeRect(650, 130, 151, 140);
ctx.fillRect(652, 151, 149, 98);

// //linha esquerda vert
ctx.beginPath();
ctx.moveTo(40, 175);
ctx.lineTo(40, 225);
ctx.stroke();
ctx.closePath();

// //linha esq hor
ctx.beginPath();
ctx.moveTo(40, 200);
ctx.lineTo(50, 200);
ctx.stroke();
ctx.closePath();

// //circulo preenchido esq
ctx.beginPath();
ctx.arc(53, 200, 5, 0, Math.PI * 2, true);
ctx.stroke();
ctx.fillStyle = '#fff';
ctx.fill();
ctx.closePath();

// //linha direita vert
ctx.beginPath();
ctx.moveTo(760, 175);
ctx.lineTo(760, 225);
ctx.stroke();
ctx.closePath();

// //linha dir hor
ctx.beginPath();
ctx.lineWidth = 3;
ctx.moveTo(750, 200);
ctx.lineTo(760, 200);
ctx.strokeStyle = '#fff';
ctx.stroke();
ctx.closePath();

// //circulo preenchido dir
ctx.beginPath();
ctx.arc(747, 200, 5, 0, endAngle, true);
ctx.stroke();
ctx.fillStyle = '#fff';
ctx.fill();
ctx.closePath();

// //circulo do meio
ctx.beginPath();
ctx.lineWidth = 5;
ctx.arc(400, 200, 50, 0, 2 * Math.PI, true);
ctx.stroke();
ctx.fillStyle = '#ff6600';
ctx.fill();
ctx.closePath();

// //linha do meio
ctx.beginPath();
ctx.moveTo(400, 0);
ctx.lineTo(400, 400);
ctx.stroke();
ctx.closePath();


ctx.lineWidth = 3;
// //semi circulo pontilhado esquerda
ctx.beginPath();
ctx.setLineDash([5, 5]);
ctx.arc(149, 200, 50, Math.PI/2, 3*Math.PI/2);
ctx.stroke();
ctx.closePath();


// //semicirculo pontilhado direita
ctx.beginPath();
ctx.arc(650, 200, 50, 3*Math.PI/2, Math.PI/2);
ctx.stroke();
ctx.closePath();





