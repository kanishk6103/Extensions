[{"Owner":"eps","Date":"2018-12-04T21:59:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tA couple of posters have mentioned getting BabylonJS projects on to Android.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is my take on this_co_ the whole code developed using Basic4Android (sometimes called B4A).  It is a fairly mature platform - I_t_ve been using it for about 7 years now.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor Basic4Android you can develop an App which creates a WebView which then loads the HTML which then loads the Javascript_co_ which access BabylonJS.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can_co_ obviously_co_ send variables to the HTML (pretty standard) and/or pass variables back to the Android App - I_t_ll leave the code in there to enable you to do that as well as I think it_t_s quite useful to do and to see how it_t_s been done.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou WILL need some libraries_co_ which are only available to Licensed Users (but at no extra cost). They are _lt_span_gt__lt_span_gt__dd__lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt__lt_span_gt_WebViewExtras2 (ver 2.20)_lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt__lt_span_gt_WebViewSettings (ver 1.31)_lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt__lt_span_gt_JavaObject (2.05)_lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt__lt_span_gt_Reflection (2.40)_lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt__lt_span_gt_Phone (2.50)_lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt__lt_span_gt_IME (1.10)_lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt__lt_span_gt_I use other libraries in addition to these - but they are to do with Firebase / Admob and a few graphical elements.  StringUtils and RuntimePermissions._lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tB4A demo code in full.  This should work_co_ but I_t_m happy to help out or you can always post questions on the B4A Forum ( _lt_a href_eq__qt_https_dd_//www.b4x.com/android/forum/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.b4x.com/android/forum/_lt_/a_gt_ ).  I_t_m using the latest release version of B4A which is 8.50 but you shouldn_t_t necessarily need that version - probably only around 6.80 or later.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_/p_gt_\n_lt_pre class_eq__qt_ipsCode_qt__gt_\n\t#Region  Project Attributes\n\t#FullScreen_dd_ True\n\t#IncludeTitle_dd_ False\n\t#ApplicationLabel_dd_ Demo\n\t#VersionCode_dd_ 1\n\t#VersionName_dd_ \n\t_t_SupportedOrientations possible values_dd_ unspecified_co_ landscape or portrait.\n\t#SupportedOrientations_dd_ landscape\n\t#CanInstallToExternalStorage_dd_ False\n\t#End Region\n\t \n\t#Region  Activity Attributes\n\t#FullScreen_dd_ True\n\t#IncludeTitle_dd_ False\n\t#End Region\n\t \n\tSub Process_Globals\n\t_t_These global variables will be declared once when the application starts.\n\t_t_These variables can be accessed from all modules.\n\t \n\tEnd Sub\n\t \n\tSub Globals\n\t_t_These global variables will be redeclared each time the activity is created.\n\t_t_These variables can only be accessed from this module.\n\tDim wv As WebView\n\tDim wve As WebViewExtras\n\tDim wvs As WebViewSettings\n\t   Private ime1 As IME\n\t \n\t   Private ActivityParent As JavaObject \n\tEnd Sub\n\t \n\tSub Activity_Create(FirstTime As Boolean)\n\t_t_Do not forget to load the layout file created with the visual designer. For example_dd_\n\t_t_Activity.LoadLayout(_qt_Layout1_qt_)\n\twv.Initialize(_qt_wv_qt_)\n\twve.addWebChromeClient(wv_co__qt_wve_qt_)\n\twvs.setAllowFileAccess(wv_co_True)\n\twvs.setAppCacheEnabled(wv_co_True)\n\twvs.setDOMStorageEnabled(wv_co_True)\n\t \n\tActivity.AddView(wv_co_0_co_0_co_100%x_co_100%y)\n\twv.LoadUrl(_qt_file_dd_///android_asset/index.html?parameter1_eq__qt_&amp_sm_variableValue&amp_sm__qt__qt_)\n\t   ime1.Initialize(_qt_ime1_qt_)\n\t   ime1.AddHeightChangedEvent\n\t   Dim jo As JavaObject _eq_ Activity\n\t   jo.RunMethodJO(_qt_getContext_qt__co_ Null).RunMethodJO(_qt_getWindow_qt__co_ Null).RunMethod(_qt_setSoftInputMode_qt__co_ _\n\t     Array As Object(0x20))\n\t   ActivityParent _eq_ jo.RunMethodJO(_qt_getParent_qt__co_ Null) \n\tEnd Sub\n\t \n\tSub Activity_Resume\n\t \n\tEnd Sub\n\t \n\tSub Activity_Pause (UserClosed As Boolean)\n\t \n\tEnd Sub\n\t \n\tSub IME1_HeightChanged (NewHeight As Int_co_ OldHeight As Int)\n\t   CallSubDelayed(Me_co_ _qt_AfterChange_qt_)\n\tEnd Sub\n\t \n\tSub AfterChange\n\t   Dim ajo As Panel _eq_ Activity\n\t   Dim width As Int _eq_ ActivityParent.RunMethod(_qt_getMeasuredWidth_qt__co_ Null)\n\t   Dim height As Int _eq_ ActivityParent.RunMethod(_qt_getMeasuredHeight_qt__co_ Null)\n\t   If width _eq_ 0 Or height _eq_ 0 Then Return\n\t   ajo.width _eq_ width _t_update the _qt_activity_qt_ width and height\n\t   ajo.height _eq_ height\n\t   wv.width _eq_ width\n\t   wv.height _eq_ height\n\t   wv.ZoomEnabled _eq_ False\n\tEnd Sub\n\t \n\tSub start_rewardvideoandroidfunction (variable As String)\n\t_t_Log(_qt_Got back to Android _qt_+variable)\n\tLog(_qt_*** Got back to Android !! _qt_&amp_sm_ variable)\n\tEnd Sub\n\t_lt_/pre_gt_\n_lt_p_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOf course you will need to make sure that the HTML and Javascript reside in the correct (sub)directories.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust passing a single variable to the Javascript_co_ but could pass more.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHTML\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_/p_gt_\n_lt_pre class_eq__qt_ipsCode_qt__gt_\n\t&lt_sm_!DOCTYPE html&gt_sm_\n&lt_sm_html&gt_sm_\n&lt_sm_head&gt_sm_\n    &lt_sm_meta http-equiv_eq__qt_Content-Type_qt_ content_eq__qt_text/html_qt_ charset_eq__qt_utf-8_qt_/&gt_sm_\n    &lt_sm_title&gt_sm_HTML5 Demo&lt_sm_/title&gt_sm_\n    &lt_sm_!--- link to the last version of babylon ---&gt_sm_\n    &lt_sm_!-- &lt_sm_script src_eq__qt_scripts/hand.minified-1.2.js_qt_ type_eq__qt_text/javascript_qt_&gt_sm_&lt_sm_/script&gt_sm_ --&gt_sm_\n    &lt_sm_script src_eq__qt_js/pep.js_qt_ type_eq__qt_text/javascript_qt_&gt_sm_&lt_sm_/script&gt_sm_\n    &lt_sm_script src_eq__qt_js/babylon.3.1.mini.js_qt_ type_eq__qt_text/javascript_qt_&gt_sm_&lt_sm_/script&gt_sm_\n    &lt_sm_script src_eq__qt_js/babylon.gui.js_qt_ type_eq__qt_text/javascript_qt_&gt_sm_&lt_sm_/script&gt_sm_\n    &lt_sm_style type_eq__qt_text/css_qt_&gt_sm_\n        html_co_ body {\n            overflow_dd_ hidden_sm_\n            width   _dd_ 100%_sm_\n            height  _dd_ 100%_sm_\n            margin  _dd_ 0_sm_\n            padding _dd_ 0_sm_\n        }\n\t        #renderCanvas {\n            width   _dd_ 100%_sm_\n            height  _dd_ 100%_sm_\n        }\n        #scoreLabel {\n            position_dd_absolute_sm_\n            top_dd_20px_sm_\n            left _dd_ 20px_sm_\n            color_dd_white_sm_\n            font-size_dd_ 1em_sm_\n        }\n        #livesLabel {\n            position_dd_absolute_sm_\n            bottom_dd_20px_sm_\n            left _dd_ 20px_sm_\n            color_dd_white_sm_\n            font-size_dd_ 1em_sm_\n        }\n        #highScoreLabel {\n            position_dd_absolute_sm_\n            bottom_dd_20px_sm_\n            right _dd_ 20px_sm_\n            color_dd_white_sm_\n            font-size_dd_ 1em_sm_\n        }\n        #waveLabel {\n            position_dd_absolute_sm_\n            top_dd_20px_sm_\n            right _dd_ 20px_sm_\n            color_dd_white_sm_\n            font-size_dd_ 1em_sm_\n        }\n    &lt_sm_/style&gt_sm_\n&lt_sm_/head&gt_sm_\n&lt_sm_body&gt_sm_\n    &lt_sm_canvas id_eq__qt_renderCanvas_qt_ touch-action_eq__qt_none_qt_&gt_sm_&lt_sm_/canvas&gt_sm_\n    &lt_sm_div id_eq__qt_scoreLabel_qt_&gt_sm_SCORE _dd_ 0&lt_sm_/div&gt_sm_\n    &lt_sm_div id_eq__qt_livesLabel_qt_&gt_sm_LIVES _dd_ &lt_sm_/div&gt_sm_\n    &lt_sm_div id_eq__qt_highScoreLabel_qt_&gt_sm_HIGH SCORE _dd_ &lt_sm_/div&gt_sm_\n    &lt_sm_div id_eq__qt_waveLabel_qt_&gt_sm_WAVE _dd_   1&lt_sm_/div&gt_sm_\n    &lt_sm_script src_eq__qt_js/app.js_qt_ type_eq__qt_text/javascript_qt_&gt_sm_&lt_sm_/script&gt_sm_\n    &lt_sm_script&gt_sm_\n        window.addEventListener(_t_DOMContentLoaded_t__co_ function () {\n        \n    var parameters _eq_ location.search.substring(1).split(_qt_&amp_sm__qt_)_sm_\n\t    var temp _eq_ parameters[0].split(_qt__eq__qt_)_sm_\n    l _eq_ unescape(temp[1])_sm_\n    \n            BjsApp.init(l)_sm_\n        })_sm_\n&lt_sm_/script&gt_sm_\n&lt_sm_/body&gt_sm_\n&lt_sm_/html&gt_sm_\n\t_lt_/pre_gt_\n_lt_p_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJavascript\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_/p_gt_\n_lt_pre class_eq__qt_ipsCode_qt__gt_\n\t/// &lt_sm_reference path_eq__qt_babylon.d.ts_qt_ /&gt_sm_\n/// &lt_sm_reference path_eq__qt_babylon.js_qt_ /&gt_sm_\n/// &lt_sm_reference path_eq__qt_babylon.gui.js_qt_ /&gt_sm_\n\tvar BjsApp _eq_ BjsApp || {}_sm_\n\tvar livesP1 _eq_ 3_sm_\n\tBjsApp.init _eq_ function (livesFromApp) {\n\t    livesP1 _eq_ livesFromApp_sm_  //set here_co_ but defined globally - not any more_co_ passed in from Android App to allow player to get rewarded for watching an advert_co_ gain extra life\n \n\t    document.getElementById(_qt_livesLabel_qt_).innerHTML _eq_ _qt_LIVES _dd_ _qt_ + livesP1_sm_  //Update the HTML div accordingly - I obviously do this quite a bit at the moment but this is mainly to save on having to code the graphical parts of those and prettify them.\n \n\t//Do your own Javascript stuff here!!!!\n\t                    console.log(_t_The Aliens have landed about to go back to Android...._t_+ score)_sm_\n                    //Android.startRewardVideoAndroidFunction(score)_sm_\n                    Android.CallSub(_t_start_rewardvideoandroidfunction_t__co_true_co_score)_sm_\n\t}\n\t \n\t_lt_/pre_gt_\n_lt_p_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve_co_ obviously_co_ removed a whole load of code - but hopefully there should be enough here for anyone to follow.  As I said I_t_m happy to help out or post questions on the B4A forum.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"eps","Date":"2018-12-04T22:02:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_ve used pep.js to handle user input and was going to use babylon-gui but decided against this in the end and pass back control to the Android App and have put a menu of sorts in place_co_ etc..\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-12-05T18:32:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThank you so much for sharing!!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"eps","Date":"2018-12-06T11:28:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_237084_qt_ data-ipsquote-contentid_eq__qt_41696_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1544034751_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t16 hours ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tThank you so much for sharing!!\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tNo worries_co_ hopefully it will help others get started..\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt took me a few years to find Basic4Android when looking for a decent toolset to create Android Apps which offered enough flexibility to delve deeper if needed but not too much coding for codings sake.  I had an idea for a 3D game a few years (4 or 5!!) ago and then went looking for a 3D framework.  I came across BabylonJS and have just about achieved my goal for this now_co_ thanks to you and David R + others along the way. _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  My game is very much a 0.1 version of where I want to get it to_co_ but as always there are other time pressures.  0.1 is just about viable - hopefully if there is interest I am hoping to improve on it _lt_/span_gt_rapidly.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]