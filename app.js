const containerEl = document.querySelector(".container")
const colorBtnEl = document.querySelector("#color-btn")

let num = 16
let isColorSelected = false

function createGrid(num) {
    containerEl.innerHTML = ""

    for (let i = 0; i < num * num; i++) {
        const square = document.createElement   ("div")
        square.classList.add("square")
        square.style.width = `${100 / num}%`;
        square.style.height = `${100 / num}%`;
        containerEl.appendChild(square)
        square.addEventListener("mouseenter", () => {
            if(isColorSelected){
                square.style.backgroundColor = generateNewColor()
            }
            else {
                square.classList.add("color")
            }
        })
    }
}

createGrid(num);

document.querySelector("#grid-btn").addEventListener("click", () => {
    const input = prompt("Enter a number of squares 1-100")
    num = parseInt(input)
    if (num >= 1 && num <= 100) {
    createGrid(num);
    } 
    else {
        alert("Invalid input. Please enter a number between 1 and 100.")
        }
})

colorBtnEl.addEventListener("click", () => {
    isColorSelected = !isColorSelected
    if (isColorSelected) {
      colorBtnEl.classList.add("selected");
    } else {
      colorBtnEl.classList.remove("selected")
    }
  })

const hexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]



function getCharacter(index) {
	return hexCharacters[index]
}

function generateNewColor() {
	let hexColorRep = "#"

	for (let index = 0; index < 6; index++){
		const randomPosition = Math.floor ( Math.random() * hexCharacters.length ) 
    	hexColorRep += getCharacter( randomPosition )
	}
	
	return hexColorRep
}
