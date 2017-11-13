Zimlet_HandlerObject.prototype._currentlyInFolder = function (foldername) {
  var folderId = window.top.appCtxt.getAppViewMgr().getCurrentView()._children._array[0]._folderId;
  return(ZmFolder.QUERY_NAME[folderId]===foldername);
}
