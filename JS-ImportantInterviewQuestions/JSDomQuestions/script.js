
//Difference between textContent, innerText and innerHtml

// ==> textContents is all text contained by an element and all its children that are for formatting purposes only. innerText returns all text contained by an element and all its child elements. innerHtml returns all text, including html tags, that is contained by an element.

// ================== Clone Node =================

const originalItem = document.querySelector("#originalItem");

const clonedItem = originalItem.cloneNode(true);
console.log(
  document.querySelector("#clonedItem").querySelector("#originalItem")
);

document.querySelector("#clone").addEventListener("click", () => {
  let originalItemCloned = document
    .querySelector("#clonedItem")
    .querySelector("#originalItem");

  if (originalItemCloned) {
    document.querySelector("#clonedItem").removeChild(originalItemCloned);
    document.querySelector("#clone").textContent = "add the cloned items";
  } else {
    document.querySelector("#clonedItem").appendChild(clonedItem);
    document.querySelector("#clone").textContent = "remove this div";
  }
});

// ================== Toggle Class =================

const buttonElement = document.getElementById("myBtn");

buttonElement.addEventListener('click', () => {
    buttonElement.classList.toggle('active');
})

// ================== Remove All Child Nodes =================

const buttonElement2 = document.getElementById("removeButton");

buttonElement2.addEventListener('click', () => {
  // document.getElementById("container").innerHTML = '' // ==> This is the one way to remove all child nodes 

  // Alternate Way

  const containerElement = document.querySelector("#container");

  while(containerElement.firstChild){
    containerElement.removeChild(containerElement.firstChild)
  }
})

// ================== Add Event Listener to multiple elements =================

const btnEle = document.querySelectorAll(".button");

// It will return nodeList and not an array
// You can iterate over a NodeList using forEach(), a for loop, or for...of.
// However, it does not have all the array methods like map, filter, or reduce unless you convert it to an array.
// You can convert NodeList into an array using Array.from(btnELe)

// const btnArray = Array.from(btnEle)

// btnArray[0].addEventListener('click', () => {
//   console.log(btnArray)
// })

console.log(btnEle);

btnEle.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active')
  })
})

// btnEle.addEventListener('click', function(){
// })