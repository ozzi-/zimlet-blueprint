
// Removes the Spam button
var viewId = appCtxt.getCurrentController()._currentViewId;
appCtxt.getCurrentController()._toolbar[viewId].removeOp(ZmOperation.SPAM);
