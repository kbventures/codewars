function facRecursion(value) {
    if (value == 1) {
        return value;
    } else if (value == 0) {
        return 1;
    } else if (value < 0) {
        return 0;
    } else {
        return value * facRecursion(value - 1);
    }
}


