
//Name Validation

export const isValidName =function(name){
    const  nameRegex =/^[a-zA-Z( \)]{2,50}$/
    return nameRegex.test(name)
}



//Phone Validation
export const isValidPhone =function(value){
    const  phoneRegex =/^[6-9]{1}[0-9]{9}$/
    return phoneRegex.test(value)
}


//Email Validation

export const isValidEmail = function(email){
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]{2,5})*$/ 
    return emailRegex.test(email)
}


