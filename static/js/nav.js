// Navbar Functions

function about(stat) {
    var x = document.getElementById("about_trigger");

    var y = document.getElementById("about");

    if (stat == 0) {

        x.getElementsByTagName("a")[0].setAttribute("onclick", "about(1); return false;");
        x.getElementsByTagName("a")[0].removeAttribute("style, color");
        y.style.display = "block";
        y.style.opacity = "1";
        y.style.height = "auto";
    }

    if (stat == 1) {

        x.style.display = "block";
        x.getElementsByTagName("a")[0].setAttribute("onclick", "about(0); return false;");
        x.getElementsByTagName("a")[0].removeAttribute("style, color");
        y.style.height = "auto";
        y.style.opacity = "0";
        
        setTimeout(function() {
            y.style.display = "none";
        }, 980);
        
    }

}
// settings nav bar
function settings(x) {
    if (x == 0) {
        document.getElementById("settings_windows").style.display = "block";
    } else {
        document.getElementById("settings_windows").style.display = "none";
    }
    if (x == 1) {
        document.getElementById("settings_windows").style.display = "none";
    } else {
        document.getElementById("settings_windows").style.display = "block";
    }
}
