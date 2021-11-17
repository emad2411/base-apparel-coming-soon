const subBtn=document.getElementById('submit-btn');
const errorMsg=document.getElementById('email-error-msg');
const errorIcn=document.getElementById('email-error-icn');
const emailField=document.querySelector('.email');
const emailRegex=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+$/g;
subBtn.addEventListener('click',(e)=>{
    e.preventDefault();

    
    if (emailField.value && emailRegex.test(emailField.value)){
        emailField.value="";
        errorMsg.classList.remove('show');
        errorIcn.classList.remove('show');

    }else{
        errorMsg.classList.add('show');
        errorIcn.classList.add('show');
    }
})
