const box = document.getElementById("box");

box.addEventListener("click", createFood);

function createFood(){
    const foods = ["🥔", "🥒", "🍄", "🥟", "🍌"]; 
    const index = Math.floor(Math.random() * foods.length); 
    const food = foods[index];
    const foodElement = document.createElement("div");

    box.appendChild(foodElement);
    foodElement.classList.add("food");
    foodElement.style.transform = `translateY(${Math.random() * 100 - 50}vh)`;
    foodElement.style.transform = `translateX(${Math.random() * 100 - 50}vw)`;

    foodElement.textContent = food;
    box.addEventListener("click", createFood);
}
