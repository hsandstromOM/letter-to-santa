$(function() {
  $("#btnSave").click(function() {
    html2canvas($("#widget"), {
      onrendered: function(canvas) {
        Canvas2Image.saveAsPNG(canvas);
      }
    });
  });

  $('#save').click(function() {
     html2canvas($('#story')[0], {
       scale: 1.5
     }).then(function(canvas) {
      var g = document.write('<img style="width:100%; height:auto;" src="' + canvas.toDataURL() + '" />');
      var a = document.createElement('a');
       document.body.appendChild(a);
       a.href = canvas.toDataURL("image/png");
       a.download = 'letter-to-santa.png';
       // a.click();
     });
   });

  function saveAs(uri, filename) {
    var link = document.createElement('a');
    if (typeof link.download === 'string') {
      link.href = uri;
      link.download = filename;

      //Firefox requires the link to be in the body
      document.body.appendChild(link);

      //simulate click
      link.click();

      //remove the link when done
      document.body.removeChild(link);
    } else {
      window.open(uri);
    }
  }
});
