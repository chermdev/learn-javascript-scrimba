let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function () {
    if (inputEl.value) {
        myLeads.push(inputEl.value)
        renderLeads()
        inputEl.value = ""
    }
})

function renderLeads() {
    // let listItems = document.createDocumentFragment()
    // for (let i = 0; i < myLeads.length; i++) {
    //     const li = document.createElement('li')
    //     const a = document.createElement('a')
    //     a.textContent = myLeads[i]
    //     a.href = myLeads[i]
    //     a.target = "_blank"
    //     li.append(a)
    //     listItems.append(li)
    // }
    // ulEl.replaceChildren(listItems)

    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

