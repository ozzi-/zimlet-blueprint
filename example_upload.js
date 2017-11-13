Zimlet_HandlerObject.prototype._upload = function (blob,ids){
  var xmlHttpUpload = new XMLHttpRequest();
  xmlHttpUpload.onload = function () {
    var uploadResponse  = xmlHttpUpload.responseText;
    if(uploadResponse.startsWith("200")){
      var jsonStartPos = this._nth_ocurrence(uploadResponse, ',', 2);
      if(jsonStartPos !== false){
        var jsonStrng = uploadResponse.substring(jsonStartPos);
        var jsonObj = JSON.parse(jsonStrng);
        var aid = jsonObj[0].aid;
        alert(aid);
      }
    }else{
      appCtxt.getAppController().setStatusMsg(
        "FAILED", ZmStatusView.LEVEL_CRITICAL
      );
    }
  };
  xmlHttpUpload=Zimlet_HandlerObject.prototype._uploadAttachement(xmlHttpUpload,blob);
}

// this assumes upload blob is a zip, otherwise adjust headers below . . 
Zimlet_HandlerObject.prototype._uploadAttachement = function (xmlHttpUpload,blob){
  var dest = "/service/upload?fmt=extended,raw";
  xmlHttpUpload.open("POST", dest, true);
  xmlHttpUpload.setRequestHeader('Content-Disposition', 'attachment; filename="upload.zip"')
  xmlHttpUpload.setRequestHeader('Content-Type', 'application/zip;')
  xmlHttpUpload.send(blob);
  return xmlHttpUpload;
}

Zimlet_HandlerObject.prototype._nth_ocurrence = function (str, needle, nth) {
  for (i=0;i<str.length;i++) {
    if (str.charAt(i) == needle) {
        if (!--nth) { return i+1;}
    }
  }
  return false;
}
