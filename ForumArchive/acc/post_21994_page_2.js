[{"Owner":"joshcamas","Date":"2016-04-28T03:24:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_126398_qt_ data-ipsquote-contentid_eq__qt_21994_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1461710152_qt_ data-ipsquote-userid_eq__qt_5219_qt_ data-ipsquote-username_eq__qt_Gugis_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 4/26/2016 at 3_dd_35 PM_co_ Gugis said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tProblem about this method is that there will always be visible _qt_seams_qt_ between tiles.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThis shouldn_t_t happen_co_ I don_t_t think. _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Gugis","Date":"2016-04-28T19:29:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_126428_qt_ data-ipsquote-contentid_eq__qt_21994_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1461745368_qt_ data-ipsquote-userid_eq__qt_17567_qt_ data-ipsquote-username_eq__qt_Dal_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 2016-04-27 at 11_dd_22 AM_co_ Dal said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tYou don_t_t get visible seams unless the LOD of the tiles is different... but it does kinda need to be if you want a very large world for performance reasons.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_126553_qt_ data-ipsquote-contentid_eq__qt_21994_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1461813897_qt_ data-ipsquote-userid_eq__qt_809_qt_ data-ipsquote-username_eq__qt_joshcamas_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t16 hours ago_co_ joshcamas said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tThis shouldn_t_t happen_co_ I don_t_t think. _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHere_t_s what i mean_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#RXVB8%230_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#RXVB8#0_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBoth terrain tiles have same subdivisions amount and seam is still visible. I guess this happens because of smooth mesh shading.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dal","Date":"2016-04-28T20:36:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t@gugis That_t_s interesting... I don_t_t get that issue when using noise. I wonder if the images are not pixel-perfect or possibly an issue in the way the GroundFromHeightmap function works?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso_co_ I tried to merge the meshes to see if it could hide the seam but they disappear... not sure why! _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#RXVB8%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#RXVB8#2_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dal","Date":"2016-04-28T20:38:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI think we_t_re really lacking a proper terrain system_co_ is anyone interested in working together on it?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Gugis","Date":"2016-04-28T20:51:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_126668_qt_ data-ipsquote-contentid_eq__qt_21994_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1461875791_qt_ data-ipsquote-userid_eq__qt_17567_qt_ data-ipsquote-username_eq__qt_Dal_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t10 minutes ago_co_ Dal said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t@gugis That_t_s interesting... I don_t_t get that issue when using noise. I wonder if the images are not pixel-perfect or possibly an issue in the way the GroundFromHeightmap function works?\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tAlso_co_ I tried to merge the meshes to see if it could hide the seam but they disappear... not sure why! _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#RXVB8%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#RXVB8#2_lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tImages are ok. Same problem with meshes created in modeling software. Also what do you mean by _qt_using noise_qt_?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dal","Date":"2016-04-28T22:22:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_126670_qt_ data-ipsquote-contentid_eq__qt_21994_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1461876695_qt_ data-ipsquote-userid_eq__qt_5219_qt_ data-ipsquote-username_eq__qt_Gugis_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 hour ago_co_ Gugis said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tImages are ok. Same problem with meshes created in modeling software. Also what do you mean by _qt_using noise_qt_?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI created a terrain using a perlin noise function to generate the height data programmatically rather than using an image. I didn_t_t notice any seams then.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso_co_ if you look at joshcamas_t_ editor linked above_co_ I can_t_t see any seams there either....\n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_04/snip.PNG.1454d6bcf7af5029f74d35117c8484a4.PNG_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_7468_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_04/snip.thumb.PNG.5ac1a6e813fc5ee873dc9a0fd75143b1.PNG_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_snip.PNG_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"joshcamas","Date":"2016-04-28T23:31:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIt looks like there_t_s something wrong with the heightmap data_co_ not with using tiles. See how they don_t_t match up? That looks like maybe some sort of compression with the image (but it looks like a raw type so probably not) or just problems with the image.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhere did these heightmaps come from?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhenever I start my editor_co_ I plan on whenever you import a heightmap (since you rarely import more than one per terrain_co_ I would think(?)) it automatically splits it up into multiple images_co_ and then I think I would use my own groundfromheightmap function_co_ since I don_t_t think it supports many file types. Idk tho\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Xeonzinc","Date":"2016-04-29T06:45:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tRE_dd_ seams\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve been working recently on a terrain system using the same theory behind Dal_t_s _t__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/18858-geo-clipmapping-endless-terrain-contribution/#comment-106965_qt_ rel_eq__qt__qt__gt_Endless Terrain_lt_/a_gt__t_ from Nov last year. One of the the differences being it allows for non-power of 2 LOD levels_co_ and has varying LOD levels sizes even within the same segment to increase the flexibility. This has meant developing a re-usable method to remove the seams between different LOD levels_co_ which works by essentially duplicating all vertices on both sides of the seam (and with a lot of code....). This is almost in a usable state so should have something to share soon_co_ and could easily feed into a chunk based system. (also agree with josh/Dal on the example above_co_ it must be the heightmap data if the vertices are perfectly aligned).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDoes anyone have a robust _t_chunking_t_ terrain system we could add the LOD onto? With the right system is should just be a case of replacing _t_createGroundFromHeightMap_t_ with a version of the new function i_t_m creating. It sounds like what you have Josh may be similar that_co_ although we are replacing the same function so may need to merge them somehow!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dal","Date":"2016-04-29T08:16:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_126701_qt_ data-ipsquote-contentid_eq__qt_21994_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1461912331_qt_ data-ipsquote-userid_eq__qt_10006_qt_ data-ipsquote-username_eq__qt_Xeonzinc_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 hour ago_co_ Xeonzinc said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tRE_dd_ seams\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tI_t_ve been working recently on a terrain system using the same theory behind Dal_t_s _t__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/18858-geo-clipmapping-endless-terrain-contribution/#comment-106965_qt_ rel_eq__qt__qt__gt_Endless Terrain_lt_/a_gt__t_ from Nov last year. One of the the differences being it allows for non-power of 2 LOD levels_co_ and has varying LOD levels sizes even within the same segment to increase the flexibility. This has meant developing a re-usable method to remove the seams between different LOD levels_co_ which works by essentially duplicating all vertices on both sides of the seam (and with a lot of code....). This is almost in a usable state so should have something to share soon_co_ and could easily feed into a chunk based system. (also agree with josh/Dal on the example above_co_ it must be the heightmap data if the vertices are perfectly aligned).\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tDoes anyone have a robust _t_chunking_t_ terrain system we could add the LOD onto? With the right system is should just be a case of replacing _t_createGroundFromHeightMap_t_ with a version of the new function i_t_m creating. It sounds like what you have Josh may be similar that_co_ although we are replacing the same function so may need to merge them somehow!\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThat sounds great! I think we could use _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/809-joshcamas/?do_eq_hovercard_qt_ data-mentionid_eq__qt_809_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/809-joshcamas/_qt_ rel_eq__qt__qt__gt_@joshcamas_lt_/a_gt_ chunking system (with his permission) for that_co_ as it seems to work well.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Gugis","Date":"2016-04-29T10:13:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_126680_qt_ data-ipsquote-contentid_eq__qt_21994_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1461882150_qt_ data-ipsquote-userid_eq__qt_17567_qt_ data-ipsquote-username_eq__qt_Dal_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t11 hours ago_co_ Dal said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI created a terrain using a perlin noise function to generate the height data programmatically rather than using an image. I didn_t_t notice any seams then.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tAlso_co_ if you look at joshcamas_t_ editor linked above_co_ I can_t_t see any seams there either....\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_7468_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_04/snip.PNG.1454d6bcf7af5029f74d35117c8484a4.PNG_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img alt_eq__qt_snip.PNG_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_7468_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_04/snip.thumb.PNG.5ac1a6e813fc5ee873dc9a0fd75143b1.PNG_qt_ /_gt__lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tZoom in closer and you will notice seams _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-04-29T11:56:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDoes anyone has a good article_co_ link_co_ reference about generating procedural large landscapes ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI mean some dynamically computed landscape_co_ but not randomly_co_ so that when the user passes back into a location he went before he can see the same part of the land than before ?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dal","Date":"2016-04-29T12:07:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_126730_qt_ data-ipsquote-contentid_eq__qt_21994_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1461930977_qt_ data-ipsquote-userid_eq__qt_5453_qt_ data-ipsquote-username_eq__qt_jerome_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t4 minutes ago_co_ jerome said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tDoes anyone has a good article_co_ link_co_ reference about generating procedural large landscapes ?\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tI mean some dynamically computed landscape_co_ but not randomly_co_ so that when the user passes back into a location he went before he can see the same part of the land than before ?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tWell that_t_s easy... you just need to either_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\ta ) Use image files and load the same image each time you visit the same tile (you can modify the image file just by drawing shapes and brush images onto a 2d canvas and saving it out... either painting manually or by code).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tb ) More commonly_co_ use a noise function such as perlin noise or simplex noise. These will take a seed number as a parameter and as long as you always use the same seed_co_ they will always generate the same height data at the same location when you feed in the same x_co_y coordinates.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dal","Date":"2016-04-29T12:12:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI_t_ll try to put together a demo later today with a chunked landscape using @joshcamas approach and perlin noise with a fixed seed. Maybe that can start us off _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2016-04-29T12:26:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\ti try to make it _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1TYWYB%2313_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1TYWYB#13_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-04-29T12:27:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk nice answer _dd_-)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tbut I_t_m afraid I didn_t_t explained well what I meant by _qt_dynamically computed not randomly_qt_ _co_ I was thinking about something less randomly thant a perlin noise.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMaybe something like a very large global map_co_ depicting zones with grassy plains_co_ forests_co_ mountains_co_ lakes_co_ rivers... everything undetailed. Something we could have at the state or country level on Earth on a geographic map knowing the player will only be the size of a human walking in this landscape.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd then a  procedural function to dynamically compute_co_ from this map (and maybe seeds associated to map subparts)_co_ what the user really sees at his level when evolving in his environment.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis would be mix between a predefined large map (so a fixed set of data at the level of landscape world) and a procedural rendering based on stored and reused random seeds.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe idea is to have a very very large landscape_co_ dynamically computed around the player and that this global landscape and what the player can see is always the same when he came back to a former location or when he replays the game several times.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tnot sure I_t_m very clear though\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dal","Date":"2016-04-29T13:57:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_126738_qt_ data-ipsquote-contentid_eq__qt_21994_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1461932831_qt_ data-ipsquote-userid_eq__qt_5453_qt_ data-ipsquote-username_eq__qt_jerome_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 hour ago_co_ jerome said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tOk nice answer _dd_-)\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tbut I_t_m afraid I didn_t_t explained well what I meant by _qt_dynamically computed not randomly_qt_ _co_ I was thinking about something less randomly thant a perlin noise.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tMaybe something like a very large global map_co_ depicting zones with grassy plains_co_ forests_co_ mountains_co_ lakes_co_ rivers... everything undetailed. Something we could have at the state or country level on Earth on a geographic map knowing the player will only be the size of a human walking in this landscape.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tAnd then a  procedural function to dynamically compute_co_ from this map (and maybe seeds associated to map subparts)_co_ what the user really sees at his level when evolving in his environment.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tThis would be mix between a predefined large map (so a fixed set of data at the level of landscape world) and a procedural rendering based on stored and reused random seeds.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tThe idea is to have a very very large landscape_co_ dynamically computed around the player and that this global landscape and what the player can see is always the same when he came back to a former location or when he replays the game several times.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tnot sure I_t_m very clear though\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI think what you want is just an evolution of the same basic concept...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can use multiple _qt_octaves_qt_ of noise and layer different noise algorithms and erosion algorithms on top of eachother at different scales etc. until you get something that looks natural. As long as all the algorithms are seed/input based the result is predictable and constant. You could then mix that with image textures that use different colours/shades to map out the different regions and biomes...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou could just have a map with the mountainous areas drawn in red and the desert areas drawn in green for example_co_ then you convert the world coordinates to texture coordinates and pick the colour in the shader... then based on what colour you get you multiply the values of the noise to make it more or less bumpy_co_ maybe clamp it or multiply with other sorts of texture that cause different kinds of features to appear etc. etc.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIts really hard to get natural looking noise and features though and its computationally expensive. You need to combine loads of algorithms and really tweak it for hours using trial and error to see how it looks and trying to do it in realtime can really hit performance. Most people just use existing software tools like Terragen to generate nice terrain height images as its a lot easier and gives better looking results.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPersonally I think hand-sculpted terrains look much better. Procedural generation is great but in practice it tends to lead to huge_co_ boring landscapes that aren_t_t fun to explore. As with most things in computer games_co_ we can_t_t really put in the scale and detail of real life so we have to make things smaller and more exaggerated. Doing that in a way that looks good and plays well really requires an artist_t_s touch and a lot of thought about the flow of the game and how the player will progress from different towns_co_ regions_co_ biomes etc. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI just want to create a huge paged terrain that will let us sculpt a nice looking terrain ourselves_co_ but using things like erode tools and heightmap stamp tools to help the process.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-04-29T15:50:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tthank you for this smart detailed explanation\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tooops_co_ and I just re-discover this one _dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/extensions/Terrain_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/extensions/Terrain_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dal","Date":"2016-04-29T16:09:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_126737_qt_ data-ipsquote-contentid_eq__qt_21994_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1461932764_qt_ data-ipsquote-userid_eq__qt_13038_qt_ data-ipsquote-username_eq__qt_NasimiAsl_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t3 hours ago_co_ NasimiAsl said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\ti try to make it _dd_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1TYWYB%2313_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1TYWYB#13_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThis is cool! I found the problem with moving the texture rather than the geometry though is it gets really hard to do collision and physics... \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2016-04-29T20:30:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\ti think i can fix collision problem i know that just need  solve this problem first\n_lt_/p_gt_\n\n_lt_p_gt_\n\tfirst problem ( LOD simulation in Vertex Shader ) solution we need make more vertex in center and less in around\n_lt_/p_gt_\n\n_lt_p_gt_\n\tsecond Problem ( infinite scene )  solution move all vertex   with camera position and make height with new position\n_lt_/p_gt_\n\n_lt_p_gt_\n\tand still texture management it is easy i hope\n_lt_/p_gt_\n\n_lt_p_gt_\n\tif we can fix all problems we do infinite Terrain in GPU \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dal","Date":"2016-04-29T21:46:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_126806_qt_ data-ipsquote-contentid_eq__qt_21994_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1461961807_qt_ data-ipsquote-userid_eq__qt_13038_qt_ data-ipsquote-username_eq__qt_NasimiAsl_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 hour ago_co_ NasimiAsl said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\ti think i can fix collision problem i know that just need  solve this problem first\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tfirst problem ( LOD simulation in Vertex Shader ) solution we need make more vertex in center and less in around\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tsecond Problem ( infinite scene )  solution move all vertex   with camera position and make height with new position\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tand still texture management it is easy i hope\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tif we can fix all problems we do infinite Terrain in GPU \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tCheck out _lt_a href_eq__qt_https_dd_//github.com/darrylryan/BabylonTerrain_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/darrylryan/BabylonTerrain_lt_/a_gt_ I think it handles both those problems already.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere_t_s also other problems as a result. When you have different LODs you need to morph between them. I never got that to look right. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tPlus... If the geom moves around to centre itself under the camera everything else is going to need to do likewise...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso we need a way to paint the terrain and to page in new tiles or heightmap data... Having infinitely repeating noise doesn_t_t look good.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn the end I gave up on that approach because it got mind boggling_co_ but maybe you will have better ideas _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2016-04-30T02:48:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\ti dont have LOD _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ I simulate that it means i don_t_t create new face or vertex i just collect more vertex in center so center smooth and you see more detail \n_lt_/p_gt_\n\n_lt_p_gt_\n\tand no need any morph _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ ( you don_t_t calculate anything and still have top fps)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tabout move every thing  i haven_t_t no idea for yet  in first i need make just Terrain nothing else we can make  it after have this ( usually i don_t_t thing anything else when i fix a problem we solve that part when we wanna do that )\n_lt_/p_gt_\n\n_lt_p_gt_\n\tin shader builder we have color replace and a lot of tools for make  needed noise and needed or move texture . you can make your wanted\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1TYWYB%2320_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1TYWYB#20_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1TYWYB%2321_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1TYWYB#21_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1TYWYB%2322_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1TYWYB#22_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\twe just need solution for collision and  physics i don_t_t know when we have dynamic  morph geometry what happen in physics but still we can   find a solution for that too _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"joshcamas","Date":"2016-04-30T05:29:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_126722_qt_ data-ipsquote-contentid_eq__qt_21994_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1461924824_qt_ data-ipsquote-userid_eq__qt_5219_qt_ data-ipsquote-username_eq__qt_Gugis_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t19 hours ago_co_ Gugis said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tZoom in closer and you will notice seams _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThose are image seams_co_ not height seams. However_co_ tis true... we need to figure out a fix. I believe it_t_s due to the images being _qt_fuzzy_qt_ and ofc the edges do not share such fuzzyness. Will need to find a way to fix this.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dal","Date":"2016-04-30T14:30:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI think we should form a project group on this to make an awesome terrain system for babylon. Its something very much needed for lots of games_co_ but its also maybe not something on the immediate roadmap for the core devs_co_ so its a good thing for us to build together as a community I think.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBefore I start a new system though I am very interested to see what results _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/?do_eq_hovercard_qt_ data-mentionid_eq__qt_13038_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/_qt_ rel_eq__qt__qt__gt_@NasimiAsl_lt_/a_gt_ will achieve. It looks interesting so far and he_t_s certainly very smart _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"eboo","Date":"2016-05-03T19:16:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\twho is working on this?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2016-05-03T21:43:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\ti work part Time _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ i think i do 30% \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]