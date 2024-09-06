// Slider
const radios = document.querySelectorAll('input[name="slider"]');
let currentIndex = 0;
function goToNextSlide() {
  radios[currentIndex].checked = false;
  currentIndex = (currentIndex + 1) % radios.length;
  radios[currentIndex].checked = true;
}

setInterval(goToNextSlide, 3000);

// Accordian
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

// popup
const Popup = document.querySelector('.popup_container')
const btnDemo = document.querySelector(".cta-btn")
const popupIcons = document.querySelector(".popup-icon")

btnDemo.addEventListener("click" , function(){
  if(Popup.classList.contains("popup-close")){

    Popup.classList.remove("popup-close")
  }else{
    Popup.classList.add("popup-close")
  }
})



popupIcons.addEventListener("click" , function(){
  if(Popup.classList.contains("popup-close")){
    Popup.classList.remove("popup-close")
    console.log("HEY")
  }else{
    Popup.classList.add("popup-close")
  }
})


const formData = {}

document.getElementById("myform").addEventListener("change" , function(e){
  const { name, value } = e.target;
  formData[name] = value; 
})

document.getElementById("myform").addEventListener("submit", async function(e){
  e.preventDefault()
  try {
    const response = await fetch("https://veevotech.com/process_contact",{
      method:'POST', 
      headers:{
       'Content-Type': 'application/json',
      },
      body:JSON.stringify(formData)
    })

    if (!response.ok) {
      throw new Error('Network response was not ok');
  }

  const result = await response.json();
  console.log('Success:', result)
  


  document.querySelector(".popup-btn").addEventListener('click' , function(){
    if(Popup.classList.contains("popup-close")){
      Popup.classList.remove("popup-close")
    }else{
      Popup.classList.add("popup-close")
    }
  })
  } catch (error) {
    console.log("ERROR:", error )
  }
})