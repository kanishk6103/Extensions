[{"Owner":"Gordon Hempton","Date":"2018-01-25T05:44:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI am looking to create a ground-type object where each cell contains a different color (driven by a large array of numbers).  Ideally the edges of the cells would also be visible. This grid could be upwards of 100x100 and I am trying to think through what would be the right implementation. Options I am thinking of_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1. Create a TiledGround object with 100x100 subdivisions. Each cell would then use a separate submesh/material. This seems excessive and am not sure this will scale well.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2. Store the color of each tile in a texture and use a fragment shader to determine the color based on the pixel location and this texture. This seems like it might be a little more complex.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAny have any ideas or can point me in the right direction?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tCheers_co_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-01-25T22:46:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWelcome!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI would keep using the TIledGround but using vertex color so no need for multiple materials\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-01-26T00:27:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYeah!  And_co_ using vertex colors (colorKind data)... you could STILL _qt_sample_qt_ an image/texture (using W3c context2d canvas)... and use that image information (pixel colors)... for the mesh vertex colors (at each vertex position_co_ which would be on the corners of each _qt_cell_t_).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo_co_ your mesh/grid vertex colors... can still be _qt_queried_qt_ FROM an actual texture or image._lt_br /_gt_\n\t_lt_img alt_eq__qt_elR5x.png_qt_ class_eq__qt_ipsImage_qt_ height_eq__qt_434_qt_ src_eq__qt_https_dd_//i.stack.imgur.com/elR5x.png_qt_ width_eq__qt_615_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m not sure WHY you would WANT-to query pixel colors at certain image points_co_ and apply them to a tiledGround cell-corner colorKind data... but it sure could be done.  The tiledGround would not reproduce the picture whatsoever... as it is sampling/querying SO LITTLE of its pixel data.  Still... interesting thinking.  Probably better just to store (or generate) colorKind data... in simple JS arrays.\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_202527_qt_ data-ipsquote-contentid_eq__qt_35273_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1516859085_qt_ data-ipsquote-userid_eq__qt_30106_qt_ data-ipsquote-username_eq__qt_Gordon Hempton_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t18 hours ago_co_ Gordon Hempton said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tIdeally the edges of the cells would also be visible\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tSometimes_co_ that is best done by cloning the tiledGround_co_ putting wireframe material on it_co_ and overlay-it atop first tiledGround.  There are other ways_co_ too.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway_co_ I was just adding-on some info... to Delta_t_s good idea.  Let_t_s look at a textured-by-color-grid heightMap ground... in wireframe mode... just to give us something to think about.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#0Q7RBX%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#0Q7RBX#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPretty.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  It isn_t_t a tiledGround_co_ but... hmm.  Here_t_s another... a tiledGround playground that I once played-with.  _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1VGWP9%234_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1VGWP9#4_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-01-26T00:43:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tsounds like a job for a custom shader.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2018-01-27T12:24:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thi i don_t_t understand  the correct problem but maybe that close the result\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#T34ZWR%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#T34ZWR#1_lt_/a_gt_ 100×100  highlight 50_co_50\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#T34ZWR%232_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#T34ZWR#2_lt_/a_gt_  10×10  highlight 5_co_5\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2018-01-27T13:14:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tand sum fun _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#T34ZWR%237_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#T34ZWR#7_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]