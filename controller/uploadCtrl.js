//Image 미리 보기
function getThumbnailPrivew(html, $target) {
    if (html.files && html.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $target.css('display', '');
            //$target.css('background-image', 'url(\"' + e.target.result + '\")'); // 배경으로 지정시
            $target.html('<img src="' + e.target.result + '" border="0" alt="" style="width: auto; height: 150px;"/>');
        }
        reader.readAsDataURL(html.files[0]);
    }
}

//TODO 필요한 값 추가 완료시 값 가져오기 이후에 이를 가지고 통신함.
$('#submitUpload').click(function(e) {
  var uploadForm = document.forms["uploadForm"];
  var uploadFormData = new FormData(uploadForm);

  $.ajax({
    url: 'http://52.78.112.226:8888/AddItem',
    data: uploadFormData,
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
