(async () => {
var path1 = "";
var path2 = "";
var path3 = "";

var directory = "";
await fetch("TextFiles/directory.txt")
.then(response => response.text())
.then(text => directory = text);

console.log(directory);
fileNames = directory.split("\n");
console.log(fileNames);
files = [];
for(var i = 0; i<fileNames.length; ++i){
    var fileName = "TextFiles/"+fileNames[i]+".txt";
    files.push(fileName);
    console.log("It ran");
}

console.log(files.toString());
var tax = sessionStorage.getItem('Taxonomy');

var size = sessionStorage.getItem('Size');
if(size == '&lt;15'){size = 'u15';}

var collab = sessionStorage.getItem('Collaboration');

for(var i = 0; i<files.length; ++i){
    var fileText 
    await fetch(files[i])
    .then(response => response.text())
    .then(text => fileText = text);

    lineSplit = fileText.split("\n")
    firstLine = lineSplit[0];
    titleLine = lineSplit[1];

    tags = lineSplit[0].split(" ");
    console.log(tags.toString());
    if(tags.includes(tax) || tags.includes(collab) || tags.includes(size)){
        sec = document.createElement("div");
        sec.classList.add("productText");
        content = lineSplit.splice(2, 100);
        console.log(content);
        title = document.createElement("h1");
        title.innerHTML = titleLine;
        sec.appendChild(title);
        for(var j = 0; j < content.length; j++){
            par = document.createElement("p");
            par.innerHTML = content[j];
            sec.appendChild(par);

        }
        console.log(titleLine+" was added");
        document.body.insertBefore(sec, document.getElementById("bottom"));
    }
}
})();