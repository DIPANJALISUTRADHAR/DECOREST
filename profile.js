//-------------------------------variable declaration-----------------------//
let leftDivs = document.querySelectorAll('#leftDiv div');
let accountDiv = document.getElementById('accountDiv');
let myOrdersDiv = document.getElementById('myOrders');
let personalInfo = document.getElementById('personalInfo');
let myWishList = document.getElementById('wishList');
let changePassword = document.getElementById('changePassword');
let myOrdersDetailDiv = document.getElementById('myOrdersDetailDiv');
let accountDetailsDiv = document.getElementById('accountDetailsDiv');
let myWishListDiv = document.getElementById('myWishListDetailsDiv');
let changePasswordDiv = document.getElementById('passwordChangeDiv');
let price = document.getElementById('price');
let descriptionText = document.getElementById('descriptionText');
//---------------------Main Code----------------------------------------------------------//
//1. Return to website operation
document.getElementById('returnToWebsite').addEventListener('click', () =>{
    setTimeout(() => {
        window.location.href = 'eCommerce.html';
        
        
    }, 500);
})
//2. clicking on left buttons operation
leftDivs.forEach((leftDiv) => {
    leftDiv.addEventListener('click', () =>{
        leftDiv.classList.add('commonProp');
        leftDivs.forEach((otherDiv) =>{
            if(otherDiv !== leftDiv){
                otherDiv.classList.remove('commonProp');
            }
        })
        
        
    })
    
});
//3.clicking on edit information button operation
document.querySelector('#editInfo i').addEventListener('click', () =>{
    accountDetailsDiv.style.display ='none';
    personalInfo.classList.add('commonProp');
    document.getElementById('editAccountDetailsDiv').style.display = 'flex';
    console.log('clicked');
    

})
myOrdersDiv.addEventListener('click', () =>{
    setTimeout(() => {
        accountDetailsDiv.style.display ='none';
        if( myWishListDiv.style.display=='flex' ||changePasswordDiv.style.display=='flex'){  
            changePasswordDiv.style.display ='none';
            myWishListDiv.style.display ='none';      
        }
        myOrdersDetailDiv.style.display = 'flex';
        console.log('go orders clicked');
    }, 100);
    
})
personalInfo.addEventListener('click', () =>{
    setTimeout(() => {
        if(myOrdersDetailDiv.style.display =='flex' || myWishListDiv.style.display=='flex' ||changePasswordDiv.style.display=='flex'){
            myOrdersDetailDiv.style.display = 'none';
            changePasswordDiv.style.display ='none';
            myWishListDiv.style.display ='none';
        }
        accountDetailsDiv.style.display ='flex';
        console.log('personal info clicked');
        
    }, 100);
    
})
myWishList.addEventListener('click', () =>{
    setTimeout(() => {
        accountDetailsDiv.style.display ='none';
        if( myOrdersDetailDiv.style.display=='flex' ||changePasswordDiv.style.display=='flex'){
            changePasswordDiv.style.display ='none';
            myOrdersDetailDiv.style.display = 'none';
           
        }
        myWishListDiv.style.display ='flex';
        console.log('wishlist clicked');
    }, 100);
    
})
changePassword.addEventListener('click', () =>{
    setTimeout(() => {
        accountDetailsDiv.style.display ='none';
        if( myWishListDiv.style.display=='flex' || myOrdersDetailDiv.style.display=='flex'){
            myWishListDiv.style.display ='none';
            myOrdersDetailDiv.style.display = 'none';
           
        }
        changePasswordDiv.style.display ='flex';
        console.log(' password change clicked');
    }, 100);
    
})
// 

//4.place Order button operation

//coming from main eCommerce html page
const urlParams = new URLSearchParams(window.location.search);
        const data1 = urlParams.get('data1');
        const data2 = urlParams.get('data2');
        const data3 = urlParams.get('data3');
        if (data1) {
            let currentPrice = decodeURIComponent(data1);
            price.innerText+=`${parseFloat(currentPrice).toLocaleString('en-IN')}`;
            console.log(currentPrice);
            console.log( typeof currentPrice);
            document.getElementById('placeOrder').addEventListener('click', () =>{
            const divContent = encodeURIComponent(currentPrice);
            window.location.href = `order.html?data= ${divContent}`;
            console.log(divContent);
})  
        }
        if(data2){
            let freshString = decodeURIComponent(data2);
            let freshArr = freshString.split(',');
            console.log(typeof freshArr);
            console.log(freshArr);
            setTimeout(() => {
                for (let index = 0; index < freshArr.length; index++) {
                    descriptionText.innerHTML += freshArr[index] + '<br>';
                    console.log(descriptionText.innerText);
                    
                }
                
            }, 1000);
                
        }
        if (data3) {
            let itemNumber = decodeURIComponent(data3);
            document.getElementById('quantity').value = itemNumber;
            console.log(itemNumber);
            
            
        } 



