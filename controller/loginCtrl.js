$('#submitLogin').click(function(e) {
  var loginForm = document.forms["loginForm"];
  var loginFormData = new FormData(loginForm);

  console.log(loginForm);
  console.log(loginFormData);
  $.ajax({
    url: 'http://52.78.112.226:8888/Login',
    data: loginFormData,
    processData: false,
    type: 'POST',
    contentType: false,
    success: function (data) {
      console.log(data.data);
      if (data.data.success) {
         var url = "list.html";
         $(location).attr('href',url);
      }
    },
    error: function(err) {
      console.log(err);
    }
  });
  // var url = "list.html";
  // $(location).attr('href',url);
});
