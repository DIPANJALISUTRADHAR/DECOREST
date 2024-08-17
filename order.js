document.getElementById('placeOrder').addEventListener('click', () =>{
    window.location.href='confirm.html';
})

const urlParams = new URLSearchParams(window.location.search);
        const data = urlParams.get('data');
        
        if (data) {
            let currentPrice = decodeURIComponent(data);
            price.innerText+=`${parseFloat(currentPrice).toLocaleString('en-IN')}`;
            console.log(currentPrice.toLocaleString('en-IN'));
            let deliveryCharge = Number(document.getElementById('delivery').textContent);
            console.log(currentPrice);
            console.log( typeof parseFloat(currentPrice));
            let totalPrice = parseFloat(currentPrice);
            if(totalPrice > 0 && totalPrice < 50000){
                deliveryCharge = 1000;
            }
            else if(totalPrice >= 50000 && totalPrice < 150000){
                deliveryCharge = 1500;
            }
            else if(totalPrice >= 150000 && totalPrice < 500000){
                deliveryCharge = 3000;
            }
            else if(totalPrice >= 500000 && totalPrice < 1000000){
                deliveryCharge = 4000;
            }
            else if(totalPrice >= 1000000){
                deliveryCharge = 6000;
            }
            document.getElementById('delivery').textContent = deliveryCharge.toLocaleString('en-IN');
            document.getElementById('amount').textContent = ( parseFloat(currentPrice) + deliveryCharge).toLocaleString('en-IN');
        }
  console.log(document.getElementById('amount').textContent);
  

//adress operation
document.getElementById('address').textContent = "Nabin Sen Pally, P.O.- Nabapally, P.S.- Barasat, Town-Barasat, District- North 24 Parganas, West Bengal, Kolkata - 700126 "