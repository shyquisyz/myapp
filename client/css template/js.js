// console.log(document.querySelector(".button"))

console.log("Hi")

const button = document.querySelector(".button")
console.log(button)

button.addEventListener("mouseover", () => { 
  console.log("bye!") 
  button.style = "width: 500px;"
  button.style.backgroundColor = "blue"
})

button.addEventListener("mouseout", () => { 
  console.log("out!") 
  button.style = "width: 100px;"
  button.style.backgroundColor = "red"
})