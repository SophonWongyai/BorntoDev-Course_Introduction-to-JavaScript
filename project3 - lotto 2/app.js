let lotto_number = prompt("กรอกเลขที่ต้องการตรวจ")
let random_number = Math.floor(Math.random() * 1000)
document.getElementById("random").innerHTML = random_number
if(lotto_number == random_number){
    document.getElementById("result").innerHTML = "ยินดีด้วย ! คุณถูกรางวัลเลขท้าย 3 ตัว"

}
else{
    document.getElementById("result").innerHTML = "เสียใจด้วย ! คุณไม่ถูกรางวัลเลขท้าย 3 ตัว"
}

let age = prompt("อายุของคุณ : ")
if(age == 12)
{
    console.log("ไปเรียน ป.หก นะ")
}
else if(age == 13)
{
    console.log("ขึ้น ม.1 มั้ย")
}
else{
    console.log("ไม่แน่ใจ")
}