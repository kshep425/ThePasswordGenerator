    // copy password to clipboard
    function myFunction(){
        /* Get the text field */
        var copyText = document.getElementById("generated-password");

        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /*For mobile devices*/

        /* Copy the text inside the text field */
        document.execCommand("copy");

        /* Alert the copied text */
        alert("Copied the text: " + copyText.value);
    }

    // functions
    function get_password_length(){
        // prompt for length between 8 and 128 char
        let password_length = prompt("Enter length of Password", "Enter number between 8 and 128")
        password_length = parseInt(password_length)
        console.log("password length: " + password_length)
        return password_length
    }