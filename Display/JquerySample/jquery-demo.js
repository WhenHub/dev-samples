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
        if (i < 6){
            if(i == 0) {        
                $('.nav-tabs').append(
                        '<li class="active"><a data-toggle="tab" href="#' + i + '">' + jsonResponse[i].name + '</a></li>'
                    );
                if (jsonResponse[i].description== undefined){
                    $('.tab-content').append(
                        '<div id="' + i + '" class="tab-pane fade in active">'+ 
                        '<blockquote class="small">This schedule does not have a description.</blockquote>' +
                        '<h4>Events</h4>' + 
                        '</div>'
                    );

                }else{
                    $('.tab-content').append(
                        '<div id="' + i + '" class="tab-pane fade in active">'+ 
                        '<blockquote>' + jsonResponse[i].description + '</blockquote>' +
                        '<h4>Events</h4>' + 
                        '</div>'
                    );
                }
            }
            else {
                $('.nav-tabs').append(
                        '<li><a data-toggle="tab" href="#' + i + '">' + jsonResponse[i].name + '</a></li>'
                );
                if (jsonResponse[i].description== undefined){
                    $('.tab-content').append(
                        '<div id="' + i + '" class="tab-pane fade">' + 
                        '<blockquote class="small">This schedule does not have a description.</blockquote>' +
                        '<h4>Events</h4>' + 
                        '</div>'
                    );
                }else{
                    $('.tab-content').append(
                        '<div id="' + i + '" class="tab-pane fade">' + 
                        '<blockquote>' + jsonResponse[i].description + '</blockquote>' +
                        '<h4>Events</h4>' + 
                        '</div>'
                    );
                }
            }
        }else {
            break;
        }

        // Get media and details for each schedule
        var scheduleMedia = JSON.stringify(false);

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            var scheduleDetails = JSON.parse(this.responseText);
            var index = $("a:contains(" + scheduleDetails.name + ")").attr('href').charAt(1);
            
            if (scheduleDetails.events.length != 0){
                for (x=0; x < scheduleDetails.events.length; x++){
                    $('#' + index).append(
                        '<p>' + (x + 1) + '. ' + scheduleDetails.events[x].name + '</p>'
                    );
                }
            }else if (scheduleDetails.events.length == 0){
                $('#' + index).append(
                    '<p class="small">This schedule does not have any events!</p>'
                );
                
            }

        }
        });

        xhr.open("GET", "https://api.whenhub.com/api/schedules/" + jsonResponse[i].id + "?filter%5Binclude%5D%5Bevents%5D=media");
        // Replace "ACCESS_TOKEN" with your personal one
        xhr.setRequestHeader("authorization", "3hLISQYAANWsxUSSMbmRGT8ypbVA9L6lrrU8nnCNvfadaKYEuOnLtAENlv0h8MVz");

        xhr.send(scheduleMedia);












    }
 }
});

xhr.open("GET", "https://api.whenhub.com/api/users/me/schedules");
xhr.setRequestHeader("authorization", "3hLISQYAANWsxUSSMbmRGT8ypbVA9L6lrrU8nnCNvfadaKYEuOnLtAENlv0h8MVz");

xhr.send(scheduleData);



