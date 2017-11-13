Zimlet_HandlerObject.prototype._forwardAttachement = function(aid){
  var fromEmail = appCtxt.getActiveAccount().name;
  var fromName  = appCtxt.getActiveAccount().name;
  var toName    = "To";
  var toEmail   = "to@domain.ch";
  var subject   = "Subject";
  var body      = "Some text";

  var soapDoc = AjxSoapDoc.create("SendMsgRequest", "urn:zimbraMail");
  var node_m = soapDoc.set("m", null, null);
  // TO
  var node_to = soapDoc.set("e", null, node_m);
  node_to.setAttribute("add", "0");
  node_to.setAttribute("p", toName);
  node_to.setAttribute("a", toEmail);
  node_to.setAttribute("t", "t");
  // FROM
  var node_from = soapDoc.set("e", null, node_m);
  node_from.setAttribute("p",fromName);
  node_from.setAttribute("a",fromEmail);
  node_from.setAttribute("t","f");
  // SUBJECT
  var node_subj = soapDoc.set("su",subject, node_m);
  // ATTACHEMENT, those attachement ids are passed in a comma seperated string
  if(aid === undefined){
    var node_attachement = soapDoc.set("attach", null, node_m);
    var node_aid = soapDoc.set("aid", aid, node_attachement);
  }
  // BODY
  var node_mp = soapDoc.set("mp", null, node_m);
  node_mp.setAttribute("ct", "text/plain");
  var node_content = soapDoc.set("content", body , node_mp);

  appCtxt.getAppController().sendRequest({soapDoc: soapDoc,
      asyncMode:true,
      accountName: appCtxt.accountList.mainAccount.name,
      callback: (new AjxCallback(this, function(){
        appCtxt.getAppController().setStatusMsg(
          "SENT"
          
        );
      })),
      errorCallback: (new AjxCallback(this, function(){
        appCtxt.getAppController().setStatusMsg(
          "FAILED", ZmStatusView.LEVEL_CRITICAL
        );
      }))
  });
}
