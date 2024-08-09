const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

document.querySelector("form").onsubmit = (ev) => {
    ev.preventDefault();
    if (document.querySelector("#encipher").checked){
        ENCIPHER(document.querySelector("#input"), document.querySelector("#keyword"));
    }else{
        DECIPHER(document.querySelector("#input"), document.querySelector("#keyword"));
    }
}

const ENCIPHER = (text, keyword) => {
    var encipherArr = [];
    var indexArr = [];
    var newArray = new Set([...keyword.value.toLowerCase().split(""), ...lowercase]);
    console.log([...newArray]);
    console.log(lowercase);

    text.value.toLowerCase().split("").map(val => {
        indexArr.push([...newArray].indexOf(val));
    });

    for (const index of indexArr) {
        // console.log(index);
        encipherArr.push(lowercase[index]);
        if (index === -1) {
            encipherArr.push(" ");
        }
    }

    document.querySelector("#output").value = encipherArr.join("");
}

const DECIPHER = (text, keyword) => {
    var encipherArr = [];
    var indexArr = [];
    var newArray = new Set([...keyword.value.split(""), ...lowercase]);
    console.log([...newArray]);
    console.log(lowercase);

    text.value.toLowerCase().split("").map(val => {
        indexArr.push(lowercase.indexOf(val));
    });

    for (const index of indexArr) {
        // console.log(index);
        encipherArr.push([...newArray][index]);
        if (index === -1) {
            encipherArr.push(" ");
        }
    }

    document.querySelector("#output").value = encipherArr.join("");
}

const SET_ENCIPHER_MODE = (bool) => {
    if (bool) {
        document.querySelector("#input").placeholder = "Plain text";
        document.querySelector("#output").placeholder = "Cipher text";
        document.querySelector("form button").textContent = "Encipher";
    }
}

const SET_DECIPHER_MODE = (bool) => {
    if (bool) {
        document.querySelector("#input").placeholder = "Cipher text";
        document.querySelector("#output").placeholder = "Plain text";
        document.querySelector("form button").textContent = "Decipher";
    }
}