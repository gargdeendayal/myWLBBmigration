(function(){dust.register("friendOverviewCard",body_0);function body_0(chk,ctx){return chk.write("<div class=\"well well-sm nice-transparent-background\"><div class=\"media\"><a class=\"thumbnail profile-card pull-left\" href=\"https://wwww.facebook.com/").reference(ctx.getPath(true,["id"]),ctx,"h").write("\" target=\"_blank\">").section(ctx.getPath(false,["picture","data","is_silhouette"]),ctx,{"else":body_1,"block":body_2},null).write("</a><div class=\"media-body\"><h4 class=\"media-heading\">").reference(ctx.getPath(true,["name"]),ctx,"h").write("</h4>").section(ctx.get("birthday"),ctx,{"else":body_3,"block":body_4},null).write("<p><a href=\"#friendWL/").reference(ctx.getPath(true,["id"]),ctx,"h").write("\" class=\"btn btn-sm btn-primary pull-right\"><span class=\"fa fa-2x fa-gift\"></span> ").reference(ctx.getPath(true,["first_name"]),ctx,"h").write("'s wish list</a></p></div></div></div>");}function body_1(chk,ctx){return chk.write("<img class=\"media-object\" src=\"https://graph.facebook.com/").reference(ctx.getPath(true,["id"]),ctx,"h").write("/picture?type=normal\">");}function body_2(chk,ctx){return chk.write("<i class=\"fa fa-9x fa-smile-o\"></i>");}function body_3(chk,ctx){return chk.write("<span class=\"label label-primary\">Not shared</span></p>");}function body_4(chk,ctx){return chk.write("<span class=\"label label-primary\">").reference(ctx.getPath(true,[]),ctx,"h").write("</span></p>");}return body_0;})();