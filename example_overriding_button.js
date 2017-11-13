Zimlet.prototype.initializeToolbar =
function(app, toolbar, controller, view) {
  var viewId = appCtxt.getViewTypeFromId(view);
  // only when in the following views
  if (viewId !== ZmId.VIEW_CONVLIST && viewId !== ZmId.VIEW_CONV && viewId !== ZmId.VIEW_TRAD && viewId !== ZmId.VIEW_MSG) {
  	return;
  }
  // get SPAM button
  var spamBtn = toolbar.getOp(ZmOperation.SPAM);
  spamBtn.removeSelectionListeners();
  spamBtn.text = "New Spam";
  spamBtn.setAttribute(
    'title',buttonname
  );
  spamBtn.addSelectionListener(
    new AjxListener(this, this._doSpamBtn, [viewId,controller])
  );
}
