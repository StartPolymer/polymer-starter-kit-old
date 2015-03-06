'use strict';

new Polymer({
  themes: [
    {name: 'Red + Blue', id: 'red-blue'},
    {name: 'Pink + Light Blue', id: 'pink-light-blue'},
    {name: 'Purple + Yellow', id: 'purple-yellow'},
    {name: 'Deep Purple + Light Blue', id: 'deep-purple-light-blue'},
    {name: 'Indigo + Pink', id: 'indigo-pink'},
    {name: 'Blue + Pink', id: 'blue-pink'},
    {name: 'Light Blue + Lime', id: 'light-blue-lime'},
    {name: 'Cyan + Orange', id: 'cyan-orange'},
    {name: 'Teal + Amber', id: 'teal-amber'},
    {name: 'Green + Yellow', id: 'green-yellow'},
    {name: 'Light Green + Deep Orange', id: 'light-green-deep-orange'},
    {name: 'Lime + Light Blue', id: 'lime-light-blue'},
    {name: 'Yellow + Orange', id: 'yellow-orange'},
    {name: 'Amber + Indigo', id: 'amber-indigo'},
    {name: 'Orange + Light Blue', id: 'orange-light-blue'},
    {name: 'Deep Orange + Blue', id: 'deep-orange-blue'},
    {name: 'Brown + Amber', id: 'brown-amber'},
    {name: 'Grey + Blue', id: 'grey-blue'},
    {name: 'Blue Grey + Pink', id: 'blue-grey-pink'}
  ],
  route: 'home',
  // Dropdown menu for select theme
  themeSelected: function(e, detail) {
    if (detail.isSelected) {
      var theme = 'polymer-theme-' + detail.item.dataset.theme;
      document.querySelector('body').setAttribute('class', theme);
    }
  },
  ready: function() {
    console.log('Demo element is ready to rock!');
  }
});
