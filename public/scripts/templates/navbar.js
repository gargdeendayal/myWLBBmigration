(function(){dust.register("navbar",body_0);function body_0(chk,ctx){return chk.write("<div class=\"container main-wrapper\" style=\"border-bottom: 1px solid hsl(163, 5%, 36%);\"><div class=\"navbar-header\"><button class=\"navbar-toggle\" type=\"button\" data-toggle=\"collapse\" data-target=\".bs-navbar-collapse\"><span class=\"sr-only\">Toggle navigation</span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span></button><a href=\"./\" class=\"navbar-brand\"><i>Gift n Wish</i></a></div><nav class=\"collapse navbar-collapse bs-navbar-collapse\" style=\"margin-right:50px\"><ul class=\"nav navbar-nav navbar-right navbar-top\"><li><a href=\"#wishlist\">Home</a></li><li><a href=\"/user/friends\">My Friends</a></li><li class=\"dropdown\"><a id=\"drop6\" data-toggle=\"dropdown\" data-target=\"#\" href=\"./\">More <span class=\"caret\"></span></a><ul id=\"menu3\" class=\"dropdown-menu dropdown-menu-left\"><li ><a  tabindex=\"-1\" onclick=\"displayAddress();\" style=\"cursor:pointer\">Update Address</a></li><li class=\"disabled\"><a  tabindex=\"-1\" href=\"#\">My profile</a></li><li  class=\"divider\"></li><li class=\"disabled\"><a tabindex=\"-1\" href=\"#\">Gifts Received</a></li><li class=\"disabled\"><a tabindex=\"-1\" href=\"#\">Gifts Ordered</a></li><li><a class=\"logout\" tabindex=\"-1\" onclick=\"fblogout();\">Logout</a></li></ul></li></ul></nav></div>");}return body_0;})();