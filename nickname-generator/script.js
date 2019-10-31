// Fetch nicknames from nicknames.txt
let nicknames;
(_ => {
    fetch("nicknames.txt")
    .then(raw => {
        return raw.text();
    })
    .then(data => {
        nicknames = data.split("\r\n");
    })
})();

// Format name and nickname from nicknames array
let getName = index => {
    let first = document.getElementById("first").value;
    let last = document.getElementById("last").value;
    if(first == "") first = "Big";
    if(last == "") last = "Chungus";
    let nick = nicknames[index < nicknames.length ? index : "Nigg"];
    
    return `${first} "${nick}" ${last}`;
}

// Display all nicknames
document.getElementById("all").addEventListener("click", _ => {
    document.getElementById("names").innerHTML = "";
    for(i in nicknames){
        document.getElementById("names").innerHTML += getName(i) + "<br>";
    }
    
});

// Display random nickname
document.getElementById("random").addEventListener("click", _ => {
    document.getElementById("names").innerHTML = getName(Math.floor(Math.random() * nicknames.length));
});