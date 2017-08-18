// Use your access token from your studio profile page
// https://studio.whenhub.com/account
var access_token = '<<YOUR ACCESS TOKEN>>';

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

            // Get events for each schedule
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

                                '<div class="list-group">' +
                                '<div class="list-group-item">' +
                                '<h5 class="list-group-item-heading">'+ (x + 1) + '. ' + scheduleDetails.events[x].name + '</h5>' +
                                '<p class="list-group-item-text">Start Date: ' + scheduleDetails.events[x].when.startDate + '</p>' +
                                '<p class="list-group-item-text">Number of media items: ' + scheduleDetails.events[x].media.length + '</p>' +

                                '</div>' +
                                '</div>'

                            );
                        }
                    }else if (scheduleDetails.events.length == 0){
                        $('#' + index).append(
                            '<p class="small">This schedule does not have any events!</p>'
                        );
                    }
                    console.log(scheduleDetails)
                }
            });

            xhr.open("GET", "https://api.whenhub.com/api/schedules/" + jsonResponse[i].id + "?filter[include]=media&filter[include][events]=media");
            xhr.setRequestHeader("authorization", accsss_token);

            xhr.send(scheduleMedia);



        }
    }
});

xhr.open("GET", "https://api.whenhub.com/api/users/me/schedules");

xhr.setRequestHeader("authorization", accsss_token);

xhr.send(scheduleData);