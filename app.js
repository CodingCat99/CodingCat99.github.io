var myVar;
console.log("Website Launched")
function myFunction() {
  myVar = setTimeout(showPage, 3000);
  console.log("Loading Complete");
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}