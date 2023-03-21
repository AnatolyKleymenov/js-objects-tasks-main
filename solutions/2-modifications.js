import _ from 'lodash';

// BEGIN
export default normalizeData = (obj) => {
  obj.name = _.capitalize(obj.name.toLowerCase());
  obj.description = _.lowerCase(obj.description);
  return obj;
}
  // END