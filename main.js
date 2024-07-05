//alert("ablusss")
//let usia = 30
//usia = 35
//console.log ("pipo sayang aku ??"+ usia)
//alert (usia)

//let usia = prompt('berapa usia kamu ?')
//alert ('usia anda adalah'+ usia)

let nama = 'sendy andreansah'
let usia = 30
let tinggibadan =  170
let istri = 1

// if (istri == null) {
//     istri = 'belum punya'
// }else {
//     istri = 'udah punya'
//  }   

switch (istri) {
    case 1 :
        istri =' punya 1 saja'
        break
    case 2 :
        istri = 'punya pacar 2, aku playboy'
        break
        default:
        istri = 'belum menikah'
        break
}

let saldoawal = 1000
let saldotambahan = 500
const hutang = 300
const totalsaldo = saldoawal + saldotambahan - hutang


alert(`nama saya ${nama} usia saya itu ${usia} tinggi badan saya adalah ${tinggibadan} istri saya ${istri}`)
alert (`saldo awal saya sebesar ${saldoawal} dan saldo tambahan saya adalah ${saldotambahan} dan jumlah total saldo say adalah ${totalsaldo}`)