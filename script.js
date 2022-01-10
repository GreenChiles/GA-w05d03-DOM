


let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  document.getElementById("main-title").innerHTML = "short title"

  // Part 2
const body = document.querySelector('body')
body.style.background = "yellow"
//Not going to lie, i like the yellow
  // Part 3
  
  let list = document.getElementById("favorite-things").getElementsByTagName("li")
  let last = list[list.length -1]
  last.parentNode.removeChild(last)
  
  //source: https://stackoverflow.com/questions/44937553/remove-last-item-of-a-list-using-javascript
  // Part 4
  let specialTitle = document.querySelector(".special-title")
  specialTitle.style.fontSize = "2rem"
  // Part 5
  
  let listTwo = document.querySelector("#past-races").getElementsByTagName("li")
  let rmList = listTwo[listTwo.length -3]
  rmList.parentNode.removeChild(rmList)
//weirdest thing happened, so if i have the same constant names as part 3 it would not
//remove anyhting and take away my yellow body color. But if i have different names 
//like (E.G. listTwo or rmList) it would work. I dont know much about why the new color,
//but i guess i can see some sence in why it woulnt remove a 'li' with reassigning the names.


  // Part 6
  let node = document.createElement("LI");                 // Create a <li> node
  let textnode = document.createTextNode("Denver");         // Create a text node
  node.appendChild(textnode);                              // Append the text to <li>
  document.querySelector("#past-races").appendChild(node);     // Append <li> to <ul> with id="myList"
  //source: https://www.w3schools.com/jsref/met_node_appendchild.asp
  // Part 7

 let aNewDiv = document.createElement('div')
 aNewDiv.classList.add('blog-post', 'purple')
 aNewDiv.innerHTML = '<h1>Denver</h1> <br> <p> I DROVE RECKLESSLY AND WON!</p>'
 document.querySelector(".main").appendChild(aNewDiv)
 console.log(aNewDiv)
  // Part 8


  // Part 9




});
