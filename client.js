var TRELLO_APP_KEY = '6fd96e65b3bbfbf2c88bd5eb871fab8a';
var ICON = 'https://connjer78.github.io/BWPR/assets/rocketship.PNG';

// You can add any additional helper functions or logic here if needed

window.TrelloPowerUp.initialize({
  'card-buttons': function(t, options) {
    return [{
      icon: ICON,
      text: 'Create Project',
      callback: function(t) {
        return t.popup({
          title: 'Create Project Card',
          url: './popup.html',
          height: 300
        });
      }
    }];
  }
}, {
  appKey: '6fd96e65b3bbfbf2c88bd5eb871fab8a',
  appName: 'Project Cards Power-Up'
});
