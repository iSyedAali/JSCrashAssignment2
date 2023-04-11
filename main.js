// // JavaScript Crash Course Assignment 2

// 1. Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it.


// function addNumberClosure(num) {
//     function addNumber(x) {
//       return x + num;
//     }
//     return addNumber;
//   }

// const addFive = addNumberClosure(5);
// console.log(addFive(10)); 
// console.log(addFive(20));


// 2. Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested.


// function searchArray(arr, val) {
//     if (arr.length === 0) {
//       return false;
//     } else if (arr[0] === val) {
//       return true;
//     } else {
//       return searchArray(arr.slice(1), val);
//     }
//   }


//   const arr = [1,3,5,8,10];
// console.log(searchArray(arr, 5)); // returns: true
// console.log(searchArray(arr, 9)); // returns: false


// 3. Write a function that adds a new paragraph element to the bottom of an
// HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph element.


// function addPara(text) {
//     const newPara = document.createElement("p");
//     newPara.textContent = text;
//     document.body.appendChild(newPara);
//   }

//   addPar("This is a new paragraph added to the bottom of the HTML Document.");



// 4. Write a function that adds a new list item to an unordered list in an HTML
// document. The function should take a string argument that will be used as
// the text content of the new list item.



// function addListItem(text) {
//     const newListItem = document.createElement("li");
//     newListItem.textContent = text;
//     const unorderedList = document.querySelector("ul");
//     unorderedList.appendChild(newListItem);
//   }
//   addListItem("New list item added.");



// 5. Write a function that changes the background color of an HTML element.
// The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing
// the new background color.


// function changeBGColor(element, color) {
//     element.style.backgroundColor = color;
//   }
//   const newPara = document.getElementById('newPara');
//   changeBGColor(newPara, 'grey');


// 6. Write a function that saves an object to localStorage. The function should
// take two arguments: the first argument is a string representing the key to
// use for storing the object, and the second argument is the object to store.



// function saveLocal(key, obj) {
//     localStorage.setItem(key, JSON.stringify(obj));
//   }
//   const myObject = { 
//     name: "Aali",
//      age: 23 
//     };
// saveLocal("myKey", myObject);


// 7. Write a function that retrieves an object from localStorage. The function
// should take one argument, which is a string representing the key used to
// store the object. The function should return the object.


// function getObjFromLS(key) {
//     let obj;
//     localStorage.forEach(function (value, storedKey) {
//       if (storedKey === key) {
//         obj = JSON.parse(value);
//       }
//     });
//     return obj;
//   }

// const myObject = getObjFromLS("myKey");
// console.log(myObject);

// 8. Write a function that takes an object and saves each property to
// localStorage using the property name as the key and the property value as
// the value. The function should also retrieve the object from localStorage
// and return it as a new object


// function saveObjToLS(obj) {
    
//     for (const key in obj) {
//       if (obj.hasOwnProperty(key)) {
//         localStorage.setItem(key, JSON.stringify(obj[key]));
//       }
//     }

//     const newObj = {};
//     for (const key in obj) {
//       if (obj.hasOwnProperty(key)) {
//         newObj[key] = JSON.parse(localStorage.getItem(key));
//       }
//     }
//     return newObj;
//   }

//   const myObj = {
//     name: "Aali",
//      age: 23
//     };
// const newObj = saveObjToLS(myObj);
// console.log(newObj);