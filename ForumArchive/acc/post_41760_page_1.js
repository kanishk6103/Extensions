[{"Owner":"didac","Date":"2018-12-07T21:25:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI would like to create an environment with several objects (in the playground_co_ 2 objects) that cannot be at the same position at the same time (cannot be superimposed). I used the moveWithCollisions method for the Mesh objects_co_ and while it works as expected_co_ when two objects collide and the ellipsoids around them are not identical in size_co_ one of the objects goes to the top or to the bottom of the other. I would like for them to just stay in the same vertical position_co_ and if they collide_co_ simply prevent them from moving_co_ not moving to the top or to the bottom of the other object._lt_br /_gt_\n\t_lt_br /_gt_\n\tIs there any thing you recommend?_lt_br /_gt_\n\t_lt_br /_gt_\n\tPlayground_dd_ https_dd_//playground.babylonjs.com/#1UK40Z _lt_br /_gt_\n\tIf you move the red object towards the purple one_co_ when they contact_co_ the red object moves to the top of the purple one_co_ and I would like them to stay one next to the other.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-12-07T22:02:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tyou may want to use mesh.intersects() then and manually check on a per frame basis if your meshes can move. This way you will prevent the collision engine to apply an unwanted response\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"didac","Date":"2018-12-07T23:16:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks Deltakosh!_lt_br /_gt_\n\t_lt_br /_gt_\n\tIs it possible to check the intersects before moving the object?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-12-07T23:21:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tsure you decide when you want to do it\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"didac","Date":"2018-12-07T23:30:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI will rephrase my question_dd_ if I am moving an object with the mouse_co_ I have the position before the movement_co_ and I have the increment given by the mouse. If BEFORE the movement the two objects are not intersecting_co_ but AFTER applying the increment with mesh.position.addInPlace(increment) they are intersecting_co_ how can I avoid doing the movement BEFORE actually doing it?_lt_br /_gt_\n\t_lt_br /_gt_\n\tI had the idea of checking the intersection after the movement_co_ and if they intersect_co_ subtract the increment and go to the original position. However_co_ it looks like when I increase the position and then do the intersects check_co_ the intersects() method does not detect the intersection just in the moment_co_ but it has to do the rendering or something_co_ and THEN it detects the intersection_co_ when I have no longer control on it._lt_br /_gt_\n\t_lt_br /_gt_\n\tDo you have any idea on how to deal with it? (Playground_dd_ _lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#1UK40Z%232_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#1UK40Z#2_lt_/a_gt__co_ please move the purple object towards the red one. The purple object turns white when it contacts the red one_co_ and it cannot move back again because the system detects that it is intersecting the red one)_lt_br /_gt_\n\tThanks a lot!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tEdit_dd_ is it a good idea to render before checking the intersect? (added the line 149 in _lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#1UK40Z%233_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#1UK40Z#3_lt_/a_gt_)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-12-08T00:59:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAhh_co_ you want to _qt_predict_qt_ if the _qt_upcoming_qt_ position change... will cause intersect.  Yep_co_ been there... wanted that.  _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAfter mouse has done a pointer-drag...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Preferred method_dd_  IF upcoming mesh move WILL cause intersect_co_ don_t_t move the mesh_co_ and perhaps return pointer to pre-drag position._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Kludgy method_dd_  IF mesh move HAS caused intersect_co_ move mesh to PREVIOUS non-intersect position_co_ and allow continued dragging without interruption.  (disallow mesh overlap)_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Did I re-state issue correctly?  I hope so._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Intersection prediction.  _qt_Look-ahead_qt_.  _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt__lt_span_gt_Ok_co_ anyway_co_ I modified a playground... _lt_/span_gt__lt_/span_gt__lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#1UK40Z%234_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#1UK40Z#4_lt_/a_gt__lt_span_gt__lt_span_gt_ _lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt__lt_span_gt_Notice I disabled lines 154-156_co_ and tried using some fancy line 153._lt_/span_gt_  Notice it has a _qt_scale_qt_ on it_co_ which is the same as an amplifier or _qt_power soak_qt_. _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Line 153 eliminates _lt_em_gt_diff2_lt_/em_gt__co_ and instead _qt_negates_qt_ _lt_em_gt_diff... _lt_/em_gt_but then amplifies that amount... * 1.5 (50% more counter-diff)._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSO_co_ I modded line 158 to use _lt_em_gt_diff_lt_/em_gt_ instead of _lt_em_gt_diff2_lt_/em_gt_.  AND_co_ I added or adjusted line 161... so that line 166 operated correctly when we _qt_fell thru_qt_ to it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNothing really changed except... it doesn_t_t get _qt_stuck_qt_ anymore.  Perhaps it is easier to see what is happening... when it quits getting stuck-upon-intersect.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn line 153_co_ change the 1.5 to be 1.0_co_ and we get stuck-on-intersect again.  Go fig.  Perhaps we can learn why.  _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Culling/babylon.boundingInfo.ts#L217_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Culling/babylon.boundingInfo.ts#L217_lt_/a_gt_  Nothing in there indicates a reason to get stuck.  hmm.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCOULD IT BE... that WHEN an intersect happens... 3-5 _lt_em_gt_diffs _lt_/em_gt_continued to happen.  In other words... it took time for intersect to be triggered... and 3-5 mouse drags happened SINCE the REAL position of intersection.  SO_co_ you and I try to _qt_back-up_qt_ the mesh position ONE diff-level.  BUT... that_t_s not enough of a _qt_back_qt_ to make it leave intersection state.  We actually need to back-up the mesh 3-5 diffs.  We need to set currentMesh.position to the current position minus 3-5 diff-moves.  THIS is why backing-out 1.5 diff-distance (150%)... takes us out-of intersect state.  Perhaps_co_ this value needs adjusting or changes_co_ depending upon how fast the pointer was traveling at the time of intersect.  Drag _qt_velocity_qt_ will likely affect the size/magnitude of each diff-change value.  hmm.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHeavy theory_co_ eh?  I could be right.  Ya just never know.  _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Probably not.  heh _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t-------\n_lt_/p_gt_\n\n_lt_p_gt_\n\tgetGroundPosition() is an interesting func.  It returns a _qt_wobbly_qt_ diff.y... because of camera angle vs. ground angle_co_ so I do a little currentMesh.y position forcing... in line 147.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t------\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSO_co_ I have no real solutions_co_ and I haven_t_t designed a _qt_prediction system_qt_... but maybe SOMETHING is helpful_co_ here.  Let_t_s do more experiments and listen for more/wiser comments.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"didac","Date":"2018-12-08T22:50:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Wingnut_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou got the issue correctly. Thanks a lot for the comment and the ideas. Certainly backing up the mesh 3-5 diffs is not ideal_co_ because if that is the case_co_ then why not 6 or 7 diffs? I_t_ll give it another try and let_t_s see what I get.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"didac","Date":"2018-12-09T00:13:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWell_co_ I got something working. I don_t_t know if its very inefficient but it works alright. It basically consists in rendering the scene outside of the rendering loop to check the intersections_co_ and if there are intersections_co_ I undo the operation and render again (without rendering again it still works but it glitches a little bit).\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#1UK40Z%237_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#1UK40Z#7_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-12-09T02:23:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWhy do you need to call scene.render() ?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"didac","Date":"2018-12-09T05:04:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI don_t_t know why_co_ without the scene.render()_co_ and AFTER moving the position_co_ the intersect() check does NOT detect the intersection.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMaybe the intersect() needs the scene to be rendered work? Or probably the render() activates something that is not activated without it. If you comment the scene.render() line in _lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#1UK40Z%237_qt_ rel_eq__qt_external nofollow_qt_ style_eq__qt_background-color_dd_transparent_sm_color_dd_#3d6594_sm_font-size_dd_14px_sm__qt__gt_https_dd_//playground.babylonjs.com/#1UK40Z#7_lt_/a_gt_ it clearly stops working. _lt_br /_gt_\n\t_lt_br /_gt_\n\tProbably you have a better intuition of the situation. In any case now it works correctly (maybe adding an overhead that is not completely necessary_co_ but that I don_t_t know how to avoid)._lt_br /_gt_\n\t_lt_br /_gt_\n\tThanks for the help!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"timetocode","Date":"2018-12-09T12:34:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI do something just like this for a rewind + collision check feature. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe trick is to use mesh.computeWorldMatrix(true) on the meshes that are being checked for collisions after being moved. This is the internal operation being performed by scene render that makes the collisions work (among other things_co_ such as rendering). I think this is needed whenever moving and positioning objects in-between frames_co_ esp if the object is being moved multiple times and checked for collisions before the next render.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn the case of my rewind collision check_co_ I never actually wanted to render the object in the rewound position -- I just needed the object to be in the correct state so that babylon could do the math for me. For me that meant copying its original position_co_ moving it to a new position_co_ invoking computeWorldMatrix_co_ doing the intersection test_co_ and then restoring it to the original position. While not identical_co_ this does come out somewhat similar to the notion of moving an object (or a copy of that object) until it collides_co_ uncolliding it_co_ and then having it in the uncollided position all before actually rendering anything. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere_t_s the PG w/o scene render in the collision checks_dd_ _lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#1UK40Z%238_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#1UK40Z#8_lt_/a_gt_ If I understand what you have made_co_ then this in theory will never turn the torus white.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"didac","Date":"2018-12-09T15:19:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi timetocode_co_ this was exactly what I was looking for!_lt_br /_gt_\n\t_lt_br /_gt_\n\tIf I understand it correctly_co_ it is exactly what I was doing_co_ but instead of computing the WoldMatrix as a part of the rendering_co_ doing it directly_co_ without all the overhead of the rendering_co_ and without the (small) fraction of time where the object is intersecting._lt_br /_gt_\n\t_lt_br /_gt_\n\tThank you very much.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-12-09T18:04:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tExactly! The render was too much for just getting the world matrix updated_dd_)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-12-09T21:52:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_237461_qt_ data-ipsquote-contentid_eq__qt_41760_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1544309455_qt_ data-ipsquote-userid_eq__qt_33678_qt_ data-ipsquote-username_eq__qt_didac_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 12/8/2018 at 4_dd_50 PM_co_ didac said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tCertainly backing up the mesh 3-5 diffs is not ideal_co_ because if that is the case_co_ then why not 6 or 7 diffs?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tWell_co_ remember... that the velocity of the mouse pointer... at the time of intersect... matters.  With a fast drag_co_ each diff value is large.  Slow drags_co_ the diff values are small.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSooo... it is difficult to determine how many diffs to back-out.  Smarter to do some quick boundingInfo measurements_co_ and force some positions... based upon those.  De-overlap the two bounding boxes... but just barely de-overlapped.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust MAYBE... a function could be added to BJS Tools... deOverLap(mesh1_co_ mesh2).  mesh 1 doesn_t_t move.  mesh2 re-positions itself... using the shortest distance... to de-over-lapped state (from mesh1).  Interesting.  (Might need an option to lock the Y axis during re-position.  ie. don_t_t let mesh2 exit intersect state... via moving above or below mesh1.)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOr_co_ perhaps some other prediction tools could be thought-up... now that we know more info.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/12667-timetocode/?do_eq_hovercard_qt_ data-mentionid_eq__qt_12667_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/12667-timetocode/_qt_ rel_eq__qt__qt__gt_@timetocode_lt_/a_gt_ - What a fine explanation!  THANK YOU!  Fantastic. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-12-12T19:40:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMarking solved.  PM me if needed.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]