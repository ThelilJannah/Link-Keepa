const saveInputBtn = document.getElementById("save-btn")
let myLeads = []
const inputEl = document.getElementById("input-el")
const unorderedList = document.getElementById("list-of-links")


saveInputBtn.addEventListener("click", 

  function() {
  myLeads.push(inputEl.value)
  inputEl.value = ""
  renderLeads()
  
   
}

)

function renderLeads() {
  let listItems = "" 
  for(i = 0; i < myLeads.length; i++) {
    // listItems += "<li> <a href = '" + myLeads[i] + "' target = '_blank'>"  + myLeads[i] + "</a> </li>"
    // listItems += "<li>" + "<a href = '" + myLeads[i] + "' target = '_blank'>" + myLeads[i] + "</a>" + "</li>"

    listItems += `
      <li>
        <a href = '${myLeads[i]}' target = '_blank'>  ${myLeads[i]}  </a>
      </li>
      
      `

    
    
    // const li = document.createElement("li")
    // li.textContent = myLeads[i]
    // ulEl.append(li)
  }
  
  unorderedList.innerHTML = listItems
}

 