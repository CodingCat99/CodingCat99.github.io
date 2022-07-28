var myVar;
print("Website Launched")
function myFunction() {
  myVar = setTimeout(showPage, 3000);
  print("Loading Complete");
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}