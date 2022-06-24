function openNav() {
  document.getElementById("mySidebar").style.width = "300px";
  document.getElementById("wrapper").style.marginLeft = "300px";
  document.getElementById("header-lg").style.display = "none";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("wrapper").style.marginLeft = "0";
  document.getElementById("header-lg").style.display = "block";
}

window.onscroll = function () {
  headerFix();
};

function headerFix() {
  var header = document.getElementById("header-fix");
  var sticky = header.offsetTop;

  header.classList.add("sticky");
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    document.getElementById("header-lg").style.display = "none";
    header.style.justifyContent = "flex-end";
  } else {
    header.classList.remove("sticky");
    document.getElementById("header-lg").style.display = "block";
    header.style.justifyContent = "space-between";
  }
}
