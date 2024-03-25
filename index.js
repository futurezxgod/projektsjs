function splitTheBill(group) {
    var result = {};
    var sum = 0;

    for (var key in group) {
        sum += group[key];
    }
    
    var avg = sum / (Object.keys(group).length);
    
    for (var person in group) {
        result[person] = Math.floor(-100 * (group[person] - avg))/100;
    }
    return result;
}

var r = splitTheBill({A: 7, B: 3, C: 2});

console.log(r);