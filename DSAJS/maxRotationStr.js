function minRightRotations(str1, str2) {
    if (str1.length !== str2.length) return -1;

    let doubleStr = str1 + str1;
    let index = doubleStr.indexOf(str2);

    if (index === -1) return -1;

    return (str1.length - index) % str1.length;
}
