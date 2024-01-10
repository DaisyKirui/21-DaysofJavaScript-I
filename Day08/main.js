$(document).ready(function() {
    $('button').click(function(event) {
      event.preventDefault(); // Prevents the form from submitting
      
      let word = $('#palindrome-input').val();
      let isPalindrome = palindrome(word);
      
      if (isPalindrome) {
        $('#answer text').text("'" + word + "' is a palindrome!");
      } else {
        $('#answer text').text("'" + word + "' is not a palindrome.");
      }
    });
  });
  
  function palindrome(str) {
    let originalString = /[\W_]/g;
    let newString = str.toLowerCase().replace(originalString, '');
    let reverseStr = newString.split('').reverse().join(''); 
    return reverseStr === newString;
  }
