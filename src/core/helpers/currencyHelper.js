function formatPrice(x) {
  return Number(x)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export default {
  formatPrice,
};
