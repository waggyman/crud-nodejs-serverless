const getDateFromFormat = (dateValue) => {
    const splitted = dateValue.split('-')
    return new Date(`${splitted[1]}-${splitted[0]}-${splitted[2]} 00:00:00+00`)
}

const validateDate = (dateValue) => {
    const splitted = dateValue.split('-')
    if (splitted.length < 3) return false
    
    const day = splitted[0];
    const month = splitted[1];
    const year = splitted[2];
    
    if (day.length !== 2 || month.length !== 2 || year.length !== 4) return false
    if (Number(year) > new Date().getFullYear()) return false

    if (!(Number(year) % 4) && month == '02') {
        if (Number(day) > 29) return false
    }

    if (['01', '03', '05', '07', '08', '10', '12'].includes(month) && Number(day) > 31) return false
    if (['02', '04', '06', '09', '11'].includes(month) && Number(day) > 30) return false

    return true
}

const getAge = (dateValue) => {
    const today = new Date();
    const birthDate = getDateFromFormat(dateValue)
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

const formatToUser = (dateValue) => {
    const date = new Date(dateValue).toISOString().split('T')
    const splitted = date[0].split('-')
    const day = splitted[2]
    const month = splitted[1]
    const year = splitted[0]
    return `${day}-${month}-${year}`
}

module.exports = {
    getDateFromFormat,
    validateDate,
    getAge,
    formatToUser
}