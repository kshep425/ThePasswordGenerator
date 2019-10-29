    // function to open generate password alert
    let password = {
        new_password: NaN,
        set_password: function() {
            let p_length = password.password_length;
            var the_password = "";
            let password_choices = "";
            let lowercase_char = "abcdefghijklmnopqrstuvwxyz";
            let numeric_char = "1234567890"
            let special_char = "~!@#$%^&*()-_=+{}|[]:;,./<>?";
            let uppercase_char = "ABCEFGHIJKLMNOPQRSTUVWXYZ"

            if (this.lowercase) {
                password_choices = password_choices + lowercase_char;
                console.log("password_choices: " + password_choices);
            };


            if (this.numeric) {
                password_choices = password_choices + numeric_char;
                console.log("password_choices: " + password_choices);
            }

            if (this.special) {
                password_choices = password_choices + special_char
                console.log("password_choices: " + password_choices);
            }

            if (this.uppercase) {
                password_choices = password_choices + uppercase_char;
                console.log("password_choices: " + password_choices);
            }

            for (let index = 0; index < p_length; index++) {

                let rand = Math.floor(Math.random() * password_choices.length)
                letter = password_choices.substr(rand, 1);
                console.log("rand:" + rand + "; letter: " + letter);
                the_password = the_password + letter;
            };

            // check all char types are in password
            let pw_rands = [];
            let lowercase_char_included = false;
            let k = 0;
            var pw_rand = NaN

            if (this.lowercase){
                while(lowercase_char_included === false & k < p_length){
                    lowercase_char_included = lowercase_char.includes(the_password[k]);
                    k = k + 1;
                    console.log("lowercase included: " + lowercase_char_included)
                }
                if (lowercase_char_included === false) {
                    console.log("A lowercase char is missing from password.")
                    pw_rand = Math.floor(Math.random() * the_password.length);
                    pw_rands.push(pw_rand)
                    let lc_rand = Math.floor(Math.random() * lowercase_char.length);
                    let low_rand = lowercase_char.substr(lc_rand, 1);

                    console.log("Replace " + the_password[pw_rand] + " with "  + low_rand);
                    the_password = the_password.replace(the_password[pw_rand], low_rand);
                    console.log("password with lowercase char included: " + the_password );
                }
            } else {
                lowercase_char_included = true;
            }

            let numeric_char_included = false;
            let m = 0;
            if (this.numeric){
                while(numeric_char_included === false & m < p_length){
                    numeric_char_included = numeric_char.includes(the_password[m]);
                    m = m + 1;
                    console.log("numeric included: " + numeric_char_included)
                }
                if (numeric_char_included === false) {
                    console.log("A numeric char is missing from password.")
                    //pick a new location to replace that doesn't include previous location.
                    while (pw_rands.length <=2){
                        pw_rand = Math.floor(Math.random() * the_password.length);
                        if (pw_rands.indexOf(pw_rand) === -1) {
                            pw_rands.push(pw_rand)
                        }
                    }
                    let n_rand = Math.floor(Math.random() * numeric_char.length);
                    let num_rand = numeric_char.substr(n_rand, 1);

                    console.log("Replace " + the_password[pw_rand] + " with "  + num_rand);
                    the_password = the_password.replace(the_password[pw_rand], num_rand);
                    console.log("password with numeric char included: " + the_password );

                }
            } else {
                numeric_char_included = true;
            }

            let special_char_included = false;
            let n = 0;
            if (this.special){
                while(special_char_included === false & n < p_length){
                    special_char_included = special_char.includes(the_password[n]);
                    n = n + 1;
                    console.log("special included: " + special_char_included)
                }
                if (special_char_included === false) {
                    console.log("A special char is missing from password.")
                    //pick a new location to replace that doesn't include previous location.
                    while (pw_rands.length <= 3){
                        pw_rand = Math.floor(Math.random() * the_password.length);
                        if (pw_rands.indexOf(pw_rand) === -1) {
                            pw_rands.push(pw_rand)
                        }
                    }
                    let n_rand = Math.floor(Math.random() * special_char.length);
                    let num_rand = special_char.substr(n_rand, 1);

                    console.log("Replace " + the_password[pw_rand] + " with "  + num_rand);
                    the_password = the_password.replace(the_password[pw_rand], num_rand);
                    console.log("password with special char included: " + the_password );

                }
            } else {
                special_char_included = true;
            }

            let uppercase_char_included = false;
            let o = 0;
            if (this.uppercase){
                while(uppercase_char_included === false & o < p_length){
                    uppercase_char_included = uppercase_char.includes(the_password[o]);
                    o = o + 1;
                    console.log("uppercase included: " + uppercase_char_included)
                }
                if (uppercase_char_included === false) {
                    console.log("An uppercase char is missing from password.")
                    //pick a new location to replace that doesn't include previous location.
                    while (pw_rands.length <= 4){
                        pw_rand = Math.floor(Math.random() * the_password.length);
                        if (pw_rands.indexOf(pw_rand) === -1) {
                            pw_rands.push(pw_rand)
                        }
                    }
                    let n_rand = Math.floor(Math.random() * uppercase_char.length);
                    let num_rand = uppercase_char.substr(n_rand, 1);

                    console.log("Replace " + the_password[pw_rand] + " with "  + num_rand);
                    the_password = the_password.replace(the_password[pw_rand], num_rand);
                    console.log("password with uppercase char included: " + the_password );

                }
            } else {
                uppercase_char_included = true;
            }




            this.new_password = the_password;

        },

        password_length: NaN,
        get_password_length: function() {
            this.password_length = get_password_length();
        },

        lowercase: false,
        include_lowercase: function(){
            this.lowercase = confirm("Do you want your password to include lowercase letters?")
            this.at_least_one_char_type = this.at_least_one_char_type || this.lowercase;
        },

        numeric: false,
        include_numeric: function(){
            this.numeric = confirm("Do you want your password to include numeric numbers?")
            this.at_least_one_char_type = this.at_least_one_char_type || this.numeric;
        },


        special: false,
        include_special: function(){
            this.special = confirm("Do you want your password to include special characters");
            this.at_least_one_char_type = this.at_least_one_char_type || this.special;
        },

        uppercase: false,
        include_uppercase: function(){
            this.uppercase = confirm("Do you want your password to include uppercase letters")
            this.at_least_one_char_type = this.at_least_one_char_type || this.uppercase;
        },

        at_least_one_char_type: false,

        reset_password: function(){
            this.password = NaN;
            this.special = false;
            this.numeric = false
            this.lowercase = false;
            this.uppercase = false;
            this.at_least_one_char_type = false;
        }
    }

    function write_password_stats(){
        console.log("password_length: " + password.password_length);
        console.log("include special: " + password.special);
        console.log("include numeric: " + password.numeric);
        console.log("include lowercase: " + password.lowercase);
        console.log("include uppercase: " + password.uppercase);
        console.log("at least one char type: " + password.at_least_one_char_type);
        console.log("password: " + password.new_password);
        console.log("----------------------------------------");
    }

    function generate_password() {
        // reset password
        password.reset_password();

        // prompt for length between 8 and 128 char
        write_password_stats();

        valid_password_length = false;
        var i = 0
        while(valid_password_length === false & i < 3){
            password.get_password_length();
            valid_password_length = validate_password_length(password.password_length);
            write_password_stats();
            i = i + 1;
            if (i == 3){
                alert("You have not set a correct password length in 3 attempts.  Please try again later.");
                return;
            };
        };

        // prompt for character types (special, numeric, lowercase, uppercase)
        var j = 0
        while(password.at_least_one_char_type === false){
            set_special_char();
            // validate at least one character type is selected
            if (password.at_least_one_char_type === false){
                if (j < 3){
                    alert("Please set at least one char type!");
                } else {
                    alert("You have not selected at least one char type in three attempts.  Please try again later.");
                    return;
                }
            } else{
                break
            };
            j = j + 1;
        };


        // generate password and put in password box
        password.set_password();
        write_password_stats();

        document.getElementById("generated-password").innerText = password.new_password
    };




    function validate_password_length(the_password_length){
        if (the_password_length >= 8 & the_password_length <= 128){
            return true
        } else if (the_password_length === NaN){
            let msg = "Please enter a value between 8 and 128";
            alert(msg);
            console.log(msg);
            return false
        } else {
            let msg = "Please enter a value between 8 and 128";
            alert(msg);
            console.log(msg);
            return false
        }
    }

    // prompt for character types (special, numeric, lowercase, uppercase)
    function set_special_char(){
        password.include_special();
        write_password_stats();
        password.include_numeric();
        write_password_stats();
        password.include_lowercase();
        write_password_stats();
        password.include_uppercase();
        write_password_stats();
    }

    function set_password(pw){


        return true
    }
    // functions
    function get_password_length(){
        // prompt for length between 8 and 128 char
        let password_length = prompt("Enter length of Password", "Enter number between 8 and 128")
        password_length = parseInt(password_length)
        console.log("password length: " + password_length)
        return password_length
    }