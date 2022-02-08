count = 3
function doanso(){
    document.getElementById("btn").innerHTML="đoán tiếp";
    let num = document.getElementById("number").value;
    let random = Math.floor(Math.random()*10+1);
    document.getElementById("random").innerHTML="Số trúng thưởng là: " + random;
    if (num == random && count >= 0){
        alert("Bạn đã đoán đúng");
    }else{
        count --;
    }
     document.getElementById("count").innerHTML = "Số lượt chơi còn lại là: " + count;
    if(count <=0 ){
    document.getElementById("count").innerHTML = "Bạn đã hết lượt chơi";
    document.getElementById("btn").innerHTML = "Chơi lại";
    document.getElementById("number").value = "";
    count = 3;
    return;
    }
}