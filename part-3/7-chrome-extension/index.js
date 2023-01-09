let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")
const tabBtn = document.getElementById("tab-btn")

let localLeads = JSON.parse(localStorage.getItem("myLeads"))

if (localLeads) {
    myLeads = localLeads
    render(myLeads)
}

inputBtn.addEventListener("click", function () {
    if (inputEl.value) {
        myLeads.push(inputEl.value)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        inputEl.value = ""
        render(myLeads)
    }
})

tabBtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})

deleteBtn.addEventListener("dblclick", function () {
    localStorage.removeItem("myLeads")
    myLeads = []
    render(myLeads)
})

function render(leads) {
    // let listItems = document.createDocumentFragment()
    // for (let i = 0; i < leads.length; i++) {
    //     const li = document.createElement('li')
    //     const a = document.createElement('a')
    //     a.textContent = leads[i]
    //     a.href = leads[i]
    //     a.target = "_blank"
    //     li.append(a)
    //     listItems.append(li)
    // }
    // ulEl.replaceChildren(listItems)

    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
            <a target='_blank' href='${leads[i]}'>
            ${leads[i]}
            </a>
            </li>
            `
    }
    ulEl.innerHTML = listItems
}

