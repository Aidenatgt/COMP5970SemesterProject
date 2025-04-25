function showWindow(windowId) {
  // hide all windows
  document.querySelectorAll('.window').forEach(win => {
    if (win.id != windowId) {
      win.classList.add("d-none");
    } else {
      // show the selected one
      document.getElementById(windowId).classList.remove("d-none");
    }
  });

}
