[{"Owner":"rohapa","Date":"2017-04-12T21:32:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI having a problem with the exporter from 3ds max_co_ where there is animation on the camera. I export the scene to babylon.js but the rotation keyframes are not showing up. Is there a reason for this?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have the 3ds max and the exported babylon file. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI would appreciate any help for this issue.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt__lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_12471_qt__gt_camera.babylon_lt_/a_gt__lt_/p_gt_\n_lt_p_gt__lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_12472_qt__gt_trex-cameras.max_lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-04-13T16:37:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\thello this is _qt_expected_qt_ as only position and target animations are supported so far\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-04-14T14:30:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys_co_ welcome _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/26549-rohapa/?do_eq_hovercard_qt_ data-mentionid_eq__qt_26549_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/26549-rohapa/_qt_ rel_eq__qt__qt__gt_@rohapa_lt_/a_gt_.  May I add...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t    ...cameras can be parented to (invisible) mesh.  Here is a fancy playground that uses this method.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2FD2SC%230_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2FD2SC#0_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMOVE mouse left-right (atop canvas)_co_ and see the camera z-rotate (banking)_co_ an unusual movement for _lt_u_gt_any_lt_/u_gt_ BJS camera.  A blank AbstractMesh named _lt_em_gt_node_lt_/em_gt_ is being used as the camera _t_gizmo_t_ (see line 45).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDRAG left - right... to change the direction of _lt_em_gt_node_lt_/em_gt_ and thus_co_ also change the direction of the camera.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn the renderLoop (lines 66-76)_co_ lots of manipulation happens to _lt_em_gt_node_lt_/em_gt__co_ which automatically affects node_t_s child... the camera. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tPoint is_co_ you can animate a box (or plane or blank mesh) in ANY way_co_ and that mesh CAN be a parent of a camera.  This method opens ALL avenues for camera animation.  Ok byeeeeeee.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]