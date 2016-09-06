$.ajax({
      url: 'http://52.78.112.226:8888/GetItems',
      processData: false,
      type: 'POST',
      contentType: false,
      success: function (data) {
            if (data.data.success) {
                  console.log(data);
            } else {
                  console.log("실패");
                  console.log(data);
            }
      },
      error: function(err) {
            console.log(err);
      }
});

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