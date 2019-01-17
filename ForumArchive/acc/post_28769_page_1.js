[{"Owner":"ggg","Date":"2017-03-01T02:22:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m new here. I got samples from babylonjs for drawing lines in 3D. It looks fine. I want to know how we can extend lines with new points at runtime? Could anyone please help me out?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSource_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#165IV6%238_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#165IV6#8_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t\t\t\n\n_lt_span class_eq__t_ipsType_reset ipsType_medium ipsType_light_t_ data-excludequote_gt_\n\t_lt_strong_gt_Edited _lt_time datetime_eq__t_2017-03-01T02_dd_28_dd_06Z_t_ title_eq__t_03/01/2017 02_dd_28  AM_t_ data-short_eq__t_1 yr_t__gt_March 1_co_ 2017_lt_/time_gt_ by ggg_lt_/strong_gt_\n\t\n\t\t_lt_br_gt_adding link to the demo\n\t\n\t\n_lt_/span_gt_\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-03-01T04:10:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tno_co_ you can_t_t. A line_co_ like other updatable meshes_co_ can_t_t be extended_co_ just morphed. This means only the positions of the points can change_co_ not their number because the internal geometry has to keep the same _dd_ the vertex number and how they are linked together (indices).\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/how_to_dynamically_morph_a_mesh_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/how_to_dynamically_morph_a_mesh_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tTo add points on an existing line_co_ I_t_m afraid you need to simply rebuild a new one. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ggg","Date":"2017-03-01T06:15:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThanks jerome. You are right. We need to rebuild a new one every time a new point needs to be added. I got to achieve with your guidance. \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]