// We need all of this "boilerplate" to setup our Zimlet
function com_zgheb_blueprint_HandlerObject() {
};
com_zgheb_blueprint_HandlerObject.prototype = new ZmZimletBase();
com_zgheb_blueprint_HandlerObject.prototype.constructor = com_zgheb_blueprint_HandlerObject;
var ConfidentialZimlet = com_zgheb_blueprint_HandlerObject;
ConfidentialZimlet.prototype.init = function() {
  console.log("Initializing Blueprint Zimlet");
};

// Hook after zimbras own toolbar creation process
ConfidentialZimlet.prototype.initializeToolbar =
function(app, toolbar, controller, view) {
 var viewType = appCtxt.getViewTypeFromId(view);
 // Insert button only when in the "new email" view
 if (viewType == ZmId.VIEW_COMPOSE) {
   if(toolbar.getOp("com_zgheb_blueprint_TOOLBAR_BUTTON")) {
     return;
   }
   var buttonIndex = -1;
   for (var i = 0, count = toolbar.opList.length; i < count; i++) {
     // Add zimlet button to the right of the options button
     if (toolbar.opList[i] == ZmOperation.COMPOSE_OPTIONS) {
       buttonIndex = i + 1 ;
       break;
     }
   }
   // Configure the zimlet button
   var buttonParams = {
     text: this.getMessage("buttonname"),
     tooltip: this.getMessage("buttontooltip"),
     index: buttonIndex,
     image: "icon",
     showImageInToolbar: true,
     showTextInToolbar: false
   };
   // Create the button
   var button = toolbar.createOp("com_zgheb_blueprint_TOOLBAR_BUTTON", buttonParams);
   // Add a listener
   button.addSelectionListener(new AjxListener(this, this._doMagic, [controller]));
 }
};
// This will be called when the button is clicked
com_zgheb_blueprint_HandlerObject.prototype._doMagic = function () {
  // This is not needed for this example, but it this is the controller to interact with the new messages
  var composeController = AjxDispatcher.run("GetComposeController");
  var appCtxt = window.top.appCtxt;
  // Alert the value in the new message subject field
  alert(appCtxt.getCurrentView()._subjectField.value);
}
