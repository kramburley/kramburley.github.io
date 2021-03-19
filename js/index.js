function display(window) {
  disable_display();
  document.getElementById(window).style.display = "block";

  //$("#information-container").load("content/status.html");
}

function disable_display() {
  document.getElementById("status").style.display = "none";
  document.getElementById("work").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("contact").style.display = "none";
}


