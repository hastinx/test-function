let data = [
    {
        "nama": "evan",
        "poin": 50000,
        "grade": "D"
    }
    ,
    {
        "nama": "jefry",
        "poin": 70000,
        "grade": "C"
    }
    ,
    {
        "nama": "rizky",
        "poin": 30000,
        "grade": "D"
    }
    ,
    {
        "nama": "hanson",
        "poin": 10000,
        "grade": "B"
    }
    ,
    {
        "nama": "chandra",
        "poin": 30000,
        "grade": "A"
    }
    ,
    {
        "nama": "goklas",
        "poin": 20000,
        "grade": "A"
    }
    ,
    {
        "nama": "hendra",
        "poin": 20000,
        "grade": "B"
    }
    ,
    {
        "nama": "surya",
        "poin": 30000,
        "grade": "A"
    }
]

const sortNama = (arr) => {
    let newData = arr.sort((a, z) => {
        let x = a.grade
        let y = z.grade
        return (x > y ? 1 : -1)
    })


    let sortData = newData.sort((a, z) => {
        if ((a.grade > z.grade) == 0) {
            return (a.poin < z.poin ? 1 : -1)
        }
    })

    var nama = []
    for (let i = 0; i < sortData.length; i++) {
        nama.push(sortData[i].nama)
    }

    return nama;

}

