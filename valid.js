const input = document.getElementById('valid_input')
const button= document.querySelector('.btn')
const control= document.getElementsByClassName('control')


button.addEventListener('click', (e)=>{
    e.preventDefault();
    let value = input.value
    const validEmail =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(value.length === 0 || !validEmail.test(value)) {
        alert('This field cannot be blank and you must enter a valid e-mail address.');
        document.querySelector('.error').style.visibility = "visible";
        document.querySelector('.arrow').style.visibility = "hidden";
    }else{
        document.querySelector('.error').style.visibility = "hidden";
        document.querySelector('.arrow').style.visibility = "visible";
        input.value=''
    }
    
})




       /*  let check = control.classList
        check.remove('arrow')
        check.add('error') */