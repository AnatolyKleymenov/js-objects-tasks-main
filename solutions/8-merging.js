import _ from 'lodash';

// BEGIN
export default fill = (objSrc, arrKeys, dataObj) => {
    if (arrKeys.length != 0) {
        let newArr = _.pick(dataObj, arrKeys);
        for (let item in newArr) {
            objSrc[item] = newArr[item];
        }
    }
    else {
        for (let item in dataObj) {
            objSrc[item] = dataObj[item];
        }
    }
    return objSrc;
}
// END