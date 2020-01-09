var booksModal = document.getElementById("books-modal");

var booksButton = document.getElementById("books-btn");
// Get the <span> element that closes the modal
var closeButton = document.getElementsByClassName("close-modal")[0];
// Get photo modal
var linksModal = document.getElementById("links-modal");
// Get the button that opens the modal
var linksButton = document.getElementById("links-btn");
// Get the <span> element that closes the modal
var closebooksButton = document.getElementsByClassName("close-books-modal")[0];
var closelinksButton = document.getElementsByClassName("close-links-modal")[0];


// When the user clicks on the button, open the modal
booksButton.onclick = function() {
  booksModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closebooksButton.onclick = function() {
  booksModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == booksModal) {
    booksModal.style.display = "none";
  }
}