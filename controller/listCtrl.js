$('#editMyInfo').click(function(e) {
      var url = "editInfo.html";
      $(location).attr('href',url);
});
$('#addItem').click(function(e) {
      var url = "upload.html";
      $(location).attr('href',url);
});
$('#logOut').click(function(e) {
      var url = "login.html";
      $(location).attr('href',url);
});
$('.itemImg').click(function(e) {
      console.log(e.currentTarget.id);
      var url = "editItemInfo.html?index=" + e.currentTarget.id;
      $(location).attr('href',url);
});
//TODO 나중에 회원가입으로 넘어감
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