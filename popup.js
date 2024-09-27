var TRELLO_APP_KEY = '6fd96e65b3bbfbf2c88bd5eb871fab8a';

var t = TrelloPowerUp.iframe({
  appKey: TRELLO_APP_KEY,
  appName: 'Project Cards Power-Up'
});

// Initialize due date picker
document.getElementById('due-date').addEventListener('change', function(e) {
  // Handle due date change
});

// Initialize member selector
t.board('members')
  .then(function (board) {
    var memberSelect = document.getElementById('members');
    board.members.forEach(function (member) {
      var option = document.createElement('option');
      option.value = member.id;
      option.text = member.fullName;
      memberSelect.appendChild(option);
    });
  });

document.getElementById('create-project').addEventListener('click', function() {
  var dueDate = document.getElementById('due-date').value;
  var selectedMembers = Array.from(document.getElementById('members').selectedOptions).map(option => option.value);

  t.card('all')
    .then(function (card) {
      return t.board('id', 'name')
        .then(function (board) {
          // Find or create 'Projects' board
          return t.rest.get(`/members/me/boards?filter=open&fields=name,id`)
            .then(function (boards) {
              var projectsBoard = boards.find(b => b.name === 'Projects');
              if (!projectsBoard) {
                // Create 'Projects' board if it doesn't exist
                return t.rest.post('/boards', { name: 'Projects', defaultLists: false });
              }
              return projectsBoard;
            });
        })
        .then(function (projectsBoard) {
          // Find or create 'New Projects' list
          return t.rest.get(`/boards/${projectsBoard.id}/lists`)
            .then(function (lists) {
              var newProjectsList = lists.find(l => l.name === 'New Projects');
              if (!newProjectsList) {
                return t.rest.post(`/boards/${projectsBoard.id}/lists`, { name: 'New Projects' });
              }
              return newProjectsList;
            })
            .then(function (newProjectsList) {
              // Create new project card
              return t.rest.post('/cards', {
                name: `Project: ${card.name}`,
                desc: `Created from account card: ${card.shortUrl}`,
                idList: newProjectsList.id,
                due: dueDate,
                idMembers: selectedMembers,
                idLabels: card.labels.map(label => label.id)
              });
            });
        });
    })
    .then(function () {
      t.closePopup();
    })
    .catch(function (error) {
      console.error('Error creating project card:', error);
    });
});

t.render(function(){
  // Any UI initialization can go here
});
