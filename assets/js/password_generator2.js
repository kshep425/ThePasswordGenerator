// variables:
// - password
// - length (between 8 and 128 characters)
// - special_chars [true, false]
// - characters for password

var password = "";
var lower_chars = 'abcdefghijklmnopqrstuvwxyz';
var upper_chars = lower_chars.toUpperCase();
var num_chars = "0123456789";
password_chars = lower_chars + upper_chars + num_chars
var special_chars = "`~!@#$%^&*()_+-={}|[]\:'<>?,./'";
password_chars_with_special_chars = password_chars + special_chars;

// When Generate Password button is clicked
function generate_password(){

    // prompt user for length and validate it's valid
    var password_length = 0;
    var tries = 0;
    while (!(password_length >= 8 & password_length <=128 & tries < 3)){
        password_length = get_password_length();
        if (password_length >= 8 & password_length <=128){
            break;
        } else {
            tries++;
            if (tries >=3){
                alert("You have not entered a correct value in 3 tries:")
            }

            alert("Please enter number between 8 and 128.");
        }
    }

    var upper = upper_chars[get_rand_num(upper_chars.length)];
    var lower = lower_chars[get_rand_num(lower_chars.length)];
    var number = num_chars[get_rand_num(num_chars.length)];
    password = upper + lower + number;
    var num_used = 3;

    // confirm user wants special characters
    if (confirm_special_chars()){
        //  - add at least one special char if special char is true
        password = password + special_chars[get_rand_num(special_chars.length)];
        password_chars = password_chars_with_special_chars
        num_used++;
        console.log(password_length, password)
    };

    // create password
    for (let index = 0; index < (password_length - num_used); index++) {
        rand_index = Math.floor(Math.random() * password_chars.length)
        console.log(rand_index, password_chars[rand_index])
        password = password + password_chars[rand_index];
    }

    password = password.shuffle()
    console.log("password: " + password)
    document.getElementById("generated-password").textContent = password;

}

// prompt user for length
function get_password_length(){
    return prompt("Enter length between 8 and 128:  ")
}

function confirm_special_chars(){
    return confirm("Do you want to include special characters?");
}

function get_rand_num(len){
    return Math.floor(Math.random() * len)
}

String.prototype.shuffle = function () {
    var a = this.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}