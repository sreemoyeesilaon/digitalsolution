
     function validate() {

        
      if( document.contactForm.name.value == "" ) {
         alert( "Please provide your name!" );
         document.contactForm.name.focus() ;
         return false;
      }

      var emailID = document.contactForm.email.value;
        atpos = emailID.indexOf("@");
        dotpos = emailID.lastIndexOf(".");
   
      if (atpos < 1 || ( dotpos - atpos < 2 )) {
        alert("Please enter correct email ID")
        document.contactForm.email.focus() ;
        return false;
      }
    

      if( document.contactForm.subject.value == "" ) {
        alert( "Please provide your subject!" );
        document.contactForm.subject.focus() ;
        return false;
     }

     if( document.contactForm.message.value == "" ) {
        alert( "Please provide your message!" );
        document.contactForm.message.focus() ;
        return false;
     }
      
      
    }



    function validateEmail() {
      var emailID = document.newsletter.email.value;
        atpos = emailID.indexOf("@");
        dotpos = emailID.lastIndexOf(".");
   
      if (atpos < 1 || ( dotpos - atpos < 2 )) {
        alert("Please enter correct email ID")
        document.contactForm.email.focus() ;
        return false;
      }
    }