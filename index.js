
// Conversion Rates
const conversionRates = {
  'Argentina': { 'Marketing': 0.0618, 'Utility': 0.0408, 'Authentication':0.0367, 'Services':0.0316 },
  'Brazil': { 'Marketing': 0.0625, 'Utility': 0.035, 'Authentication':0.0315, 'Services':0.03},
  'Chile': { 'Marketing': 0.0889, 'Utility': 0.0586, 'Authentication':0.0527, 'Services':0.0454 },
  'Colombia': { 'Marketing': 0.0125, 'Utility': 0.0085, 'Authentication':0.0077, 'Services':0.006 },
  'Egypt': { 'Marketing': 0.1073, 'Utility': 0.0687, 'Authentication':0.0618, 'Services':0.0644 },
  'France': { 'Marketing': 0.1432, 'Utility': 0.0768, 'Authentication':0.0691, 'Services':0.0589 },
  'Germany': { 'Marketing': 0.1365, 'Utility': 0.0853, 'Authentication':0.0768, 'Services':0.0819},
  'India': { 'Marketing': 0.0099, 'Utility': 0.0042, 'Authentication':0 , 'Services':0.004 },
  'Indonesia': { 'Marketing': 0.0411, 'Utility': 0.02, 'Authentication':0.03 , 'Services':0.019},
  'Israel': { 'Marketing': 0.0353, 'Utility': 0.0188, 'Authentication':0.0169 , 'Services':0.0018 },
  'Italy': { 'Marketing': 0.0691, 'Utility': 0.042, 'Authentication':0.0378 , 'Services':0.0386},
  'Malaysia': { 'Marketing': 0.086, 'Utility': 0.02, 'Authentication':0.018 , 'Services':0.022 },
  'Mexico': { 'Marketing': 0.0436, 'Utility': 0.0266, 'Authentication':0.0239 , 'Services':0.0105},
  'Netherlands': { 'Marketing': 0.1597, 'Utility': 0.08, 'Authentication':0.072 , 'Services':0.0891},
  'Nigeria': { 'Marketing': 0.0516, 'Utility': 0.0319, 'Authentication':0.0287 , 'Services':0.031},
  'Pakistan': { 'Marketing': 0.0473, 'Utility': 0.0253, 'Authentication':0.0228 , 'Services':0.0142},
  'Peru': { 'Marketing': 0.0703, 'Utility': 0.0419, 'Authentication':0.0377 , 'Services':0.0179},
  'Russia': { 'Marketing': 0.0802, 'Utility': 0.0477, 'Authentication':0.0429 , 'Services':0.0398},
  'Saudi_Arabia': { 'Marketing': 0.0406, 'Utility': 0.0252, 'Authentication':0.0226 , 'Services':0.0195},
  'South_Africa': { 'Marketing': 0.0379, 'Utility': 0.02, 'Authentication':0.018 , 'Services':0.0168},
  'Spain': { 'Marketing': 0.0615, 'Utility': 0.038, 'Authentication':0.0342 , 'Services':0.0369},
  'Turkyie': { 'Marketing': 0.0109, 'Utility': 0.0093, 'Authentication':0.0083 , 'Services':0.003},
  'United_Arab_Emirates': { 'Marketing': 0.034, 'Utility': 0.0198, 'Authentication':0.0178 , 'Services':0.019},
  'United_Kingdom': { 'Marketing': 0.0705, 'Utility': 0.0398, 'Authentication':0.0358 , 'Services':0.0388},
  'North_America': { 'Marketing': 0.025, 'Utility': 0.015, 'Authentication':0.0135 , 'Services':0.0088},
  'Rest_of_Africa': { 'Marketing': 0.0225, 'Utility': 0.016, 'Authentication':0.0144 , 'Services':0.0363},
  'Rest_of_Asia_Pacific': { 'Marketing': 0.0732, 'Utility': 0.0472, 'Authentication':0.0425 , 'Services':0.0224},
  'Rest_of_CEE': { 'Marketing': 0.086, 'Utility': 0.0619, 'Authentication':0.0557 , 'Services':0.025},
  'Rest_of_Latin_America': { 'Marketing': 0.074, 'Utility': 0.0494, 'Authentication':0.0445 , 'Services':0.0423},
  'Rest_of_MiddleEast': { 'Marketing': 0.0341, 'Utility': 0.0198, 'Authentication':0.0178 , 'Services':0.0218},
  'Rest_of_Western_Europe': { 'Marketing': 0.0592, 'Utility': 0.042, 'Authentication':0.0378 , 'Services':0.0397},
  'Other': { 'Marketing': 0.0604, 'Utility': 0.0338, 'Authentication':0.0304 , 'Services':0.0145},
};

function updateConversionRate(){
  const country = document.getElementById("countrySelect").value;

  if(conversionRates[country]){
    document.getElementById("marketingRate").textContent =`$ ${conversionRates[country].Marketing}`;

    document.getElementById("Utility").textContent =`$ ${conversionRates[country].Utility}`;
    document.getElementById("serviceRate").textContent = `$ ${conversionRates[country].Services}`;
    document.getElementById("authenticationRate").textContent = `$ ${conversionRates[country].Authentication}`
  }else{
    document.getElementById("marketingRate").textContent = `PKR 3,400`;
    document.getElementById("utilityRate").textContent =`PKR 5,200`;
    document.getElementById("serviceRate").textContent = `PKR 9,000`;
    document.getElementById("authenticationRate").textContent = `PKR 7,400`
  }
}

// Accordian
const accordions = document.querySelectorAll(".accordian-item");

accordions.forEach((accordion) => {
  const icon = accordion.querySelector(".accordian-icon");
  const content = accordion.querySelector(".accordian-text");
  const header = accordion.querySelector(".accordian-heading");

  accordion.addEventListener("click", function () {
    // Close all other accordion items
    accordions.forEach((otherAccordion) => {
      if (otherAccordion !== accordion) {
        // Remove the active class from other accordion items
        const otherIcon = otherAccordion.querySelector(".accordian-icon");
        const otherContent = otherAccordion.querySelector(".accordian-text");
        const otherHeader = otherAccordion.querySelector(".accordian-heading");

        otherIcon.classList.remove("active");
        otherContent.classList.remove("active");
        otherHeader.classList.remove("active");
      }
    });
    // Toggle the active class for the clicked accordion
    icon.classList.toggle("active");
    content.classList.toggle("active");
    header.classList.toggle("active");
  });
});


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