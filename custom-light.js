window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("profile-picture").style.height = "32px";
        document.getElementById("header-logo").style.height = "50px";
        document.getElementById("header").style.backgroundColor = "rgba(255,255,255,.6)"
        document.getElementById("header").classList.add('blur-bg')
        document.getElementById("nav-listing").style.fontSize = "18px"
        document.getElementById("nav-install").style.fontSize = "18px"
        document.getElementById("nav-status").style.fontSize = "18px"
    } else {
        document.getElementById("profile-picture").style.height = "48px";
        document.getElementById("header-logo").style.height = "65px";
        document.getElementById("header").style.backgroundColor = "rgba(255,255,255,0)"
        document.getElementById("header").classList.remove('blur-bg')
        document.getElementById("nav-listing").style.fontSize = "20px"
        document.getElementById("nav-install").style.fontSize = "20px"
        document.getElementById("nav-status").style.fontSize = "20px"
    }
}