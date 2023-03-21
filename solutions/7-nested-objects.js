// BEGIN
export default get = (obj, paramArr) => {
    let res = obj;
    for (const item of paramArr) {
        if (Object.hasOwn(res, item) === false) {
            return null;
        } 
        else 
        {
            res = res[item];
        }
    } 
    return res;
    }
// END