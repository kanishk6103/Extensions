[{"Owner":"MichaelD","Date":"2018-01-23T11:11:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have some UI elements on the DOM that I want to move relative to the 3D objects_co_ I searched this forum and generally and the best I could find was_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_scene.afterRender _eq_ function() {\n        var worldMatrix _eq_ planet2.getWorldMatrix()_sm_\n        var transformMatrix _eq_ scene.getTransformMatrix(true)_sm_\n        var position _eq_ planet2.position_sm_\n        var viewport _eq_ scene.activeCamera.viewport_sm_\n        var coordinates _eq_ BABYLON.Vector3.Project(position_co_ worldMatrix_co_ transformMatrix_co_ viewport)_sm_\n        console.log(coordinates_co_ window.innerWidth * coordinates.x)_sm_\n    }_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t but unfortunately the coordinates keep changing because the object is rotating_co_ so is there another way to track the object absolute position and convert that to screen position so I can use it the the `window` gets resized or when the camera changes angle?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2018-01-23T11:52:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_iframe allowfullscreen_eq__qt__qt_ data-controller_eq__qt_core.front.core.autosizeiframe_qt_ data-embedcontent_eq__qt__qt_ data-embedid_eq__qt_embed1291379714_qt_ scrolling_eq__qt_no_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/30513-htmlwebgl/?do_eq_embed_qt_ style_eq__qt_height_dd_285px_sm_max-width_dd_502px_sm__qt__gt__lt_/iframe_gt_\n_lt_p_gt_\n\tthat not be complete yet\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2018-01-23T12:10:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAn alternative might be to use _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/how_to/gui_qt_ rel_eq__qt_external nofollow_qt__gt_Babylon.GUI_lt_/a_gt_ using the `CreateForMesh` and `LinkWithMesh` methods_co_ all depends on what you want to achieve.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-01-23T20:40:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDo what _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/?do_eq_hovercard_qt_ data-mentionid_eq__qt_14282_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/_qt_ rel_eq__qt__qt__gt_@JohnK_lt_/a_gt_ said._lt_br /_gt_\n\t_lt_br /_gt_\n\tunless it has to be some fancy DOM element._lt_br /_gt_\n\t_lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/14637-translating-a-meshs-vertices-to-screen-coords/_qt_ rel_eq__qt__qt__gt_http_dd_//www.html5gamedevs.com/topic/14637-translating-a-meshs-vertices-to-screen-coords/_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"d13","Date":"2018-01-24T14:45:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_202360_qt_ data-ipsquote-contentid_eq__qt_35241_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1516740049_qt_ data-ipsquote-userid_eq__qt_19199_qt_ data-ipsquote-username_eq__qt_Pryme8_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t18 hours ago_co_ Pryme8 said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_br /_gt_\n\t\t\tunless it has to be some fancy DOM element.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t... or you_t_re required to meet the W3C Web Content Accessibility Guidelines (_lt_a href_eq__qt_https_dd_//www.w3.org/WAI/intro/wcag_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.w3.org/WAI/intro/wcag_lt_/a_gt_)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MichaelD","Date":"2018-01-24T15:11:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tTo be honest I_t_m not trying to insert DOM elements inside the canvas. I_t_m trying to determine a mesh position (in pixels) and its size (in pixels) again. But it is difficult because a) the mesh is rotating and many values change_co_ b ) On window resize the sphere gets scaled up/down and cannot find a good way of determining its size when that happens._lt_br /_gt_\n\t_lt_br /_gt_\n\tThe site is a mix of simple HTML elements and Babylonjs\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-01-24T15:37:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI was experimenting with turning html elements into svg_t_s and pushing that to a dynamic texture. Ill link you to that when I get a chance._lt_br /_gt_\n\t_lt_br /_gt_\n\tIf you combine that with the GUI system you will hit your mark.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MichaelD","Date":"2018-01-24T15:51:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thm not exactly what I_t_m after_co_ I_t_m looking to keep both canvas (for 3D) and plain HTML on the same page_co_ I just need a way to properly read 3D objects sizes and positions according to screen.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSomething like what is doing here_dd_ _lt_a href_eq__qt_http_dd_//www.space-advisor.ca/en/?experience_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.space-advisor.ca/en/?experience_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-01-24T16:43:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIll make an example here..._lt_br /_gt_\n\t_lt_br /_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#ZG6PU7_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#ZG6PU7_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tI did not do the offsets_co_ but yeah...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MichaelD","Date":"2018-01-24T17:57:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks this is where I have reached also_co_ but the offsets are giving me trouble_co_ especially when the window resizes_co_ I tried multiplying with a percentage but still its not perfect_co_ on extreme scaling it goes way off.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-01-24T18:31:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tthat just offset stuff... super easy_co_ _lt_a href_eq__qt_https_dd_//stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-an-html-element_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-an-html-element_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tAnd if its a full page canvas should not even be an issue.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]