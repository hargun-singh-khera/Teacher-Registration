export const emailValidation = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

export const pincodeValidation = (pincode) => {
    const regex = /^[0-9]{6}$/
    return regex.test(pincode)
}

export const phoneValidation = (phone) => {
    const regex = /^[0-9]{10}$/
    return regex.test(phone)
}

export const capitalizeString = (string) => {
    return string && string.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ")
}