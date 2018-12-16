/* function helloworld() {
  const colorName = window.prompt("Which color do you like?");

  if (colorName) {
    const bodyElement = document.getElementsByTagName("body");
    bodyElement[0].style.backgroundColor = colorName;
  }
}

helloworld();
*/
/*
function hello() {
  const zgoda = window.prompt("czy masz ochote odpowiedziec na wiecej pytan?");

  if (zgoda) {
    const imie = window.prompt("jak sie nazywasz?");
    window.alert("czesc" + imie);

  }
}
hello();

*/
/*
function url() {

  const url = window.prompt("paste me some url");
  // window.location.href = url;
  window.open(url);
}
url();
*/
/*
function changeBackground() {
const first = document.getElementsByClassName("paragraph")[0];
const last  = document.getElementById("last");

first.style.backgroundColor = "green";
last.style.backgroundColor = "red";
}

changeBackground();


function getElement () {
  const elementInContainer = document.getElementById("container");
  const container = document.querySelectorAll("#container > *")
  console.log(getElement);
  
}
getElement();

function addGreyFrame () {
  const firstInContainer = document.querySelector("container").firstElementChild;
  firstChild.style.border = "2px solid gray";

  const parentInContainer = document.querySelector("container").parentElement;
  parentElement.style.border = "5px solid red";
}
addGreyFrame();

function searchElement() {
  const element = document.getElementById("last");
  console.log("previous", element.previousSibling);
  console.log("previous e", element.previousElementSibling);
  console.log("next", element.nextSibling);
  console.log("next e", element.nextElementSibling);
}
searchElement();


function createChildren() {
  const container = document.getElementById("#container");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const firstChild = container.firstElementChild;

  container.appendChild(p1);
  container.insertBefore(p2, firstElementChild);
}
createChildren();

function setText() {
  const header = document.getElementById("greeting");
  let text = document.createTextNode("hello!");

  header.appendChild(text);
  header.textContent = "text2";
}


setText();

function setName() {
  const divElement = document.createElement("div");
  const paragraphElement = document.createElement("p");
  const container = document.getElementById("container");


  container.appendChild(divElement);
  divElement.appendChild(paragraphElement);
  paragraphElement.textContent = "Remek";
  
}

setName();


function setFavoriteColor () {
  const color = window.prompt("Which color do you like?");
  const body = document.querySelector("body");

  if (color) {
  body.style.border = "3px solid" + color;
 //  body.style.border = `3px solid ${color}`;
  }

}
// setFavoriteColor();
*/

function setForm () {
  const name = window.prompt("What is your name?");
  const email = window.prompt("What is your email?");

  if (name && email) {
    const inputName = document.getElementById("name");
    const inputMail = document.getElementById("mail");
    const form = document.querySelector ("form");
  
    inputName.value = name;
    inputMail.value = email;
  
   form.submit();
    }
  }
// setForm();

function createBox() {
  const container = document.getElementById("container");

  const box = document.createElement("div");
  container.appendChild(box);

  box.style.backgroundColor = "red";
  box.style.height = "100px";
  box.style.width = "100px";

  box.addEventListener("mouseover", setGreen);
  box.addEventListener("mouseleave", setRed);
}

function setGreen(event) {
  event.target.style.backgroundColor = "green";
}

function setRed(event) {
  event.target.style.backgroundColor = "red";
}
createBox();