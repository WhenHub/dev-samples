var wcast = {};
// Got schedule id from embed page of whencast
wcast['schedule-id'] = "5978bda1a13ca311e4752e62";        
wcast['theme'] = 'teal';
var height = $(window).height() - 100;
if (height > 800) {
  height = 800;
}
// if you are running local host use this code
$('#sample').html('<div data-whencast="test" data-viz-url-base="https://viz.whenhub.com/" data-app-url-base="https://studio.whenhub.com/" data-api-url-base="https://api.whenhub.com/api/" style="height:' + height + 'px;"></div>');
// otherwise use this code
// $('#sample').html('<div data-whencast="test" style="height:' + height + 'px;"></div>');

var node = document.querySelector('div[data-whencast="test"]');
WHENCAST.render(node, wcast);

$('.active').removeClass();
$('.second-item').addClass('active');