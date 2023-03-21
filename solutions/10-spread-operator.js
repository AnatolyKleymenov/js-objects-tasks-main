// BEGIN
export default make = (name, dataObj = {}) => {
    const obj = {
        name: name,
        state:"moderating",
        createdAt: Date.now(),
    };
    return {...obj, ...dataObj};
}
// END