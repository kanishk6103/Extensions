[{"Owner":"Jigglypow","Date":"2014-06-09T08:20:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello everyone!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So I want to start using babylon.js and I want to calculate the collison on the server (so I guess I need no rendering_co_ only calculating with meshs loaded by loaders). For that I would use node.js for server-side javascript._lt_/p_gt__lt_p_gt_The question is_co_ is it possible to use babylon with node.js since node.js is using their module.export way to include other files?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Anyone tried it out? I tried it with normal _lt_em_gt_npm install babylonjs_lt_/em_gt_ but when I require the babylon files with node.js I only get errors like _lt_em_gt_navigator objects is not defined_lt_/em_gt_._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If anyone knows more on this topic I would be interested to hear (since I am a noob)!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_greets~_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"reddozen","Date":"2014-06-09T13:37:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_That_t_s really not recommended. You will still need some form of rudimentary collision detection in the client or you_t_re going to get a lot of position readjustment _qt_glitches_qt_. If it_t_s not real time movement then you_t_d probably be ok. What you_t_re suggesting will cause the render loop to wait for your packet to the server_co_ collision calculation calcultion_co_ the return message_co_ message processing_co_ etc. You_t_re going to loose a lot of FPS doing it that way._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The more standard way to do that is to guess the collisions on the client and then adjust as needed after the server calculates it. You build in an acceptable deviation to minimize the position glitching. This is really only useful when you_t_re trying to stop speed / position hackers in your game._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Kilombo","Date":"2014-06-09T13:41:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Indeed_co_ I_t_m working on a project that uses that also. I calculate everything in the client then I post the coordinates on the database (in a PHP server). In the beggining I thought the same has you_co_ but rapidly I saw that it would be impossible to run it smoothly (and my project is not smooth enough_co_ i can assure you_co_ cause of the delay to get the coords for drawing the meshes)._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Jigglypow","Date":"2014-06-10T09:29:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Well I want to calculate the collision on the client and server_co_ as you said_co_ the server will check if the new position is possible._lt_/p_gt__lt_p_gt_But I still got the problem with the 3d calculation on the server. Since I use node.js as the server I need to get babylon working on node.js (atleast for calculation)._lt_/p_gt__lt_p_gt_I tried it so far with this gulp-builder (don_t_t know what it is exactly) but I don_t_t get babylon to work with node.js._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks anyways._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"grimor","Date":"2014-06-10T10:17:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Umm_co_ you will not run babylon.js on node itself. It_t_s meant to run on client side_co_ because it using canvas and WebGL to draw. You can_t_t draw on canavas with node.js itself. You can only try emulate that with ex. _lt_a href_eq__qt_https_dd_//github.com/learnboost/node-canvas_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/learnboost/node-canvas_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"reddozen","Date":"2014-06-10T13:32:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_It_t_s not going to be as easy as that. What you_t_re going to have to do is make a custom server that will keep up with movement speed_co_ move start_co_ move end_co_ move direction_co_ and then use a program on the server side that will read positions from a 3D environment and then compare client location with server location. If the positions are not within your margin of error then you have to issue a _qt_move to_qt_ packet back to the client to put the moving object where the server thinks it should be._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_This is the problem with something like the canned node.js. You_t_re going to need a server program that can handle all the 3D math_co_ and position tracking through packet updates from the client. I don_t_t recommend a website back end to process the kind of information that you are wanting to accomplish. It_t_s just not going to be fast enough. We had to make all that for the last version of our game_co_ and we_t_ll have to do it again for the Babylon version. If you_t_re planning to use babylon on the client and server_co_ then right from the start you_t_re going to cut your FPS in half or more. Just gravity collisions alone on a decent size scene can cause a render speed of 10 FPS or less with Babylon._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Not trying to discourage you_co_ just trying to give you an idea of what you will probably need based on experience._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Jigglypow","Date":"2014-06-11T12:21:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks grimor that was something I searched for. Yeah I have to emulate it somehow but I am just creating a concept for that so I don_t_t think it will work out in the end with emulating canvas and webgl on node.js._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_reddozen thanks for the information_co_ I already thought that it would be really complicated. As you say I need a server program which handles the calculation check from the client and then moves the client back if he is _qt_wrong_qt_._lt_/p_gt__lt_p_gt_That is why I wanted to use node.js and either try to get the babylon math+3D environment libraries working on node.js or use an entirely new option (for examples a c++ server with http socket then using opengl)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I like babylon.js and I just want to create a simple 3D multiplayer game at the moment but I still don_t_t know how to concept the verify if the user is _qt_cheating_qt_._lt_/p_gt__lt_p_gt_If I use node.js for example a user could just simply use the console of his browser and send the server a false positions_co_ so I have to calculate the position somehow on the server._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"reddozen","Date":"2014-06-11T13:14:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I recommend something faster than javascript. C++ or Standard C would be your fastest / most universal options. You can use C#_co_ but it_t_s a little slower_co_ and not *nix friendly._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You probably wont even need openGL. I_t_m pretty sure we used SDL and Recast &amp_sm_ Detour (_lt_a href_eq__qt_https_dd_//github.com/memononen/recastnavigation_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/memononen/recastnavigation_lt_/a_gt_) for the navigation / position verification. All you need to do is calculate locations in 3D space and see if the time it took to get them to that position is reasonable. If you try to get too picky_co_ someone with a low latency connection can look like a speed hacker. _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Jigglypow","Date":"2014-06-11T16:50:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks very much!_lt_/p_gt__lt_p_gt_I am now seeing a solution in trying this whole thing with javascript and babylon on the client and the entire server build up with c++ with http sockets and a 3d calculation solution with libraries like this SDL (watched it shortly through) and Recast navigation._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Something I am still not sure about are the model loaders. I will have to load the models on the client for the whole rendering thing and on the server only to calculate with them._lt_/p_gt__lt_p_gt_Wouldn_t_t it be good if I can use the same model format on the server and client. So I probably need to watch out for the loader on both sides._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"reddozen","Date":"2014-06-11T17:35:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_keeping the format the same would only help for keeping up with everything_co_ or making it more universal. As long as the models have the same vertexes etc you_t_re fine no matter what the format. you wont need textures or anything on the server side either. You would just have to feed the model data into recast._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Jigglypow","Date":"2014-06-13T09:44:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Alright_co_ thanks again._lt_/p_gt__lt_p_gt_Going to start my project now _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ . This is going to be very interesting._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Moon","Date":"2014-06-13T15:00:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_m subscribing to this thread._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Keep us posted. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]