

document.getElementById('submitBtn').addEventListener('click', function(){
    //get User Emails
    const emailField = document.getElementById('user-Email');
    const userEmail = emailField.value;
    
    //Get User Password

    const passwordField = document.getElementById('user-Pass');
    const userPass = passwordField.value;

    //check User Email & password Is Valid Or Not

    if ( userEmail == 'man@gmail.com'  && userPass == 'pass' ){
        // alert("welcom To bank"); 
        window.location.href = 'banking.html'; //Will take you to Google.
    }else{
        alert("Please Use This User PassWord <br> Email: man@gmail.com and Pass: pass")
    }

})





// Banking Js Here 

