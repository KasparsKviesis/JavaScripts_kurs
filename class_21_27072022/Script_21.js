let jsWindow = window.open(
    "http://127.0.0.1:5500/class_21_27072022/funkcija_21.html",
    "about",
    "height=600,width=800"
  );
  
  setTimeout(() => {
    window.open("http://127.0.0.1:5500/Dialogs_AB/Class_19/funkcija_19.html", "about");
  }, 3000);
  
  setTimeout(() => {
    jsWindow.resizeTo(600, 300);
  }, 6000);
  
  setTimeout(() => {
      jsWindow.close();
    }, 9000);
    