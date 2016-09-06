$('#submitSignUp').click(function(e) {
  var signUpForm = document.forms["signUpForm"];
  var signUpFormData = new FormData(signUpForm);

  $.ajax({
    url: 'http://52.78.112.226:8888/Register',
    data: signUpFormData,
    processData: false,
    type: 'POST',
    contentType: false,
    success: function (data) {
      console.log(data);
       var url = "login.html";
       $(location).attr('href',url);
    },
    error: function(err) {
      console.log(err);
    }
  });
  // var url = "login.html";
  // $(location).attr('href',url);
});

