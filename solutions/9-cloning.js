// BEGIN
export default cloneShallow = (obj) => {
  if (!obj || typeof obj !== 'object'){ 
    return obj;
  }
  let cloneArr = {};
  let objArr = Object.entries(obj);
  for (const [key, value] of objArr){
    cloneArr[key] = cloneShallow(value);
  }
  return cloneArr;
}
// END
