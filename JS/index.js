let sName = document.getElementById('sName');
let sUrl = document.getElementById('sUrl');
let addBtn = document.getElementById('addBtn');
let visitBtn = document.getElementById('visitBtn');
let tableBody = document.getElementById('tableBody');

let siteContainer = [];

// /check if not there site yet
if (localStorage.getItem("site") != null) {
    siteContainer = JSON.parse(localStorage.getItem('site'));
    displaySite();
}

// funcction to add a new site
function addSite() {
    let site = {
        name: sName.value,
        url: sUrl.value
    }
    siteContainer.push(site);
    localStorage.setItem("site", JSON.stringify(siteContainer));
    displaySite();
    clearData();
}

// to add event to Button
addBtn.addEventListener('click', addSite);

// clear func
function clearData() {
    sName.value = "";
    sUrl.value = "";
}
//function to display
function displaySite() {
    let box = ``
    for (let i = 0; i < siteContainer.length; i++) {
        box += `
            <tr>
            <td>${i + 1}</td>
            <td>${siteContainer[i].name}</td>
            <td><button id="visitBtn" onclick="vistSite(${i})" class="btn text-white"><i class="fa-regular fa-eye"></i> Visit</button></td>
            <td><button id="deleteBtn"  onclick="deleteSite(${i})" class="btn btn-danger text-white"><i class="fa-solid fa-trash"></i> Delete</button></td>
            </tr>
            `
    }
    tableBody.innerHTML = box;
}

// function to vist site 
function vistSite(URL) {
    window.open(siteContainer[URL].url ,"_blank");
}

// delete item function
function deleteSite(siteDelete) {
    siteContainer.splice(siteDelete, 1);
    localStorage.setItem("site", JSON.stringify(siteContainer));
    displaySite();
}

// search function
function searchSite(key) {
    let box = ``;
    for (var i = 0; i < siteContainer.length; i++) {
        if (siteContainer[i].name.toUpperCase().includes(key.toUpperCase().trim())) {
            box += `
                <tr>
                <td>${i + 1}</td>
                <td>${siteContainer[i].name}</td>
                <td><button id="visitBtn" onclick="vistSite(${i})" class="btn text-white"><i class="fa-regular fa-eye"></i> Visit</button></td>
                <td><button id="deleteBtn"  onclick="deleteSite(${i})" class="btn btn-danger text-white"><i class="fa-solid fa-trash"></i> Delete</button></td>
                </tr>
                `
        }
    }
    tableBody.innerHTML = box;
}