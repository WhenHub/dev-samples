var wcast = {};
// Got schedule id from embed page of whencast
wcast['schedule-id'] = "59464f0ec0b33f22e4bcfbb9";        
wcast['theme'] = 'teal';
var height = $(window).height() - 100;
if (height > 800) {
  height = 800;
}
// if you are running local host use this code
$('#sample').html('<div data-whencast="test" data-viz-url-base="https://viz.whenhub.com/" data-app-url-base="https://studio.whenhub.com/" data-api-url-base="https://api.whenhub.com/api/" style="height:' + height + 'px;"></div>');

// otherwise use this code
// $('#sample').html('<div data-whencast="test" style="height:' + height + 'px;"></div>');

// select where to place whencast
var node = document.querySelector('div[data-whencast="test"]');

// render whencast
WHENCAST.render(node, wcast);

// Change highlighted nav item
$('.active').removeClass();
$('.second-item').addClass('active');