// BEGIN
export default pick = (obj, paramsArr) => {
    let newObj = {};
    for (let item in obj) 
    {
        paramsArr.includes(item) ? newObj[item] = obj[item] : false;
    }
    return newObj;
}
// END