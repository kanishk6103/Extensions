[{"Owner":"waverider","Date":"2018-08-05T18:03:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tmy game seems incredibly slow on mobile devices compared to pc where i get between 50 - 60 Fps. I have like 15Fps maximum on android device and 18Fps if lucky. I know i should post some codes right but trust me it_t_s a long list of code to post.. so are there any hidden optimisation tips specifically for mobile that i should know\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tNB_dd_ i_t_v tried LOD_co_ Occlusion query_co_ octree\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2018-08-06T14:50:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tFirst_co_ which OS?  iOS could easily be skinning on the cpu if you have more than 25 bones_co_ while Android can handle many more. 2nd_co_ that sounds about right. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt can difficult to profile on remote devices to find your bottlenecks.  Use your browser_t_s profiler on the desktop.  Even if you can not visibly see slowness there_co_ any improvements on your desktop should translate.   At least the knowledge of your biggest issues give you a chance.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBlindingly doing _qt_optimizations_qt_ without the faintest idea of where &amp_sm_ in what amounts your application is spending it_t_s time is not a winning strategy.  All you are going to get from what you provided is random suggestions.  Posting code is not necessarily better than screen shots of BJS debug layer stats_co_ or a shot of the top time percentages from profiling.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-08-06T15:11:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/?do_eq_hovercard_qt_ data-mentionid_eq__qt_8492_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/_qt_ rel_eq__qt__qt__gt_@JCPalmer_lt_/a_gt_is right_dd_ first find the bottleneck (you could be surprised)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]