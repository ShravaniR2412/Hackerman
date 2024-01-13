

let userInput = "XYZ"

function getUserInput() {
    const userInput = document.getElementById('userInputField').value;
    console.log("User input:", userInput);
    return userInput
}

console.log("User input:", userInput);


function displayContent() {
    let d = document.getElementById('t-lines')
    console.log("d value" + d)
    d.innerHTML = ""

    let str = getUserInput()

    let arr = ["Initializing...",
        "Connecting to Mainframe...",
        "Decrypting Security Protocols...",
        "Accessing Secure Database...",
        "Fetching Data...",
        "Hacking instagram User: "+str,
        "Username: "+str+"_00xy",
        "Password: 00shz_Y"+str,
        "Mobile no: +91 900xxxxxxx",
        "Hacking Complete!",]
    let index = 0

    function displayLine(index) {

        d.innerHTML += arr[index] + '<br>' + '<br>'

        console.log(arr[index], index)

        if (index == arr.length - 1) {
            console.log("Program end")
            return
        }

        setTimeout(function () {
            displayLine(index + 1);
        }, 2000);
    }

    setTimeout(() => {
        displayLine(0)
    }, 2000);
}

// const num = document.getElementsByClassName('num')[0]
// console.log(num)
// let number = ['10001001100110011001001001110011']
// let i = 0
// for(i=0;i<10;i++){
//     num.innerHTML+=number[0]+'</br>'
// }
