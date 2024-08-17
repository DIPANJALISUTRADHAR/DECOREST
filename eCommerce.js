//-------------------------------variable declaration part---------------------------------------------//
let aboutAchor = document.getElementById( 'aboutAnchor');
let submitBtn = document.getElementById('submitBtn');
let hrefLinks = document.querySelectorAll('nav a');
let anotherProcessDiv = document.getElementById('anotherProcess');
let descriptionDivs = document.querySelectorAll('.description');
let placeOrder = document.getElementById('placeOrder'); 
let processDiv = document.getElementById('process');
let totalDivs= document.querySelectorAll('.totalDiv');
let cartDivs = document.querySelectorAll('.cartDiv');
let inputValue;
let nameEnter = document.getElementById('name')
let nameArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K' ,'L', 'M' ,'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y' ,'Z', ' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k' ,'l', 'm' ,'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y' ,'z']
let nameStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
let aboutText =  `Welcome to the right place! \nWe understand the importance of your occasion!\nWe offer the unique approach to add a little more lightup \nin your special day.  `;
let homeMsg = document.getElementById('welcomeMsg');
let cartCount = 0;
let formSubmission;
let descriptionArr = [];
const cartIconDescriptionMap = new Map();
let submissionArr = [];
let jsonObject = {};

//-----------------------------------------MAIN CODE----------------------------------------------------//
//-----------------------------------------NAV SECTION-------------------------------------------------//
//1. Scrolling after clicking an anchor

document.addEventListener('DOMContentLoaded',() =>{
    hrefLinks.forEach((hrefLink) =>{
        hrefLink.addEventListener('click', (event) =>{
            event.preventDefault();
            const hrefID = hrefLink.getAttribute('data-target');
            const mainID = document.getElementById(hrefID);
            if(mainID){
                mainID.scrollIntoView(
                    { behavior: 'smooth' });
                
            }

        })
    })

} )

//2. Clicking on the profile button
document.getElementById('profile').addEventListener('click', ()=>{
    console.log('click');
    setTimeout(() => {
        window.location.href = 'profile.html';
        
    }, 500);
})

//3.clicking on dropdown operation
document.getElementById('dropDown').addEventListener('mouseover', ()=>{
    document.getElementById('dropDiv').style.display = 'flex';
    
})

document.getElementById('dropDiv').addEventListener('mouseout', ()=>{
    setTimeout(() => {
        if (!dropDiv.matches(':hover') && !dropDown.matches(':hover')) {
            document.getElementById('dropDiv').style.display = 'none';
        }
    }, 100);
    
})

//-----------------------------------------HOME SECTION-------------------------------------------------//
//1. Home Div Message operation

const welcomeMsg = `We know, decoration of home is a matter of art. 
And, when it is about the furniture, it plays a big role to make your place classy and elegent. 
We are here for helping you to choose a perfect and customise design for your place, and make the best possible outcome
within your budget !`
let index = 0;
const displayMsg = function(){
        if(index < welcomeMsg.length){
            homeMsg.textContent += welcomeMsg.charAt(index);
            index++;
        }
        setTimeout(displayMsg, 50);
        
    }
//2. Intersection and observe the operation

const newObserver = new IntersectionObserver((entries, observer)=>{
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            displayMsg();
        }
    })
}, {
    root: null,
    threshold: 0.5
})
const homeDiv = document.getElementById('homeDiv');
newObserver.observe(homeDiv);

//3. GoToForm Button Operation

document.addEventListener('DOMContentLoaded', () =>{
    document.getElementById('goToForm').addEventListener('click', ()=>{
        document.getElementById('formSection').scrollIntoView({
            behavior: 'smooth'
        });
    })
})

//---------------------------------------PRODUCTS SECTION---------------------------------------------//

//added to wishlist operation

totalDivs.forEach((totalDiv)=>{
    heart = totalDiv.querySelector('.hearts');
    let heartIcon = totalDiv.querySelector('#heartIcon');
    let clickCount =0;
    let wishlistText = totalDiv.querySelector('.wishlistText');
    let addText = totalDiv.querySelector('.addText');
    heartIcon.addEventListener('click', ()=>{
        clickCount++;
        if(clickCount ==1){
            wishlistText.style.visibility ='visible'; 
       heartIcon.style.color = 'red';
        heartIcon.classList.add('blink');
        addText.textContent = 'Added to favourites !';
        setTimeout(() => {
            heartIcon.classList.remove('blink');
            wishlistText.style.visibility = 'hidden';
            addText.textContent = '';
            console.log('clicked1');
        }, 2000);
        }
        else if(clickCount ==2){
            heartIcon.style.color = 'white';
            heartIcon.classList.remove('blink');
            wishlistText.style.visibility = 'visible';
            addText.textContent = 'Removed from favourites!';
           
            setTimeout(() => {
                heartIcon.classList.remove('blink');
                addText.textContent = '';
                wishlistText.style.visibility = 'hidden';
                console.log('clicked2');
                
            }, 1000);
            clickCount =0;
        
           }
    })
})
cartDivs.forEach((cartDiv) => {
    let cartIcon = cartDiv.querySelector('.addToCart');
    let addIcon = cartDiv.querySelector('.Add');
    let removeIcon = cartDiv.querySelector('.Remove');
    const parentDiv = cartIcon.parentElement.parentElement;
    let cartCount =0;
    let addCount = 0;
    let addRemoveInput = cartDiv.querySelector('.addRemoveInput');
    let addValue = Number(addRemoveInput.value);
    let cartTextSpan = cartDiv.querySelector('.cartText');
    let cartTextP = cartDiv.querySelector('.cartText p');
    cartIcon.addEventListener('click', ()=>{
        cartCount++;
        let itemInputs = document.getElementById('itemInput');
        let currentValue = Number(itemInputs.value);
        let payInputs = document.getElementById('payInput');
        let payValue = Number(payInputs.value);
        if(cartCount ==1){
            let priceTag = parentDiv.querySelector('.priceTag').textContent.replace(/,/g, '');
            let price = parseFloat(priceTag);
            const descriptionText = parentDiv.querySelector('.descriptionpara').textContent;
            console.log(descriptionText);
            descriptionArr.push(descriptionText);
            console.log(descriptionArr);
            cartTextSpan.style.visibility ='visible'; 
            cartIcon.style.color = 'blue';
            cartIcon.classList.add('blink');
            cartTextP.textContent = 'Added to cart !';
            addValue += 1;
            currentValue += 1;
            itemInputs.value = currentValue;
            addRemoveInput.value = addValue;
            payValue = payValue + price;
            console.log(price);
            payInputs.value = payValue;
            addIcon.addEventListener('click', ()=>{
                let priceTag = parentDiv.querySelector('.priceTag').textContent.replace(/,/g, '');
                let price = parseFloat(priceTag);
                addCount++;
                addValue += 1;
                itemInputs.value = Number(itemInputs.value) + 1;
                addRemoveInput.value = addValue;
                payInputs.value = Number(payInputs.value)+ price;
                }) 
        setTimeout(() => {
            cartIcon.classList.remove('blink');
            cartTextSpan.style.visibility = 'hidden';
            cartTextP.textContent = '';
        }, 2000);
        }
        else if(cartCount ==2){
            let priceTag = parentDiv.querySelector('.priceTag').textContent.replace(/,/g, '');
            let price = parseFloat(priceTag);
            console.log(price);
            const descriptionText = parentDiv.querySelector('.descriptionpara').textContent;
            let indexToRemove = descriptionArr.indexOf(descriptionText);
            descriptionArr.splice(indexToRemove, 1);
            cartIcon.style.color = 'black';
            cartIcon.classList.remove('blink');
            cartTextSpan.style.visibility = 'visible';
            cartTextP.textContent = 'Removed from cart!';
            addValue -= 1;
            currentValue -= 1;
            itemInputs.value = currentValue;
            addRemoveInput.value = addValue;
            payValue = payValue - price;
            console.log(price);
            payInputs.value = payValue;
            removeIcon.addEventListener('click', ()=>{
                if(addRemoveInput.value > 0){
                    removeIcon.disabled = false;
                    addCount++;
                addValue -= 1;
                let priceTag = parentDiv.querySelector('.priceTag').textContent.replace(/,/g, '');
                let price = parseFloat(priceTag);
                currentValue -=1;
                itemInputs.value = currentValue;
                addRemoveInput.value = addValue;
                payInputs.value = Number(payInputs.value) - price;
                }
                if(addRemoveInput.value == 0){
                    removeIcon.disabled = true;
                    alert('no item is there to remove from the cart !')
                    addRemoveInput.value = 0;
                    itemInputs.value = itemInputs.value;
                    payInputs.value = payInputs.value;
                }
                })  
            setTimeout(() => {
                cartIcon.classList.remove('blink');
                cartTextSpan.style.visibility = 'hidden';
                cartTextP.textContent = '';
                console.log('clicked2');
                
            }, 1000);
            cartCount =0;
        
           } 
    console.log(descriptionArr);       
    console.log(payValue);
    console.log(itemInputs.value);
    placeOrder.addEventListener('click', ()=>{
            const paymentData = encodeURIComponent(Number(payInputs.value));
            window.location.href = `profile.html?data1= ${paymentData}&data2= ${descriptionArr}&data3= ${currentValue}`;
            console.log(paymentData);
            console.log(descriptionArr);
            console.log(currentValue);
    })



})
})
//---------------------------------------SERVICE SECTION-------------------------------------//

//1. detailed service operation

document.getElementById('slideIcon1').addEventListener('click', () =>{
    processDiv.style.display = 'none';
    document.getElementById('weOfferText').textContent = 'You can do shopping from our website'
    processDiv.parentNode.replaceChild(anotherProcessDiv, processDiv);
    anotherProcessDiv.style.display = 'inline-flex';
    anotherProcessDiv.scrollIntoView({
        behavior : "smooth"
        })

})
document.getElementById('slideIcon2').addEventListener('click', () =>{
    anotherProcessDiv.style.display = 'none';
    document.getElementById('weOfferText').textContent = 'You can go for customised furniture'
    anotherProcessDiv.parentNode.replaceChild(processDiv, anotherProcessDiv);
    processDiv.style.display = 'inline-flex';
    processDiv.scrollIntoView({
        behavior : "smooth"
        })

})
//REVIEW SECION
//1. Scroll to the next page
document.getElementById('button1').addEventListener('click', () =>{
    if(document.getElementById('customerReviewPage2').style.display == 'flex' || document.getElementById('customerReviewPage3').style.display == 'flex'){
        document.getElementById('customerReviewPage2').style.display = 'none';
        document.getElementById('customerReviewPage3').style.display = 'none';
    }
    document.getElementById('customerReviewPage1').style.display = 'flex';
    console.log('clicked');
    document.getElementById('customerReviewPage1').scrollIntoView({
        behavior : "smooth"
        })
})
document.getElementById('button2').addEventListener('click', () =>{
    document.getElementById('customerReviewPage1').style.display = 'none';
    if( document.getElementById('customerReviewPage3').style.display == 'flex'){
        document.getElementById('customerReviewPage3').style.display = 'none';
    }
    document.getElementById('customerReviewPage2').style.display = 'flex';
    console.log('clicked');
    
    document.getElementById('customerReviewPage2').scrollIntoView({
        behavior : "smooth"
        })
})
document.getElementById('button3').addEventListener('click', () =>{
    document.getElementById('customerReviewPage1').style.display = 'none'
    if(document.getElementById('customerReviewPage2').style.display == 'flex'){
        document.getElementById('customerReviewPage2').style.display = 'none';
    }
    document.getElementById('customerReviewPage3').style.display = 'flex';
    console.log('clicked');
    document.getElementById('customerReviewPage3').scrollIntoView({
        behavior : "smooth"
        })
})
//CONTACT US SECTION

//remove the old content and enter into the new page 
const options = {
    root : null,
    rootMargin : '0px',
    threshold: 0.2,

}
const observer = new IntersectionObserver((entries, observer)=>{
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
        
    });

}, options);
const itemToAnimate = document.querySelectorAll('.spanAnimation');
itemToAnimate.forEach(element => {
    observer.observe(element);
});


//decription of product Details
// document.getElementById('descriptionPara').textContent = 'Drawing room fruniture (Two single set sofas, one table and one fire place)'


//slide icon operation
document.getElementById('slideIcon1').addEventListener('click', ()=>{
    let process = document.getElementById('process');
    let anotherProcess = document.getElementById('anotherProcess');
    console.log('clicked');
    console.log('Process visibility:', process.style.visibility);
    console.log('Another Process visibility:', anotherProcess.style.visibility);
    if(document.getElementById('process').style.visibility == 'visible'){
        document.getElementById('process').style.visibility = 'hidden';
          
    }
    if(document.getElementById('anotherProcess').style.visibility == 'hidden'){
        document.getElementById('anotherProcess').style.visibility = 'visible'; 
    }
})



//customer Review Message
document.getElementById('review_1').textContent = `It was my D-day.So, I wanted to start my new journey in a different way.
                                                   I started looking for a proper website to get the whole set of furniture
                                                   to decorate my new home and I found DECOREST. After getting the delivery,
                                                   I realised this is the best decision I have made to purchase all the 
                                                   frunitures from here. All the frunitures were made of C.P.Teek wood and
                                                   price are at my budget. I got a discount also for shopping for the first
                                                   time. I am very happy.`
                                                                                              
document.getElementById('review_2').textContent = `I usually love travelling. When I came to India, I found the main branch of DECOREST.
                                                   I was quite impressed after knowing about it's background, culture and the heritage 
                                                   business history. I decided to take a customised wardbrobe but it was not so easy to
                                                   get the delivery of the product. But, the excutives are so supportive that they did
                                                   the transport with the best possible way. I am very satisfied with their service.`
document.getElementById('review_3').textContent = `I know the owner of the website since I was 6.My parents were
                                                   very close to them. After many years, I got to know about their
                                                   business e-commerce website DECOREST. I usually purchase everything
                                                   from their website as they are very trust-worthy and honest about
                                                   their work. I recommend all my friends and relatives to do shopping
                                                   anything they want for their home decoration.`
document.getElementById('review_4').textContent = `Getting the customised furniture is a unique feature in this
                                                   website. I needed a full hallroom set with some sofa sets and
                                                   a fire place and some wooden windows. I contacted them and the
                                                   procedure was very easy. My orders was delivered within 3 weeks 
                                                   and their excutive reached in my home and completed all the setups
                                                   in free of cost. Service is very good. `
document.getElementById('review_5').textContent = `I am very happy with their service. I had to repair some old furnitures and
                                                had to exchange the parts of some furniture. They also provide these kind of
                                                service also.The price is affortable and Many discounts are also available.`
document.getElementById('review_6').textContent = `I wanted to get a readymade sofa-cum-bed. There were many designs were available 
                                                  for this kind of products. I ordered and they did delivery 2 deys before the promise
                                                  date of delivery. They are very trust-worthy and price are reasonable. `


//address message

document.getElementById('address').innerText = `Nabin Sen Pally, P.O.- Nabapally, 
                                                P.S.- Barasat, Town-Barasat,
                                                District- North 24 Parganas, 
                                                West Bengal, Kolkata - 700126

                                                Email Address :- d.sutradhar.official@gmail.com
                                                Phone Number :- +916291942998`

//-------------------------Form operation--------------------------------------------//                                             

//1. Form Submission Operation

let workbook;
let worksheet;
let dataArray = [];
function initWorkbook() {
    workbook = XLSX.utils.book_new();
   const storedData = localStorage.getItem("excelData");
   if (storedData) {
              
   dataArray = JSON.parse(storedData);
   worksheet = XLSX.utils.json_to_sheet(dataArray);
   } 
   else {
              
       worksheet = XLSX.utils.aoa_to_sheet([
       ["Name", "Email", 'Phone']  
               ]);
   dataArray.push({ "Name": "Name", "Email": "Email" , 'Phone': 'Phone'}); 
           }

           XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
       }
       initWorkbook();
       document.getElementById('form').addEventListener('submit', function(e) {
           e.preventDefault();
           const formData = new FormData(e.target);
           const dataObject = {};
           formData.forEach((value, key) => dataObject[key] = value);
           const isDuplicate = dataArray.some(item => {
            return item.Name === dataObject.Name && item.Email === dataObject.Email && item.Phone === dataObject.Phone;
        });
        if (isDuplicate) {
            alert("This data already exists in the Excel sheet.");
        } else{
           dataArray.push(dataObject);
           worksheet = XLSX.utils.json_to_sheet(dataArray);
           workbook.Sheets["Sheet1"] = worksheet;
           localStorage.setItem("excelData", JSON.stringify(dataArray));
           e.target.reset();
           const wbout =XLSX.writeFile(workbook, "formData.xlsx");
           const blob = new Blob([s2ab(wbout)], { type: "application/octet-stream" });
           window.location.href = 'newPage.html';
       }});

       function s2ab(s) {
           const buf = new ArrayBuffer(s.length);
           const view = new Uint8Array(buf);
           for (let i = 0; i < s.length; i++) {
               view[i] = s.charCodeAt(i) & 0xFF;
           }
           return buf;
       }
 
                                               

    



