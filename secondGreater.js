let arr = [32, 32, 11, 3, 24, 1, 2, -1, 17]
let arr1 = [12, 5, 7, 17, 8, 0, -1, 16, 7]

const getSecondGreaterSecond = (param) => {
    let maxValue = Math.max(...param)
    var i = 0;
    while (i < param.length) {
        if (param[i] === maxValue) {
            param.splice(i, 1);
        } else {
            i++;
        }
    }
    let newArr = param
    let newMax = Math.max(...newArr)
    return newMax
}

console.log(getSecondGreaterSecond(arr1))