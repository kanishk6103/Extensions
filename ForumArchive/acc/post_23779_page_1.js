[{"Owner":"ferat","Date":"2016-07-12T20:54:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have an application that uses BabylonJS_dd_ _lt_a href_eq__qt_http_dd_//rapidmockup.topempresas.net/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//rapidmockup.topempresas.net/_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs you see_co_ i have a skybox with 3D backgrounds and a ArcRotateCamera in my scene. This works well_co_ but i need a second behavior in my scene. When the user select an option_co_ i need to rotate only the object and the plane in my scene_co_ but not the background. It is because i need a option to user add your own backgorund image_co_ but users will upload only one texture_co_ and the background skybox must be fixed to see only one face. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs it possible? How to make it?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks by the support!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-07-12T23:27:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHiya _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/12132-ferat/?do_eq_hovercard_qt_ data-mentionid_eq__qt_12132_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/12132-ferat/_qt_ rel_eq__qt__qt__gt_@ferat_lt_/a_gt_!  Welcome to the forum!  I am a little rushed at the moment_co_ but maybe you are looking for a background _qt_layer_qt_.  It_t_s easy to use.  Let_t_s take a playground search for the term _qt_layer_qt_...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/playground?q_eq_layer&amp_sm_page_eq_1&amp_sm_max_eq_500&amp_sm_bf_eq_all_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/playground?q_eq_layer&amp_sm_page_eq_1&amp_sm_max_eq_500&amp_sm_bf_eq_all_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOooh_co_ we got a crap-wagon full of returns!  I_t_ll help ya find a good one...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#UUXLX%2315_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#UUXLX#15_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYeah_co_ whoever made _lt_em_gt_that_lt_/em_gt_ playground was a definite mad-man.  Lines 19-22 are the part YOU care-about.  Line 22 shows that the background has ALL the power of _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/classes/2.4/Texture_qt_ rel_eq__qt_external nofollow_qt__gt_Babylon.Texture_lt_/a_gt_ and _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/classes/2.4/BaseTexture_qt_ rel_eq__qt_external nofollow_qt__gt_Babylon.BaseTexture_lt_/a_gt_ classes_co_ so you have plenty of knobs to twist (such as _lt_em_gt_background.texture._lt_a href_eq__qt_http_dd_//doc.babylonjs.com/classes/2.4/Texture#wang-number_qt_ rel_eq__qt_external nofollow_qt__gt_wAng_lt_/a_gt_ _lt_/em_gt_or maybe_lt_em_gt_ _lt_/em_gt_ _lt_em_gt_background.texture._lt_/em_gt__lt_a href_eq__qt_http_dd_//doc.babylonjs.com/classes/2.4/Texture#voffset-number_qt_ rel_eq__qt_external nofollow_qt__gt_vOffset_lt_/a_gt_)_co_ should you desire to twist knobs.  Hope this helps.  Holler if not.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ferat","Date":"2016-07-13T11:12:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThis is Awesome!!! Thanks very much _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_!! This works perfectly for me.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ferat","Date":"2016-07-14T12:21:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIs there any way to save a screenshot with this layer of background? I am using BABYLON.Tools.CreateScreenshot but always creates an image with a transparent background. For now_co_ I_t_m using canvas.toDataURL (_qt_image / png_qt_)_co_ keeping the preserveDrawingBuffer to true to be able to save the full picture.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-07-14T15:58:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHello! the best option is the one you already found _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ Just use toDataUrl\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ferat","Date":"2016-07-14T16:30:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThanks _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_!! _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]