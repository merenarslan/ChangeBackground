
// RGB Color Values

let a = 0;
let b = 0;
let c = 0;

// Create Random RGB Colors

createRandomColorNumber = () => {

    a =  Math.floor(Math.random() * 256);
    b =  Math.floor(Math.random() * 256);
    c =  Math.floor(Math.random() * 256);       
      
}

// Change the backgroundcolor with each click

changeBackgroundColor = () => {
    
    createRandomColorNumber();
    giveRgbColor();    
    document.body.style.backgroundColor = `rgb(${a},${b},${c})`;
}

// Fills the input blanks for RGB color

giveRgbColor = () => {

    document.getElementById('rgb').value= `rgb(${a},${b},${c});`;
}    

    
