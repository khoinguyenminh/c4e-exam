//console
function numberOneTriangle(length) {
    var line = "";
    if (!isNaN(length)) {
        if (length >= 1 && length <= 10) {
            for (var i = 1; i <= length; i++) {
                for (var j = 1; j <= i; j++) {
                    line += "*";
                }
                line += "\n";
            }
            return line + "\n";
        } else {
            console.log("please input number is between 1 to 10")
        }


    } else {
        console.log("please input correct number")
    }

}


console.log(numberOneTriangle(10))