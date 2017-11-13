Zimlet_HandlerObject.prototype._moveToSpam = function (ids){
  var soapDoc = AjxSoapDoc.create("ConvActionRequest", "urn:zimbraMail");
  var actionNode = soapDoc.set("action");
  actionNode.setAttribute("op", "spam");
  // don't ask why the ID starts with -
  actionNode.setAttribute("id", "-"+ids.toString().replace(/,/g,",-"));
  appCtxt.getAppController().sendRequest({soapDoc: soapDoc,
      asyncMode:true,
      accountName: appCtxt.accountList.mainAccount.name,
      callback: (new AjxCallback(this, function(){
        appCtxt.getAppController().setStatusMsg(
          "MOVED TO SPAM"
        );
      })),
      errorCallback: (new AjxCallback(this, function(){
        appCtxt.getAppController().setStatusMsg(
          "FAILED", ZmStatusView.LEVEL_CRITICAL
        );
      }))
  });
}
