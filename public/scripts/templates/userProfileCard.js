(function(){dust.register("userProfileCard",body_0);function body_0(chk,ctx){return chk.write("<legend>Hello, ").reference(ctx.getPath(true,["firstName"]),ctx,"h").write("!</legend><div class=\"well well-sm\"><div class=\"media\"><a class=\"thumbnail profile-card pull-left\" href=\"#\"><img class=\"media-object\" src=\"https://graph.facebook.com/").reference(ctx.getPath(true,["userId"]),ctx,"h").write("/picture?type=normal\"></a><div class=\"media-body\"><h4 class=\"media-heading\">").reference(ctx.getPath(true,["firstName"]),ctx,"h").write(" ").reference(ctx.getPath(true,["lastName"]),ctx,"h").write("</h4><p><span class=\"label label-primary\">").reference(ctx.getPath(true,["birthday"]),ctx,"h").write("</span></p></div></div></div>");}return body_0;})();