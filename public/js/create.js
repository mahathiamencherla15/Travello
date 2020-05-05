// import axios from 'axios'


const destination = document.querySelector("#dest")
const peopleCount = document.querySelector("#peopleCount")
const pwd = document.querySelector("#pwd")
const re_pwd = document.querySelector("#re_pwd")
const msg  = document.querySelector("#errorMessage")
const submit = document.querySelector("#submit")

const illegalPassword = (error) => {
    destination.value = destination.value
    peopleCount.value = peopleCount.value
    pwd.value = ""
    re_pwd.value = ""
    msg.textContent = error
    console.log(error)
}

document.getElementById("sub_but").addEventListener("click", (e) => { 
    e.preventDefault() 
    if (pwd.value != re_pwd.value){
        illegalPassword("Passwords dont match")         
    }else{
        try {
            axios({
                method: 'post',
                url: '/create',
                data: {
                  destination: destination.value,
                  peopleCount: peopleCount.value,
                  password: pwd.value
                }
              })
              
        } catch (error) {
              
        //console.log("Success")
        msg.textContent = "Unable to create!"
        }
      
    }
        
})