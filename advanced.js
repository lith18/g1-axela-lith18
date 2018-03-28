(function () {

  var input = document.querySelector("#axela-input") ,
      submit = document.querySelector("#axela-submit"),
      message = document.querySelector("#axela-message"),
      advancedDiv  = document.querySelector("#advanced"),
      errorText = "I don't understand you.",
      dunnoText = "Sorry, My creator was too lazy to program more responses for me",
      picture = null,
      greetings = [" Howdy ", " Sup ", " G’day! ", " Yo! ", " What's up my G "];
      person = prompt("Please enter your name");



  // Add event listeners to text input and submit button below
  input.addEventListener("keypress", checkKey);
  submit.addEventListener("click", processInput);

  // This function checks if the user has pressed "ENTER" on their keyboard.
  function checkKey(event) {
    var keyCode = event.which || event.keyCode;
    if(keyCode == "13") {
      processInput();
    }
  }
  /*
   * processInput()
   * This function does the following (in order):
   * -If the advancedDiv element contains a picture, that picture is
   *  removed from the advancedDiv.
   * -Create a variable "words" that is an array of all words the user typed.
      Do so exactly like this:
      var words = input.value.toLowerCase().trim().split(" ");
   * -Clear the text area.
   * -If the length of words is 1, then the user only entered one word. Check
   *  if that word is a greeting. If so, set the innerHTML of the message
   *  element to "Greetings!". Otherwise, set it to errorText.
   * -If the lenght of words is 2, then the user entered two words. What
      happens next is based on the first word they entered. Create a switch
      statement for the expression words[0], and has the following cases: "who"
      "what" "where" "tell" "show".
   * -Each case simply calls a function with the same name as the case, with
      words[1] passed in as an argument. For example, case "who" calls
      who(words[1]). Each case should break after calling the function.
   * -At the very end of the switch statement we handle what happens if the
      user has not entered a valid first word. Create a "default" case and
      make it set the message element's innerHTML to errorText.
   * -Finally, create one final "else" that takes care of the user entering
      anything other than 1 or 2 words. This will simply set the innerHTML of
      the message element to errorText.
   */
   if (person != null) {
       message.innerHTML = "Hello " + person + "! How are you today?";
       var msg = new SpeechSynthesisUtterance("Hello " + person + "! How are you today?");
       window.speechSynthesis.speak(msg);
   }
   function processInput(){
     if (advancedDiv.contains(picture)){
       advancedDiv.removeChild(picture);
     }
     var words = input.value.toLowerCase().trim().split(" ");
     input.value = '';

     // if (person != null) {
     //     message.innerHTML = "Hello " + person + "! How are you today?";
     // }

     if(words.length == 1 ){
     if (greetings.indexOf(words[0]) > -1){
       message.innerHTML= "Greetings!";
       var msg = new SpeechSynthesisUtterance(Greetings);
       window.speechSynthesis.speak(msg);
   }else {
     message.innerHTML = errorText;
     var msg = new SpeechSynthesisUtterance(errorText);
     window.speechSynthesis.speak(msg);
   }
 }else if ( words.length == 2 ){
   switch (words[0]) {
    case "who":
     who(words[1]);
     break;
    case "what":
     what(words[1]);
     break;
    case "where":
     where(words[1]);
     break;
    case "tell":
     tell(words[1]);
     break;
    case "show":
      show(words[1]);
      break;
     default:
     message.innerHTML = errorText;
     var msg = new SpeechSynthesisUtterance(errorText);
     window.speechSynthesis.speak(msg);
   }
 }else {
   message.innerHTML = errorText;
   var msg = new SpeechSynthesisUtterance(errorText);
   window.speechSynthesis.speak(msg);

 }
}


  /*
   * who(word)
   * This function sets the innerHTML of the message element to specific text,
     based on what the "word" is. In this case the word is the second word the
     user entered (e.g., "who you" results in "I am Axela, of course").
   * To do so, create a switch statement that handles the various valid
     second words the user could have entered (e.g., "you", "president", "me").
   * After setting the innerHTML of the message element to whatever text you
     want, don't forget to break.
   * Also don't forget to add a final default case, which handles the user
     entering an invalid second word. This sets the message's innerHTML to
     dunnoText, NOT errorText (since it's not an error per se, Axela just
     doesn't know what they're referring to.)
   */
function who(word){
  switch (word) {
    case 'you':
     message.innerHTML = 'I’m a part of your past that could complete your tomorrow.';
     var msg = new SpeechSynthesisUtterance('I’m a part of your past that could complete your tomorrow.');
     window.speechSynthesis.speak(msg);

      break;
    case 'me':
     message.innerHTML = 'You are a ...';
     var msg = new SpeechSynthesisUtterance('You are a ...;');
     window.speechSynthesis.speak(msg);
      break;
    case 'cool':
    message.innerHTML = 'anything but you';
    var msg = new SpeechSynthesisUtterance('anything but you');
    window.speechSynthesis.speak(msg);
      break;
    default:
    message.innerHTML = dunnoText;
    var msg = new SpeechSynthesisUtterance(dunnoText);
    window.speechSynthesis.speak(msg);
  }
}
function what(word) {
  switch (word) {
    case 'life':
     message.innerHTML = " We're here to make the Earth better for the people after us. To show equality. To love everyone, no matter what. To do the best we can and be the best we can be until maybe one day this world will be as close as it can be to perfect.";
     var msg = new SpeechSynthesisUtterance(" We're here to make the Earth better for the people after us. To show equality. To love everyone, no matter what. To do the best we can and be the best we can be until maybe one day this world will be as close as it can be to perfect.");
     window.speechSynthesis.speak(msg);
      break;
    case 'love':
     message.innerHTML = "Baby don't hurt me";
     var msg = new SpeechSynthesisUtterance(" Baby don't hurt me");
     window.speechSynthesis.speak(msg);
      break;
    case 'dream':
    message.innerHTML = "It's your mind making fantasies that will never come true";
    var msg = new SpeechSynthesisUtterance("It's your mind making fantasies that will never come true");
    window.speechSynthesis.speak(msg);

      break;
    default:
    message.innerHTML = dunnoText;
    var msg = new SpeechSynthesisUtterance(dunnoText);
    window.speechSynthesis.speak(msg);
  }
}
function where(word) {
  switch (word) {
    case 'me':
     message.innerHTML = "Around the corner up....";
     var msg = new SpeechSynthesisUtterance("Around the corner up....");
     window.speechSynthesis.speak(msg);
      break;
    case 'you':
     message.innerHTML = "Trapped inside a box";
     var msg = new SpeechSynthesisUtterance("Trapped inside a box");
     window.speechSynthesis.speak(msg);

      break;
    case 'food':
    message.innerHTML = "I ate it all";
    var msg = new SpeechSynthesisUtterance("I ate it all");
    window.speechSynthesis.speak(msg);

      break;
    default:
    message.innerHTML = dunnoText;
    var msg = new SpeechSynthesisUtterance(dunnoText);
    window.speechSynthesis.speak(msg);
  }
}
  function tell(word) {
    switch (word) {
      case 'joke':
       message.innerHTML = "I invited my boyfriend to go to the gym with me, but he stood me up. I guess the two of us aren't going to work out.";
       var msg = new SpeechSynthesisUtterance("I invited my boyfriend to go to the gym with me, but he stood me up. I guess the two of us aren't going to work out.");
       window.speechSynthesis.speak(msg);
        break;
      case 'poem':
       message.innerHTML = "The rose is a rose, and was always a rose. But the theory now goes That the apple’s a rose, And the pear is, and so’s The plum, I suppose. The dear only knows  What will next prove a rose.  You, of course, are a rose –But were always a rose.";
       var msg = new SpeechSynthesisUtterance("The rose is a rose, and was always a rose. But the theory now goes That the apple’s a rose, And the pear is, and so’s The plum, I suppose. The dear only knows  What will next prove a rose.  You, of course, are a rose –But were always a rose.");
       window.speechSynthesis.speak(msg);

        break;
      case 'quote':
      message.innerHTML = "We are just an advanced breed of monkeys on a minor planet of a very average star. But we can understand the Universe. That makes us something very special. - Stephen Hawking";
      var msg = new SpeechSynthesisUtterance("We are just an advanced breed of monkeys on a minor planet of a very average star. But we can understand the Universe. That makes us something very special. - Stephen Hawking");
      window.speechSynthesis.speak(msg);
        break;
      default:
      message.innerHTML = dunnoText;
      var msg = new SpeechSynthesisUtterance(dunnoText);
      window.speechSynthesis.speak(msg);
    }
    }
    function show(word) {
      switch (word) {
        case 'dog':
         picture = document.createElement('img');
         picture.src = "img/dog.png";
         advancedDiv.appendChild(picture);
         var msg = new SpeechSynthesisUtterance("woof");
         window.speechSynthesis.speak(msg);
         break;
         case 'president':
         picture = document.createElement('img');
         picture.src = "img/pres.gif";
         advancedDiv.appendChild(picture);
         var msg = new SpeechSynthesisUtterance("Bernie for 2020");
         window.speechSynthesis.speak(msg);
         break;
         default:
         message.innerHTML = dunnoText;
         var msg = new SpeechSynthesisUtterance(dunnoText);
         window.speechSynthesis.speak(msg);
      }
    }


})();
