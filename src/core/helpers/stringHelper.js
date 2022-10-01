function capitalize(s) {
  return (s && s[0].toUpperCase() + s.slice(1)) || "";
}

function truncate(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

export default {
  capitalize,
  truncate,
};
