Zimlet.prototype.initializeToolbar =
function(app, toolbar, controller, view) {
  var viewId = appCtxt.getViewTypeFromId(view);

  // . . . 

  var ids = this._getSelectedIDs(viewId,sent,failed);
  alert(ids);
}

ch_hin_reportspam_HandlerObject.prototype._getSelectedIDs= function (viewId,sent,failed) {
  var ids = [];
  var currentView = window.top.appCtxt.getAppViewMgr().getCurrentView();
  if (viewId === ZmId.VIEW_CONVLIST){
    var selectedItems = currentView.getMailListView().getSelection();
    for (i = 0, len = selectedItems.length; i < len; ++i) {
      ids=ids.concat(selectedItems[i].msgIds);
    }
  }else if(viewId === ZmId.VIEW_TRAD){
    var selectedItems = currentView.getMailListView().getSelection();
    for (i = 0, len = selectedItems.length; i < len; ++i) {
      ids.push(selectedItems[i].id);
    }
  }else if(viewId === ZmId.VIEW_CONV) {
    ids=currentView._msgViewList;
  }else if(viewId === ZmId.VIEW_MSG){
    ids.push(currentView._viewId.replace(/\D/g,''));
  }
  return ids;
}
