function objectType(obj) {
    return Object.prototype.toString.call(arguments.length == 0 ? null : obj);
}