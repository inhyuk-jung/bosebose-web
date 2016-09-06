$.ajax({
  url: 'http://52.78.112.226:8888/GetStore',
  processData: false,
  type: 'POST',
  contentType: false,
  success: function (data) {
    //if (data.data.success) {
    //  console.log(data);
    //} else {
    //  console.log("실패");
    //  console.log(data);
    //}
  },
  error: function(err) {
    console.log(err);
  }
});



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
      // var url = "login.html";
      // $(location).attr('href',url);
    },
    error: function(err) {
      console.log(err);
    }
  });
  // var url = "login.html";
  // $(location).attr('href',url);
});

$('#submitStoreReg').click(function(e) {
  //회원가입도야 하게 만들어져있는데 수정필요
  var storeRegForm = document.forms["storeRegForm"];
  var storeRegFormData = new FormData(storeRegForm);

  $.ajax({
    url: 'http://52.78.112.226:8888/RegisterStore',
    data: storeRegFormData,
    processData: false,
    type: 'POST',
    contentType: false,
    success: function (data) {
      console.log(data);
      // var url = "login.html";
      // $(location).attr('href',url);
    },
    error: function(err) {
      console.log(err);
    }
  });
  // var url = "login.html";
  // $(location).attr('href',url);
});
