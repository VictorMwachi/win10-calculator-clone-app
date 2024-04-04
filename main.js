//select  elements using ther specific Id attribute
const screen = document.getElementById('screen');
const zero = document.getElementById('zero')
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const point = document.getElementById('point');
const equalTo = document.getElementById('equalTo');
const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const percent = document.getElementById('percent');
const squareRoot = document.getElementById('sqrt');
const fraction = document.getElementById('fraction');
const backspace = document.getElementById('backspace');
const square = document.getElementById('square');
const clearScreen = document.getElementById('clear');
const negate =document.getElementById('negate');
let expression = document.getElementById('expression');

/**handle clicking of calculator buttons 
[0,1,2,3,4,5,6,7,8,9,-,+,.,multiplication,backspace,%,division]**/

function handleClick(e){
	//add content of clicked button to display
	//const operands = ['+','−','÷','x']
	//if(operane.target.textContent)
	if (screen.textContent==='0' && ['0','1','2','3','4','5','6','7','8','9','√'].includes(e.target.textContent)) {
		screen.textContent='';
		screen.textContent+=e.target.textContent;
	}
	else{
		screen.textContent+=e.target.textContent
	}
	
	//zero in the beginning check on whether to remove
}

//
function handleAnswer(){
	expression.textContent = screen.textContent+'=';
	screen.textContent = evalExpression(parseExpression(screen.textContent));
};

function handleKeyPress(e){

	const allowedChars = ['0','1','2','3','4','5','6','7','8','9','=','+','-','/','*','.','^','%','Backspace','Enter']
	
	//const allowedChars = ['Enter','Backspace','0','1','2','3','4','5','6','7','8','9','=','+','-','/','*','.','^','%']
	if (screen.textContent==='0' && ['0','1','2','3','4','5','6','7','8','9'].includes(e.key)){
		screen.textContent='';
		screen.textContent+=e.key;
	}
	else {
		if(allowedChars.includes(e.key)){
			if(e.key === '-'){
				screen.textContent+='−';
			}
			else if(e.key==='/'){
				screen.textContent+='÷';
			}
			else if(e.key==='*'){
				screen.textContent += 'x';
			}
			else if (e.key === 'Backspace') {
				backspace.click();
			}
			else if(e.key==='Enter' || e.key === '='){
				handleAnswer();
				//equalTo.click();
			}
			else {
				screen.textContent+=e.key;
			}

	}

	
		
}
	console.log(e.key);
}

function evalExpression(str){
	return (eval(str)).toFixed(9);
}
//add click event listener to the buttons
zero.addEventListener('click', handleClick);
one.addEventListener('click', handleClick);
two.addEventListener('click', handleClick);
three.addEventListener('click', handleClick);
four.addEventListener('click', handleClick);
five.addEventListener('click', handleClick);
six.addEventListener('click', handleClick);
seven.addEventListener('click', handleClick);
eight.addEventListener('click', handleClick);
nine.addEventListener('click', handleClick);
point.addEventListener('click', handleClick);
add.addEventListener('click', handleClick);
subtract.addEventListener('click', handleClick);
multiply.addEventListener('click', handleClick);
divide.addEventListener('click', handleClick);
percent.addEventListener('click',handleClick);
fraction.addEventListener('click',()=>{
	screen.textContent=screen.textContent.replace(/(\d+)/g,"1/$&");
});
square.addEventListener('click',()=>{
	screen.textContent+="^2"});
squareRoot.addEventListener('click',handleClick);

equalTo.addEventListener('click',handleAnswer);

backspace.addEventListener('click',()=>{
	screen.textContent = screen.textContent.substr(0, screen.textContent.length-1);
	screen.textContent.length===0?screen.textContent+=0:false;
});

clearScreen.addEventListener('click',()=>{
	screen.textContent = 0;
	expression.textContent ='';
});

document.addEventListener('keydown', handleKeyPress);

function parseExpression(str){
str = str.replaceAll("−", "-");
str = str.replaceAll("÷", "/");
str = str.replaceAll("x", "*");
str = str.replaceAll("%","*0.01");
str = str.replaceAll(/(\d+)√/g,"$1*√");
str = str.replaceAll(/√(\d+)/g, "Math.sqrt($1)");
str = str.replaceAll("^","**");
str = str.replaceAll("++","+");
str = str.replaceAll("--","+");
str = str.replaceAll(/\+-|-\+/g,"-");
//method 2 for power 2
/*
str.replace(/(?<=\d+)\^2/g,"**2")
//method 3
str.replace(/\d+(?=^2)/g,"**2")
*/
console.log(str)

return str;
}