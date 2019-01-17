[{"Owner":"IIerpos","Date":"2017-07-06T11:08:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is no insurmountable problem on my end_co_ but I am implementing Babylon as a lightbox with no iframe. In other words_co_ my canvas has its CSS position property set to _qt_fixed_qt_. This breaks the placement of the loading screen.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tObviously I will patch it up on my end for now_co_ but to make it work out of box_co_ you could replace line 137 in _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/preview/src/Loading/babylon.loadingScreen.ts_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/preview/src/Loading/babylon.loadingScreen.ts_lt_/a_gt_ with something like_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var canvasPositioning _eq_ window.getComputedStyle(this._renderingCanvas).position_sm_\nthis._loadingDiv.style.position _eq_ (canvasPositioning _eq__eq_ _qt_fixed_qt_) ? _qt_fixed_qt_ _dd_ _qt_absolute_qt__sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tI_t_m pretty sure that would have it working out of box in my case.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-07-06T15:43:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tFix applied and deployed to preview _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tlet me know if it works!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"IIerpos","Date":"2017-07-12T10:24:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tSorry I never got back to you. It works. Thanks a lot!\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]