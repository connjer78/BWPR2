var t = TrelloPowerUp.iframe();

// Initialize due date picker
document.getElementById('due-date').addEventListener('change', function(e) {
  // Handle due date change
});

// Initialize member selector
// You'll need to implement this based on Trello's API for fetching board members

document.getElementById('create-project').addEventListener('click', function() {
  // Implement project card creation logic here
  // This will involve using Trello's API to create a new card,
  // copy labels, set due date, assign members, and add a link back to the source card
});

t.render(function(){
  // Any UI initialization can go here
});
