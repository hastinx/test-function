const palindrom = (word) => {
    // 1. Merubah parameter string menjadi array
    const arr = word.split('')

    // 2. Mencari nilai setengah dari panjang array
    const half = Math.ceil(arr.length / 2)

    // 3. Memecah array menjadi 2 array 
    var fHalf = arr.slice(0, half)
    const sHalf = arr.slice(half)

    /** 
     4. jika panjang array pertama dan kedua tidak sesuai
     maka dilakukan pemecahan array lagi untuk array yang pertama
     untuk mendapatkan panjang array yang sama dengan yang kedua
    */
    if (fHalf.length !== sHalf.length) {
        let fh = fHalf.length
        let sh = sHalf.length

        var mHalf = fHalf.slice(sh, fh)
        fHalf = fHalf.slice(0, sh)
    }

    // 5. Pengecekan karakter pada array pertama dan kedua
    var param1 = [], param2 = [];
    var sl = sHalf.length
    for (let i = 0; i < fHalf.length; i++) {
        sl = sl - 1
        fHalf[i] === sHalf[sl] ? param1.push("Ya") : param1.push("No")
    }

    // 6. Pengecekan karakter pada array ketiga yang didapat dari step 4
    var ml = mHalf ? ml = mHalf.length : 0
    if (ml > 1) {
        for (let i = 0; 0 < mHalf.length; i++) {
            ml = ml - 1
            mHalf[i] === mHalf[ml] ? param2.push("Ya") : param2.push("No")
        }
    } else {
        param2.push("Ya")
    }

    return (param1.includes("No") || param2.includes("No") ? "Not Palindrom" : "Palindrom")
}

console.log(palindrom("neveroddoreven"))



