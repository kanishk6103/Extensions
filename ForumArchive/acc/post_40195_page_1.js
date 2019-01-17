[{"Owner":"Zephos","Date":"2018-09-24T04:08:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi everyone_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am new to Babylon.js and have searched for hours for a solution to this but haven_t_t succeeded. Basically I have two cameras_co_ a Universal and an ArcRotate_co_ and when you click on an object to select it I would like to switch from Universal to ArcRotate smoothly so you can begin orbiting the object. While I can switch cameras just fine_co_ that transition has been unpredictable and I never know from what direction or distance I will be looking at the object. Same goes for the opposite transition that that happens when you click the object again to deselect it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is the function that gets executed as an Observer on scene.onPointerObservalble for POINTERDOWN event types.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_mouseClick(pointerEvent){\n        let pickResult _eq_ pointerEvent.pickInfo_sm_\n\n        if(pickResult.hit) {\n            if(pickResult.pickedMesh.metadata.entityID _eq__eq_ this.selectedID){\n                this.selectedID _eq_ _qt__qt__sm_\n\n                this.universalCamera.position _eq_ this.scene.activeCamera.position_sm_\n\n                this.scene.activeCamera _eq_ this.universalCamera_sm_\n                this.scene.activeCamera.attachControl(this.canvas_co_false)_sm_\n\n            }\n            else{\n                this.selectedID  _eq_ pickResult.pickedMesh.metadata.entityID_sm_\n                this.gameManager.ApplyUserAction(_qt_selectObject_qt__co_{_qt_entityID_qt__dd_pickResult.pickedMesh.metadata.entityID})_sm_\n                \n                this.orbitCamera.position _eq_ this.scene.activeCamera.position_sm_\n                this.orbitCamera.setTarget(pickResult.pickedMesh)_sm_\n\n                this.currentTarget _eq_ new BABYLON.Vector3(pickResult.pickedMesh.x_co_pickResult.pickedMesh.y_co_pickResult.pickedMesh.z)_sm_\n                this.scene.activeCamera _eq_ this.orbitCamera_sm_\n                this.scene.activeCamera.attachControl(this.canvas_co_false_co_true_co_true)_sm_\n            }\n\n        }\n    }_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tAs you can see I am trying to sync the cameras up to have the same position before switching them_co_ but that does not take into account rotations_co_ which is why the transition is not smooth.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs there anyway I can simply center the selected object smoothly to switch to the ArcRotateCamera with some kind of animation_co_ and then when deselected move and rotate the UniversalCamera to have the same view as the ArcRotateCamera before switching?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks in advance.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-09-24T16:04:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello! you should create a repro in the Playground to get more precise help. But here are some thoughts_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- Try using this.orbitCamera.setPosition()\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- Call his.orbitCamera.setTarget before setPosition\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]