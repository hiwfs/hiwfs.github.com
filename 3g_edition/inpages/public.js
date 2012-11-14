function $(id) {
	return document.getElementById(id);
}

function log() {
  var args = new Array();
  for (var i=0; i<arguments.length; i++){
      if (typeof(arguments[i]) == "function") args.push("function");
      else args.push(arguments[i]);
  }
  external.trace(args);
}

function path() {	return external.path; }
function urlpath() { return external.urlpath; }
function cacheExt() { return external.cacheExt; }
function fileExist(f) { return external.fileExist(f); }
function newGuid() { return external.newGuid(); }
function notifyConfigChanged() { external.config_save(); }
function configDoc() { return external.config_doc; }

function urlRoot() {
	return document.location.protocol + '//' + document.location.host;
}