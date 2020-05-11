const table = document.querySelector("#vetoTable")

const pathname = window.location.pathname;
const token = pathname.replace("/veto/","")

axios({
    method: 'get',
    url: `data/${token}`    
}).then((result) => {
    list = result.data
    diplayList(list)    
})

idea_btn.addEventListener("click", (e) => {
    e.preventDefault()
    window.location.href = `/idea/${token}`
})

veto_btn.addEventListener("click", (e) => {
    console.log("clicked")
    e.preventDefault()
    window.location.href = `/veto/${token}`
})

const diplayList = function(list){
    list.forEach((idea) => {
        displayRow(idea)    
    })
}

const displayRow = function(idea){
    var description = idea.description        

    var row = table.insertRow(-1)
    var cell1 = row.insertCell(0)
    var cell2 = row.insertCell(1)            

    cell2.innerText = description 
}