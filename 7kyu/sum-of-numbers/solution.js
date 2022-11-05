function GetSum(a, b) {
    tmp = 0;

    if (a < b)
        while (a <= b) tmp += a++;
    else
        while (a >= b) tmp += a--;

    return tmp;
}


