


const email= $('#email')


$('button').click(function (){
  $(".error-message").remove();
  $('input').removeClass('invalid')                                   // hides error message after sucesful button click
  var hasError= false;
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;               // /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var emailBlockReg= /^([\w-\.]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)([\w-]+\.)+[\w-]{2,4})?$/;
   if (email.val() == '') {                                                                // checks that input field is not empty
     $('button').after('<p class="error-message">Please enter your email adress</p>')
     $('input').addClass('invalid')
     hasError= true;
   }
   else if (!emailReg.test(email.val())) {                                                // validates email adress
     $('button').after('<p class="error-message">Please provide a valid email</p>')
     $('input').addClass('invalid')
     hasError= true;
   }

// If we wanted to exclude specific emails, which one can be specified inside emailBlockReg (?!someemail.com)

   // else if (!emailBlockReg.test(email.value)) {
   //   $('button').after('<span class="error">We do not accept gmail, yahoo or hotmail.</span>')
   //   hasError= true;
   // }

   if (hasError == true) {
     return false;
   }

 });
