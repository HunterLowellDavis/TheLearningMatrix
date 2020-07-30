var path1 = "";
var path2 = "";
var path3 = "";

var tax = sessionStorage.getItem('Taxonomy');
path1 = "TextFiles/"+tax+".txt";
console.log(path1);

var size = sessionStorage.getItem('Size');
if(size == '&lt;15'){size = 'u15';}
path2 = "TextFiles/"+size+".txt";
console.log(path2);

var collab = sessionStorage.getItem('Collaboration');
path3 = "TextFiles/"+collab+".txt";
console.log(path3);

fetch(path1)
  .then(response => response.text())
  .then(text => document.getElementById('sec1').innerHTML = text);

  fetch(path2)
  .then(response => response.text())
  .then(text => document.getElementById('sec2').innerHTML = text);

  fetch(path3)
  .then(response => response.text())
  .then(text => document.getElementById('sec3').innerHTML = text);