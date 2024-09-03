const accordian = document.querySelectorAll(".accordian-item")

accordian.forEach((accordian)=>{
    const icon = accordian.querySelector(".accordian-icon")
    const content = accordian.querySelector(".accordian-text")
    const header = accordian.querySelector(".accordian-heading")

    accordian.addEventListener("click" , function(){
        icon.classList.toggle("active")
        content.classList.toggle("active")
        header.classList.toggle("active")
    })
})