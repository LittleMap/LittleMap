(function() {
  function install(evt) {
    evt.preventDefault();
    // define the manifest URL
    var manifest_url = "http://www.lmap.org/webapps/lmap/manifest.webapp";
    // install the app
    var myapp = navigator.mozApps.install(manifest_url);
    myapp.onsuccess = function(data) {
      alert("application <span class=LM>Little Map</span> vient d'être installée.");
    };
    myapp.onerror = function() {
      if (this.error.name === "REINSTALL_FORBIDDEN") {
        alert("L'application <span class=LM>Little Map</span> est déjà installée.<br> Pour la désinstaller, aller dans <a href='about:apps'>about:apps</a>");
      } else {
        alert("Impossible d'installer LittleMap sur cet ordinateur, erreur: " + this.error.name);
      }
    };
  };
  // get a reference to the button and call install() on click
  var button = document.getElementsByClassName('installbtn')[0];
  console.log(button);
  button.addEventListener('click', install, false);
})();