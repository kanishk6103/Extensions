[{"Owner":"JayJay80","Date":"2017-02-08T18:01:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey guys_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m playing around with Babylon a little bit and the posibilities are amazing!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMaybe  a little to much at the beginning. This question maybe sounds silly for you but I still hope you can and will help me.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI tried to stop the camera zoom by mouseWheel but I want to keep the rotation but nothing I_t_m doing is working.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen I do this_dd_\n_lt_/p_gt_\n\n_lt_pre style_eq__qt_background-color_dd_#2b2b2b_sm_color_dd_#a9b7c6_sm_font-family_dd__t_Courier New_t__sm__qt__gt_\n_lt_span style_eq__qt_color_dd_#cc7832_sm_font-weight_dd_bold_sm__qt__gt_this_lt_/span_gt_._lt_span style_eq__qt_color_dd_#9876aa_sm__qt__gt_camera_lt_/span_gt_._lt_span style_eq__qt_color_dd_#ffc66d_sm__qt__gt_attachControl_lt_/span_gt_(_lt_span style_eq__qt_color_dd_#cc7832_sm_font-weight_dd_bold_sm__qt__gt_this_lt_/span_gt_._lt_span style_eq__qt_color_dd_#9876aa_sm__qt__gt_canvas_lt_/span_gt__lt_span style_eq__qt_color_dd_#cc7832_sm__qt__gt__co_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#cc7832_sm_font-weight_dd_bold_sm__qt__gt_false_lt_/span_gt__lt_span style_eq__qt_color_dd_#cc7832_sm__qt__gt__co_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#cc7832_sm_font-weight_dd_bold_sm__qt__gt_true_lt_/span_gt_)_lt_/pre_gt_\n\n_lt_p_gt_\n\tI can zoom with the wheel and rotate with the keyboard and the wheel.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf I don_t_t have this line I can_t_t zoom but of course don_t_t rotate either.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs there a line I have to add or a parameter I need to set to false? I_t_m thankful for every suggestion.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tGoogle wasn_t_t much of a help.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJay\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ViBe","Date":"2017-02-09T10:04:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWelcome!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can disable or remove inputs (mousewheel_co_ keyboard_co_ etc.). You can read about this here_dd_  \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//babylonjsguide.github.io/intermediate/Customizing_Inputs.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjsguide.github.io/intermediate/Customizing_Inputs.html_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tA sample to show how you can disable the mousewheel input _dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var cam _eq_ new BABYLON.ArcRotateCamera(_qt_cam1_qt__co_ 0_co_ 0_co_ 200_co_ new BABYLON.Vector3(0_co_ 0_co_ 0)_co_ scene)_sm_\n\nscene.activeCamera _eq_ cam1_sm_\ncam1.attachControl(canvas_co_ true)_sm_\n\ncam1.inputs.attached.mousewheel.detachControl(canvas)_sm_\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JayJay80","Date":"2017-02-09T17:45:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThank you so much!!!!!!!\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]