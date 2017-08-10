var wcast = {};
// Got schedule id from embed page of whencast
wcast['schedule-id'] = "5978bda1a13ca311e4752e62";        
wcast['theme'] = 'teal';
var height = $(window).height() - 100;
if (height > 800) {
  height = 800;
}
$('#whencast').html('<div data-whencast="5978bda1a13ca311e4752e63" style="height:' + height + 'px;"></div>');
var node = document.querySelector('div[data-whencast="5978bda1a13ca311e4752e63"]');
WHENCAST.render(node, wcast);

$('.active').removeClass();
$('.second-item').addClass('active');