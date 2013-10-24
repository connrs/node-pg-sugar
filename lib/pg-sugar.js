function Sugar() {
  if (!(this instanceof Sugar)) {
    return new Sugar();
  }
}

module.exports = Sugar;
