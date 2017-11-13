// Returns a download link for all mails provided in the ids string (ids seperated with comma) 
// fmt is the file type, i use "zip"
Zimlet_HandlerObject.prototype._getDownloadURL = function (fmt,ids){
  var url = [];
  var i = 0;
  var proto = location.protocol;
  var port = Number(location.port);
  url[i++] = proto;
  url[i++] = "//";
  url[i++] = location.hostname;
  if (port && ((proto == ZmSetting.PROTO_HTTP && port != ZmSetting.HTTP_DEFAULT_PORT)
    || (proto == ZmSetting.PROTO_HTTPS && port != ZmSetting.HTTPS_DEFAULT_PORT))) {
    url[i++] = ":";
    url[i++] = port;
  }
  url[i++] = "/home/";
  url[i++]= AjxStringUtil.urlComponentEncode(window.top.appCtxt.getActiveAccount().name);
  url[i++] = "/?fmt=";
  url[i++] = fmt;
  url[i++] = "&list=";
  url[i++] = ids+",";
  url[i++] = "&filename=ZimbraItems";
  return url.join("");
}
