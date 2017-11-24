...prototype.initializeToolbar = 
  var button = toolbar.createOp("COM_EXAMPLE_TOOLBAR_BUTTON", buttonParams);
  appCtxt.getAppViewMgr()._view[viewId+'-main'].controller.operationsToEnableOnMultiSelection.push('COM_EXAMPLE_TOOLBAR_BUTTON');
..
