[{"Owner":"jerome","Date":"2015-09-07T13:57:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi people_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Jahow fixed the old well known cylinder light reflection artifact problem by fully re-implementing it using the ribbon which now can manage well the continuity of the light reflection along curved and closed meshes._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_However the cylinder code is now quite complex because of the cylinder caps (caps aren_t_t ribbon features) and after having hacked for a long time the _lt_em_gt_computeNormals()_lt_/em_gt_ method used by ribbons_co_ I know now that it will be quite complex to support capped meshes under the ribbon._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_This means I will probably re-implemented again the cylinder_co_ with continuous light reflection and correct cap normals of course_co_ from scratch._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Then only_co_ I could have a look to the caps of the tube and the lathe (both ribbon based)... aaargg_lt_/p_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2015-09-07T18:18:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Do not know whether it is something to pursue or not but I needed a ribbon with caps. For the top cap I chose a point_co_ A_co_ within the polygon plane formed by the initial points of each path (easy in my case as initial points all in the xy plane and surrounding the origin) then added A to the beginning of each path. Same idea for bottom cap._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-09-07T20:17:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_That_t_s just what I did for the tube actually ! and for extrusion with the barycenter of the model shape_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But if you are looking for better normals (or no artifact)_co_ you would probably design the plane polygon _qt_capping_qt_ the ribbon_co_ then would add to it some normals orthogonal to this polygon and finally merge these two meshes. This is quite simple._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But if you then need to animate or morph such a capped shape_co_ it becomes far more complex to do this 3-step operation (ribbon + polygon cap + merge) in a decent delay._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_That_t_s why_co_ for now_co_ I decided to keep the tube caps as they are -because of the morph/animation aspect-_co_ it is to say like you just suggested_co_ until I can find another way to quickly compute a real independant cap with its own normals and have everything a final single global mesh. _lt_/p_gt__lt_p_gt_Performance over accuracy... for now_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The cylinder is not morphable_co_ so we can compute dedicated caps with better normals._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2015-09-08T10:08:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Should have know the master had it covered _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-09-08T10:30:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_ _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-09-08T18:27:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_working on it ..._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-09-09T10:09:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_done_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_it was far more difficult than I expected initially_co_ pffeww_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So_co_ now (once it will be merged)_co_ the Cylinder doesn_t_t use any longer either ribbons_co_ either _lt_em_gt_computeNormals()_lt_/em_gt__co_ but a dedicated normal computation_co_ so it avoids the tiny normal artifacts that might appear on edges._lt_/p_gt__lt_p_gt_I guess noone until now even noticed them _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ alt_eq__qt__dd_P_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_note _dd_ I kept Jahow_t_s cylinder cap implementation_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jahow","Date":"2015-09-09T13:47:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks Jerome _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ well done. Did you implement the side parameter ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-09-09T14:01:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_ourg_lt_/p_gt__lt_p_gt_forgotten_lt_/p_gt__lt_p_gt_I do it right now_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-09-09T14:19:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_commit done_lt_/p_gt__lt_p_gt_thanks Jahow _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ alt_eq__qt__dd_P_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-09-11T09:11:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_the reason of the reimplementation without _lt_em_gt_computeNormals_lt_/em_gt_ _dd_ _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/17040-the-mystery-of-computenormals/?p_eq_95871_qt__gt_http_dd_//www.html5gamedevs.com/topic/17040-the-mystery-of-computenormals/?p_eq_95871_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]