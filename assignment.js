//Feet to Mile Convert
function feetToMile(feet) {
    var mile = feet / 5280;
    return  mile;
}
// var result = feetToMile(50000);
// console.log("Mile:", result);


//Wood Calculator
function woodCalculator(chair, table, bed) {
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var bedCount = bed * 5;
    var totalWood = chairCount + tableCount + bedCount;
    return totalWood;
}
// var result = woodCalculator(14, 5, 12);
// console.log("Total:", result);


//Brick Calculator
function brickCalculator(floor) {
    var feet = 1000;
    var feet15 = feet * 15;
    var feet12 = feet * 12;
    var feet10 = feet * 10;
    // var total = feet15 + feet12 + feet10;
    return total;
}
// var result = brickCalculator(10);
// console.log("Total:", result);



//Find Tiny Friend Name
function tinyFriend(friendList) {
    return friendList.reduce(function (prevWord, currWord) {
        if (currWord.length < prevWord.length) {
            return currWord;
        } else
            return prevWord;
    });
}
// var friendList = ['Rubina','Tufa','Robin'];
// var result = tinyFriend(friendList);
// console.log("Total:", result);



