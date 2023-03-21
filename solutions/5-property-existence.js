import _, { words } from 'lodash';

// BEGIN
export default countWords = (str) => {
    const obj = {};
    let count = 0;
    let arrFull = _.words(str.toLowerCase())
    let arrShort = _.uniq(arrFull);
    for(let item1 of arrShort)
    {
        for(let item2 of arrFull)
        {
            if(item1 === item2)
            {
                count++;
            }
        }
        obj[item1] = count;
        count = 0;
    }
    
    return obj;
}
// END