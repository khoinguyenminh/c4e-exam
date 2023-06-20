
//restricted input > 0
function handleChange(input) {
    if (input.value < 0) input.value = 0;
}

// // Find prime numbers
"use strict"
function findPrime() {
    const a = parseInt(document.getElementById("numbera").value);
    const b = parseInt(document.getElementById("numberb").value);
    document.getElementById("result").innerHTML = '';
    if (a <= b) {
        for (let i = a; i <= b; i++) {
            let flag = 0;
            for (let j = 2; j < i; j++) {
                if (i % j == 0) {
                    flag = 1;
                    break;
                }
            }

            if (i > 1 && flag == 0) {
                document.getElementById("titleresult").innerHTML = "List of Prime numbers from " + a + "-" + b;
                document.getElementById("result").insertAdjacentHTML('afterend', i + '<br>');
            }
        }
    } else {
        alert("Please input b is number and greater than a")
    }

}