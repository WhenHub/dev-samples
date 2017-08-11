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
        if(i == 0) {        
            $('.nav-tabs').append(
                    '<li class="active"><a href="#">' + jsonResponse[i].name + '</a></li>'
                );
        }else {
            $('.nav-tabs').append(
                    '<li><a href="#">' + jsonResponse[i].name + '</a></li>'
            );


        }
    }



}
});

xhr.open("GET", "https://api.whenhub.com/api/users/me/schedules");
xhr.setRequestHeader("authorization", "EcxdSYSXjXN0AOxoywC1iINGHygyWsdOtSr5gB8Mr06Oazx1fiQcdmFJbPsR62ig");

xhr.send(data);




