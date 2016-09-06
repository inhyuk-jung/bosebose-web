$.ajax({
  url: 'http://52.78.112.226:8888/GetStore',
  processData: false,
  type: 'POST',
  contentType: false,
  success: function (data) {
    if (data.data.success) {
      var storeData = data.data.store;
      var storeDataDOM = document.forms["myInfoForm"];
      storeDataDOM.elements["name"].value = storeData.name;
      storeDataDOM.elements["address"].value = storeData.address;
      storeDataDOM.elements["introduction"].value = storeData.introduction;
      storeDataDOM.elements["business_hour"].value = storeData.business_hour;
      storeDataDOM.elements["holiday"].value = storeData.holiday;
      storeDataDOM.elements["phone"].value = storeData.phone;
      //storeDataDOM.elements["s_image"].value = storeData.image;
      $('#hit').value = storeData.hit;
      $('#item_count').value = storeData.item_count;
      $('#like_count').value = storeData.like_count;
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

$('#submitEditMyInfo').click(function(e) {
  var myInfoForm = document.forms["myInfoForm"];
  var myInfoFormData = new FormData(myInfoForm);

  $.ajax({
    url: 'http://52.78.112.226:8888/RegisterStore',
    data: myInfoFormData,
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

