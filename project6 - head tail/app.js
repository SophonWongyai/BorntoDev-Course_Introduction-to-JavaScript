let round = prompt("คุณจะเล่นทั้งหมดกี่รอบ ?")
let score = 0
for(var i = 0; i < round; i++){
    var answer = prompt("หัว หรือ ก้อย พิมพ์มาเลย !")
    if(Math.floor(Math.random() * 10) <= 4){
        //หัว
        random_answer = "หัว"
    }
    else{
        //ก้อย
        random_answer = "ก้อย"
    }

    if(answer == random_answer){
        alert("ยินดีด้วย")
        score += 1
    }else{
        alert("เสียใจด้วย")
    }
    console.log(random_answer + " : " + answer)
    document.getElementById("game-list").innerHTML += "ทาย: " + answer + " | ออก: " + random_answer + "<br>"
}
document.getElementById("total-score").innerHTML = `คุณทายถูกทั้งหมด: ${score} ครั้ง`