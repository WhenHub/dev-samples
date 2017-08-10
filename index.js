document.getElementById("navMenu").innerHTML =
    "<nav class='navbar navbar-inverse'>" +
        "<div class='container-fluid'>" +
            "<div class='navbar-header'>" +
            "<a class='pull-left' href='https://www.whenhub.com/'>" +
                "<img src='https://cdn.whenhub.com/img/logo/logo-185x36.png' style='padding: 7px;'>" +
            "</a>" +
            "</div>" +
            "<ul class='nav navbar-nav'>" +
                "<li class='first-item active'><a href='../index.html'>Developer Samples Home</a></li>" +
                "<li class='second-item'><a href='JavascriptEmbed/embed-demo.html'>JavaScript Embed</a></li>" +
                "<li class='third-item dropdown'>" +
                    "<a class='dropdown-toggle' data-toggle='dropdown' href='#'>Display Samples" +
                    "<span class='caret'></span></a>" +
                    "<ul class='dropdown-menu'>" + 
                        "<li><a href='#'>Angular Sample</a></li>" +
                        "<li><a href='#'>Jquery Sample</a></li>" +
                    "</ul>" +
                "</li>" +
            "</ul>" +
        "</div>" +
    "</nav>"
