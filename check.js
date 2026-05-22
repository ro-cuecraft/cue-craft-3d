try {
  var fso = new ActiveXObject("Scripting.FileSystemObject");
  var text = fso.OpenTextFile("app.js", 1).ReadAll();
  eval(text);
  WScript.Echo("Syntax OK");
} catch(e) {
  WScript.Echo("Error: " + e.message + " at line " + e.line);
}
