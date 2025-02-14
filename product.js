document.addEventListener("DOMContentLoaded",()=>{
    document.querySelector("title").innerText="PRODUCT";
const lists=[
    {NAME:"Gustavo",Age:33,Gender:"Male"},
    {NAME:"Justo",Age:24,Gender:"Male"},
    {NAME:"Maggy",Age:19,Gender:"Female"},
    {NAME:"Jerry",Age:23,Gender:"Male"},
    {NAME:"Brenda",Age:23,Gender:"Female"},
    {NAME:"Jacob",Age:35,Gender:"Male"},
    {NAME:"Gwen",Age:33,Gender:"Female"},
]
    const produt_details=document.querySelectorAll(".product-details span");

    produt_details.forEach(span=>{
        span.addEventListener("click",(e)=>{
            e.preventDefault()
            const div=e.target.closest(".product-details")
            if(div){
                div.remove()
            }
        })
    })

    const usersDetails=document.querySelector(".users");
    const userList=document.createElement("ul");
    lists.forEach(list=> {
        const listDetails = document.createElement("li");
        listDetails.innerHTML = `
            <h4>${list.NAME}</h4>
            <p>Age: ${list.Age}</p>
            <span>Gender: ${list.Gender}</span>
            <button class="btn">Delete</button>
        `; 
        userList.appendChild(listDetails)
        
        usersDetails.appendChild(userList);
    })
    
    const deletebtn=document.querySelectorAll(".btn")
      deletebtn.forEach(btn=>{
        btn.addEventListener("click",(e)=>{
            e.preventDefault()
            const deleteUser=e.target.closest(".users ul li");
            if(deleteUser){
                deleteUser.remove()
            }
        })
      })
})