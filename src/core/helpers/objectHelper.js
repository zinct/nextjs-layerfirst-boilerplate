function removeEmptyObj(obj) {
  Object.keys(obj).forEach((key) => {
    if (obj[key] === "") {
      delete obj[key];
    }
  });

  return obj;
}

function setAll(obj, val) {
  return Object.keys(obj).reduce((accumulator, current) => {
    accumulator[current] = val;
    return accumulator;
  }, {});
}

function isAnyIsset(obj, value = null) {
  return Object.values(obj).some((element) => element == value);
}

export default {
  removeEmptyObj,
  setAll,
  isAnyIsset,
};
