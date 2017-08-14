// Highlight correct nav item
$('.active').removeClass();
$('.third-item').addClass('active');

//Get Schedules and set up table
var scheduleData = JSON.stringify(false);

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    var jsonResponse = JSON.parse(this.responseText);

    for (i = 0; i < jsonResponse.length; i++) {
        if(i == 0) {        
            $('.nav-tabs').append(
                    '<li class="active"><a data-toggle="tab" href="#' + i + '">' + jsonResponse[i].name + '</a></li>'
                );

            $('.tab-content').append(

                '<div id="' + i + '" class="tab-pane fade in active">'+ 
                 '<blockquote>' + jsonResponse[i].description + '</blockquote>' +
                 
                '</div>'
            );

        }else {
            $('.nav-tabs').append(
                    '<li><a data-toggle="tab" href="#' + i + '">' + jsonResponse[i].name + '</a></li>'
            );

            $('.tab-content').append(

                '<div id="' + i + '" class="tab-pane fade">' + 
                '<blockquote>' + jsonResponse[i].description + '</blockquote>' +
                '</div>'
            );
        }

        // Get media and details for each schedule
        var scheduleMedia = JSON.stringify(false);

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            var scheduleDetails = JSON.parse(this.responseText);
            console.log($("a:contains(" + scheduleDetails.name + ")").attr('href').charAt(1));
            var index = $("a:contains(" + scheduleDetails.name + ")").attr('href').charAt(1);
            
            for (x=0; x < scheduleDetails.events.length; x++){
                $('#' + index).append(
                    '<p>' + scheduleDetails.events[x].name + '</p>'
                );
            }

        }
        });

        xhr.open("GET", "https://api.whenhub.com/api/schedules/" + jsonResponse[i].id + "?filter%5Binclude%5D%5Bevents%5D=media");
        xhr.setRequestHeader("authorization", "eo1Id9TYl5J143TPb4OQorm1V7DCLFXA7B5VoezqoOjgO6w9rCXdIGUNTsFM5eTr");

        xhr.send(scheduleMedia);












    }
 }
});

xhr.open("GET", "https://api.whenhub.com/api/users/me/schedules");
xhr.setRequestHeader("authorization", "eo1Id9TYl5J143TPb4OQorm1V7DCLFXA7B5VoezqoOjgO6w9rCXdIGUNTsFM5eTr");

xhr.send(scheduleData);



