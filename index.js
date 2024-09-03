const accordian = document.querySelectorAll(".accordian-item")

accordian.forEach((accordian)=>{
    const icon = accordian.querySelector(".accordian-icon")
    const content = accordian.querySelector(".accordian-text")

    accordian.addEventListener("click" , function(){
        icon.classList.toggle("active")
        content.classList.toggle("active")
    })
})