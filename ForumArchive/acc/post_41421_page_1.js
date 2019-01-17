[{"Owner":"wuwood","Date":"2018-11-21T10:35:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thello\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti think \n_lt_/p_gt_\n\n_lt_p_gt_\n\twhen i use BABYLON.SceneLoader.Append( )  load a glb  model file and this file already have pbr material inside\n_lt_/p_gt_\n\n_lt_p_gt_\n\tit is work very well but this render  is  standard and not pretty\n_lt_/p_gt_\n\n_lt_p_gt_\n\tmay i preset this renderer use PBR  ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tand No need to specify any new pbr material ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthank you\n_lt_/p_gt_\n\n_lt_p_gt_\n\t  \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-11-21T15:08:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tUsing GLB you are already using PBR. It does not mean that it is pretty.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor instance when I create materials they look horrible but when _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/32589-patrickryan/?do_eq_hovercard_qt_ data-mentionid_eq__qt_32589_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/32589-patrickryan/_qt_ rel_eq__qt__qt__gt_@PatrickRyan_lt_/a_gt_ creates them they always look nice _lt_span_gt__lt_span class_eq__qt_ipsEmoji_qt__gt_🙂_lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"PatrickRyan","Date":"2018-11-21T18:24:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/33498-wuwood/?do_eq_hovercard_qt_ data-mentionid_eq__qt_33498_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/33498-wuwood/_qt_ rel_eq__qt__qt__gt_@wuwood_lt_/a_gt__co_ the act of using PBR materials doesn_t_t mean that rendering with them will be good_co_ it just means the shader is trying to be physically accurate when rendering materials. Under older methods like blinn/phong_co_ the textures would have to be altered when lighting conditions were changed_co_ such as an object with wood and metal under daytime lighting and nighttime lighting. This meant you have to carry two or more times the number of textures for an asset depending on how your lighting varies. PBR strives to change that tendency so that your textures will represent the material they are interpreting under any lighting conditions and no lighting information needs to be baked into the textures. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat said_co_ what may be missing in your render may not have to do with your materials but rather the lighting in your scene. Here are a couple of other topics on the forum that I_t_ve touched on setting up IBL lighting correctly with some attached playgrounds. Rather than repeating it all here_co_ I_t_ll collect the links for you so you can see the whole context_dd_\n_lt_/p_gt_\n\n_lt_ul_gt_\n\t_lt_li_gt_\n\t\t_lt_iframe allowfullscreen_eq__qt__qt_ data-controller_eq__qt_core.front.core.autosizeiframe_qt_ data-embedcontent_eq__qt__qt_ data-embedid_eq__qt_embed2275221800_qt_ scrolling_eq__qt_no_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/40010-strange-hdr-reflection-on-pbr-material/?tab_eq_comments&amp_sm_do_eq_embed&amp_sm_comment_eq_228467&amp_sm_embedComment_eq_228467&amp_sm_embedDo_eq_findComment#comment-228467_qt_ style_eq__qt_height_dd_292px_sm_max-width_dd_502px_sm__qt__gt__lt_/iframe_gt_\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\t_lt_iframe allowfullscreen_eq__qt__qt_ data-controller_eq__qt_core.front.core.autosizeiframe_qt_ data-embedcontent_eq__qt__qt_ data-embedid_eq__qt_embed929880532_qt_ scrolling_eq__qt_no_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/39632-when-i-change-the-library-from-30-to-31-result-of-pbrmaterial-becomes-dark/?tab_eq_comments&amp_sm_do_eq_embed&amp_sm_comment_eq_226396&amp_sm_embedComment_eq_226396&amp_sm_embedDo_eq_findComment#comment-226396_qt_ style_eq__qt_height_dd_292px_sm_max-width_dd_502px_sm__qt__gt__lt_/iframe_gt_ \n\t_lt_/li_gt_\n_lt_/ul_gt_\n\n_lt_p_gt_\n\tThose two topics should give you a start to making sure your lighting is set up to render your materials in the best way. Beyond that_co_ you may want to look at the post-effects stack in Babylon to further elevate your rendering which can be found at _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/api/classes/babylon.postprocess_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/api/classes/babylon.postprocess_lt_/a_gt_ and I would highly suggest using the ACES tone mapping option as this is the same tone mapping that popular game engines use to ensure detail in the extremes of tone.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_        // Set up new rendering pipeline\n        var pipeline _eq_ new BABYLON.DefaultRenderingPipeline(_qt_default_qt__co_ true_co_ scene)_sm_\n\n        // Tone mapping\n        scene.imageProcessingConfiguration.toneMappingEnabled _eq_ true_sm_\n        scene.imageProcessingConfiguration.toneMappingType _eq_ BABYLON.ImageProcessingConfiguration.TONEMAPPING_ACES_sm_\n        scene.imageProcessingConfiguration.exposure _eq_ 1_sm_\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tI hope this helps you get the quality of your rendering to where you want it. Please feel free to ping back for more questions or clarifications.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]