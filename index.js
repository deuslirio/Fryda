document.getElementById("videoSelection").reset();
document.getElementById('videourl').disabled=true;

  function testFile(){
    var selectedFile = document.getElementById('file').files[0];
    document.getElementById('labelfile').innerHTML=selectedFile.name;
  document.getElementById('videourl').disabled=false;
  }

  function showVideo() {
            var selectedFile = document.getElementById('file').files[0];

            var objectURL = window.URL.createObjectURL(selectedFile);
            window.location.href = "pages/showvd.html?url=" + objectURL;
    }
