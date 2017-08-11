// Highlight correct nav item
$('.active').removeClass();
$('.third-item').addClass('active');

//Get Schedules
var data = JSON.stringify(false);

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    var jsonResponse = JSON.parse(this.responseText);
    console.log(jsonResponse);

    for (i = 0; i < jsonResponse.length; i++) {
        $('.schedules').append(
            '<div>' + jsonResponse[i].name +
            '</div>'

        );
    }



}
});

xhr.open("GET", "https://api.whenhub.com/api/users/me/schedules");
xhr.setRequestHeader("authorization", "ACCESS_TOKEN");

xhr.send(data);




