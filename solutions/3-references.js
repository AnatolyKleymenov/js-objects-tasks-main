// BEGIN
    export default diffFunc = (obj1, obj2) => {
        if(obj1.name !== obj2.name)
        {
            return false;
        }
        if(obj1.state !== obj2.state)
        {
            return false;
        }
        if(obj1.website !== obj2.website)
        {
            return false;
        }
        return true;
    }
// END