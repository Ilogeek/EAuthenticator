let open = require("open");

function init() {
    let json = require('../../licenses');
    let root = document.getElementById("content");
    for (let key in json) {
        if (json.hasOwnProperty(key)) {
            let element = addLicense(key, json[key]);
            root.appendChild(element);
        }
    }
}


function addLicense(name, ele) {
    let div = document.createElement('div');
    let title = document.createElement('h5');
    title.innerHTML = name;
    let license = document.createElement('p');
    license.innerHTML = "License: " + ele.licenses;
    let repository = document.createElement('p');
    repository.className += " link";
    repository.innerHTML = "Repository: " + ele.repository;
    repository.addEventListener("click", function(event) {
        openUrl(ele.repository);
        event.preventDefault();
    });
    let licenseText = document.createElement('p');
    licenseText.className += " link";
    licenseText.innerHTML = "License Text: " + ele.licenseUrl;
    licenseText.addEventListener("click", function(event) {
        openUrl(ele.licenseUrl)
        event.preventDefault();
    });
    let hrEle = document.createElement('hr');

    div.appendChild(title);
    div.appendChild(license);
    div.appendChild(repository);
    div.appendChild(licenseText);
    div.appendChild(hrEle);
    return div;
}

function openUrl(url) {
    open(url);
}