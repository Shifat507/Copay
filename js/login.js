document.getElementById('btn-login').
        addEventListener('click',function(event){
            event.preventDefault();
            
            // get phone number 
            const phoneNumberField = document.getElementById('phone-number');
            const number = phoneNumberField.value;
            

            const pinNumberField = document.getElementById('pin-number');
            const pin = pinNumberField.value;

            if( number === '01300378211' && pin === '8211'){
                window.location.href = '/home.html'
            }
            else{
                alert('Wrong phone number on pin. Please try again later')
            }
            
        })  