(function() {
  document.getElementById("myHeading").innerHTML = "jamie";
  document.querySelector("nav ul li").setAttribute("class", ".currentpage");
  document
    .querySelector("nav ul li a")
    .setAttribute("href", "http://www.google.co.uk");
  document.getElementById("myTestEvent").addEventListener("click", myFunction);
  function myFunction() {
    console.info("hi");
  }
})();
