  // gets the folders tree view
  var treeView = appCtxt.getAppViewMgr().getCurrentViewComponent(ZmAppViewMgr.C_TREE).getTreeView(ZmId.ORG_FOLDER);
  if (treeView) {
    treeView.addSelectionListener(
      AjxCallback.simpleClosure( buttonPressed, [this])
    );
  }

  // outputs the internal folder name 
  function buttonPressed(ev){
    if (ev.items.length == 1 && ev.detail == DwtTree.ITEM_SELECTED) {
      var treeItem = DwtControl.getTargetControl(ev, false);
      var folder = treeItem.getData(Dwt.KEY_OBJECT);
      var foldername = ZmFolder.QUERY_NAME[folder.nId];
      alert(foldername);
    }
  }
