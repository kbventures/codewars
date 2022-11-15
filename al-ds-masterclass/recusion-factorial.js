function factorial(fac) {

    if (fac == 0) return 1;

    return factorial(fac - 1) * fac
}