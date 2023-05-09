


// const circles = document.getElementsByClassName("circle");
// let selectedCircle = null;

// for (let i = 0; i < circles.length; i++) {
//     const circle = circles[i];

//     circle.addEventListener("click", function () {
//         // Remove the background color from the previously selected circle, if any
//         if (selectedCircle !== null) {
//             selectedCircle.style.backgroundColor = "";
//         }

//         // Set the background color of the clicked circle to grey
//         this.style.backgroundColor = "grey";

//         // Update the selectedCircle variable to reference the currently selected circle
//         selectedCircle = this;
//     });
// }



// //Clicking the button to toggle between states//

// const btn = document.querySelector('.btn');
// const ratingState = document.querySelector('.rating');
// const thankYouState = document.querySelector('.results');

// function toggleBtn() {
//     if (thankYouState.style.display === "none") {
//         thankYouState.style.display = "block";
//         ratingState.style.display = "none";
//     } else {
//         thankYouState.style.display = "none";
//     }
// };

// btn.addEventListener('click', toggleBtn);


// Get all elements with the class "circle"
const circles = document.getElementsByClassName("circle");

// Get the submit button
const submitButton = document.querySelector(".btn");

// Get the selected rating element in the results section
const selectedRating = document.querySelector(".selected-rating");

// Get the rating container element
const ratingContainer = document.querySelector(".rating.container");

// Variable to store the selected rating
let rating = null;

// Add click event listeners to each circle element
for (let i = 0; i < circles.length; i++) {
  const circle = circles[i];

  circle.addEventListener("click", function() {
    // Remove the "selected" class from the previously selected circle, if any
    if (rating !== null) {
      rating.classList.remove("selected");
    }

    // Add the "selected" class to the clicked circle
    this.classList.add("selected");

    // Update the selectedRating variable to display the selected rating
    selectedRating.textContent = this.textContent;

    // Store the selected rating
    rating = this;
  });
}

// Add click event listener to the submit button
submitButton.addEventListener("click", function() {
  // Check if a rating has been selected
  if (rating !== null) {
    // Show the results section
    document.querySelector(".results").style.display = "block";

    // Hide the rating container
    ratingContainer.style.display = "none";
  }
});


