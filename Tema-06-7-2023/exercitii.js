
function handleClick() {
    const paragraphElement = document.getElementById('details');
    const num1 = parseInt(prompt('First number:'));
    const num2 = parseInt(prompt('Second number:'));
    const sum = num1 + num2;

    if (sum > 100) {
        paragraphElement.textContent = sum;
        paragraphElement.style.color = 'blue';
    } else {
        paragraphElement.textContent = sum;
        paragraphElement.style.color = 'red';
    }
}


    const image1 = document.getElementById('a1');
    const image2 = document.getElementById('a2');
    const image3 = document.getElementById('a3');

function handleClick1() {
    const number = parseInt(prompt('Enter number'));
    

    if(number < 100) {
        image1.style.display = 'block';
        image2.style.display = "block";
        image3.style.display = "block";
    }else if(number === 100) {
        image1.style.display = "block";
        image2.style.display = "block";
        image3.style.display = "none";
    }else {
        image1.style.display = "block";
        image2.style.display = "none";
        image3.style.display = "none";
    }    
}
