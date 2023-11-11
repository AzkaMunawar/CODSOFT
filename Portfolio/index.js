
 /*To Toggle Mobile Menu*/
const showHideMenu =()=>{
   
  $("#ToggleMenu").slideToggle();

}


/*Back To the Top icon show on scroll*/

if ($(window).width() >= 767) {

window.onscroll = function () {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("myBtn").style.display = "block";
    } else {
      document.getElementById("myBtn").style.display = "none";
    }
  }
  
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}

/*Send Email*/
function sendEmail() {
  Email.send({
      SecureToken: "70319e3f-e634-4249-97bc-5c6f4f248bb4",
      To: 'azkamunawar2022@gmail.com',
      From: 'azkamunawar2022@gmail.com',
      Subject: "Message From Portfolio Website",
      Body: `Name: ${document.getElementById("name").value} <br> Email: ${document.getElementById("email").value} <br> Subject: ${document.getElementById("subject").value} <br> Message: ${document.getElementById("message").value} `
  }).then(
      message => alert("Message Sent Successfully!")
  );
}