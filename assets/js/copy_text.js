    // copy password to clipboard

    // https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard
    function myFunction() {
        // get text from generated-password
        var copy_text = document.getElementById("generated-password");
        console.log(copy_text);
        var the_password_to_copy = copy_text.innerText
        console.log(the_password_to_copy);
        if (the_password_to_copy === ""){
            alert("Please click 'Generate Password' button first.")
            return
        }
        navigator.clipboard.writeText(the_password_to_copy).then(function() {
          /* clipboard successfully set */
          console.log("copied to clipboard: " + the_password_to_copy)
        }, function() {
          /* clipboard write failed */
          console.log("as usual it didn't work...please report the error to kshep425@yahoo.com")
        });
      }