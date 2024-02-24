// let main = document.querySelector('.main');
// let mainHeight = main.offsetHeight;
// let windowHeight = window.innerHeight;
// let value = 10;
// let stepSize = 1 / value; // Specify the step size for margin adjustment in pixels

// main.addEventListener("wheel", function(event) {
//   event.preventDefault(); // Prevent default scroll behavior
//   let scrollAmount = event.deltaY * -1; // Invert the scroll direction

//   // Check if at the top or bottom of the main element
//   let isAtTop = main.getBoundingClientRect().top >= 0;
//   let isAtBottom = main.getBoundingClientRect().bottom <= windowHeight;

//   // Increase or decrease the marginTop property by the step size
//   let currentMargin = parseInt(main.style.marginTop) || 0;
//   let newMargin = currentMargin + (scrollAmount * stepSize);

//   // Limit the margin based on the current position
//   if (isAtTop && scrollAmount > 0) {
//     return; // Don't add margin at the top
//   } else if (isAtBottom && scrollAmount < 0) {
//     return; // Don't subtract margin at the bottom
//   } else {
//     main.style.transition = "margin-top 0.3s ease"; // Add transition style
//     main.style.marginTop = newMargin + "px";
//   }

//   window.addEventListener("keydown", function(event) {
//     if (event.key === "ArrowUp") {
//       handleScroll(-1);
//     } else if (event.key === "ArrowDown") {
//       handleScroll(1);
//     }
//   });
// });






// let main = document.querySelector('.main');
// let mainHeight = main.offsetHeight;
// let windowHeight = window.innerHeight;
// let value = 10;
// let stepSize = 1 / value; // Specify the step size for margin adjustment in pixels

// window.addEventListener("wheel", function(event) {
//   event.preventDefault(); // Prevent default scroll behavior
//   let scrollAmount = event.deltaY * -1; // Invert the scroll direction
//   handleScroll(scrollAmount);
// });

// window.addEventListener("keydown", function(event) {
//   if (event.key === "ArrowUp") {
//     event.preventDefault(); // Prevent default scroll behavior
//     handleScroll(-1);
//   } else if (event.key === "ArrowDown") {
//     event.preventDefault(); // Prevent default scroll behavior
//     handleScroll(1);
//   }
// });

// function handleScroll(scrollAmount) {
//   // Check if at the top or bottom of the main element
//   let isAtTop = main.getBoundingClientRect().top >= 0;
//   let isAtBottom = main.getBoundingClientRect().bottom <= windowHeight;

//   // Increase or decrease the marginTop property by the step size
//   let currentMargin = parseInt(main.style.marginTop) || 0;
//   let newMargin = currentMargin + (scrollAmount * stepSize);

//   // Limit the margin based on the current position
//   if (isAtTop && scrollAmount > 0) {
//     return; // Don't add margin at the top
//   } else if (isAtBottom && scrollAmount < 0) {
//     return; // Don't subtract margin at the bottom
//   } else {
//     main.style.transition = "margin-top 0.3s ease"; // Add transition style
//     main.style.marginTop = newMargin + "px";
//   }

//   // Reset margin and transition after the transition finishes
// //   setTimeout(function() {
// //     main.style.transition = "";
// //   }, 300);
// }


let main = document.querySelector('.main');
let mainHeight = main.offsetHeight;
let windowHeight = window.innerHeight;
let value = 10;
let wheelStepSize = 1 / value; // Step size for mouse wheel scrolling
let arrowStepSize = 5; // Step size for arrow key scrolling

window.addEventListener("wheel", function(event) {
  event.preventDefault(); // Prevent default scroll behavior
  let scrollAmount = event.deltaY * -1; // Invert the scroll direction
  handleScroll(scrollAmount, wheelStepSize);
});

window.addEventListener("keydown", function(event) {
  if (event.key === "ArrowDown") {
    event.preventDefault(); // Prevent default scroll behavior
    handleScroll(-1, arrowStepSize);
  } else if (event.key === "ArrowUp") {
    event.preventDefault(); // Prevent default scroll behavior
    handleScroll(1, arrowStepSize);
  }
});

function handleScroll(scrollAmount, stepSize) {
  // Check if at the top or bottom of the main element
  let isAtTop = main.getBoundingClientRect().top >= 0;
  let isAtBottom = main.getBoundingClientRect().bottom <= windowHeight;

  // Increase or decrease the marginTop property by the step size
  let currentMargin = parseInt(main.style.marginTop) || 0;
  let newMargin = currentMargin + (scrollAmount * stepSize);

  // Limit the margin based on the current position
  if (isAtTop && scrollAmount > 0) {
    return; // Don't add margin at the top
  } else if (isAtBottom && scrollAmount < 0) {
    return; // Don't subtract margin at the bottom
  } else {
    main.style.transition = "margin-top 0.3s ease"; // Add transition style
    main.style.marginTop = newMargin + "px";
  }

  // Reset margin and transition after the transition finishes
//   setTimeout(function() {
//     main.style.transition = "";
//   }, 300);
}