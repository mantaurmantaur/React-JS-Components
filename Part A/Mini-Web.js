
document.title = "Color Changer";

console.log(document);

const clickedColor = [];
const buttons = document.querySelectorAll("button");
const input = document.getElementById("input-tbx");

buttons.forEach(button => {
    button.addEventListener("click", function(e) {
        const clickedId = e.target.id;
        const colorName = e.target.textContent; //getting the color name through the txt Content of the buttons

        if(clickedId === 'rb'){
            document.body.style.backgroundColor = "red";
            alert('Background will be changed to red');
        } else if (clickedId === 'bb'){
            document.body.style.backgroundColor = "blue";
            alert('Background will be changed to blue');
        } else if(clickedId === 'yb'){
            document.body.style.backgroundColor = "yellow";
            alert('Background will be changed to yellow');
        }

        colorNameAppending(colorName); //calling the function in adding the color name to the tbx
    });
});


function colorNameAppending(colorName){
    clickedColor.push(colorName);

    input.value = clickedColor.join(", ");

    console.log(clickedColor);
}