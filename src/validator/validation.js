const mongoose = require('mongoose');


//** Globally used functions **/

// checking that there is something as input
const checkInputsPresent = (value) => { return (Object.keys(value).length > 0); }

// function to validate regex formats >  name ,fullName, logoLink, email , mobile, id,password
const validateName = (name) => { return (/^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i.test(name)); }


const validateLogoLink = (logoLink) => {
    const urlRegex = /(http[s]:\/\/)([a-z\-0-9\/.]+)\.([a-z.]{2,3})\/([a-z0-9\-\/._~:?#\[\]@!$&'()+,;=%]*)([a-z0-9]+\.)(jpg|jpeg|png)/i;
    return urlRegex.test(logoLink)
};

const validateEmail = (email) => { return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)); }

const validateMobileNo = (number) => { return (/^(\+\d{1,3}[- ]?)?\d{10}$/.test(number)); }

const isValidPassword = function (password) {
    return (/^[a-zA-Z0-9!@#$%^&*]{8,15}$/.test(password))
}

const isValidPincode = (pincode) => {return (/^\+?([1-9]{1})\)?([0-9]{5})$/.test(pincode));}

const isValidImageType = (value) => {return( /image\/png|image\/jpeg|image\/jpg/.test(value));}

const isValidPrice =(price) => {return (/^[0-9]{1,4}[.]{1}[0-9]{4}$/.test(price))}

const isValidNumber =(value) => {return (typeof(value) === "number" && value >= 0)};
    


const validateId = (id) => { return mongoose.isValidObjectId(id); }


module.exports = { checkInputsPresent,validateName,validateLogoLink, validateEmail, validateMobileNo, isValidPincode ,validateId ,isValidPassword,isValidImageType,isValidPrice,isValidNumber}