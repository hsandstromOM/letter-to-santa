$(function() {

  // var canvas = document.querySelector("canvas");
  //
  //   var ctx = canvas.getContext('2d');
  //
  //   ctx.beginPath();
  //   ctx.arc(75,75,50,0,Math.PI*2,true); // Outer circle
  //   ctx.moveTo(110,75);
  //   ctx.arc(75,75,35,0,Math.PI,false);   // Mouth (clockwise)
  //   ctx.moveTo(65,65);
  //   ctx.arc(60,65,5,0,Math.PI*2,true);  // Left eye
  //   ctx.moveTo(95,65);
  //   ctx.arc(90,65,5,0,Math.PI*2,true);  // Right eye
  //   ctx.stroke();
  //
  //   $("#html2-btn").click(function(e) {
  //       html2canvas(document.querySelector("#content"), {canvas: canvas}).then(function(canvas) {
  //           console.log('Drew on the existing canvas');
  //       });
  //     });


      var ctx = document.getElementById("canvas").getContext("2d");
      var image = document.getElementById("someImage");
      ctx.fillRect(100,100,100,100);
      image.src = canvas.toDataURL("image/png");
      var link = document.getElementById("link");
      link.addEventListener('click', function(){
          // window.open(canvas.toDataURL("image/png"), '_blank');
           var win = window.open();
            win.document.write('<iframe src="' + canvas.toDataURL("image/png")  + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>');
      });

  var d = new Date();
  var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  document.getElementById("date").innerHTML = months[d.getMonth()]+ " " + d.getDate() + ", " + d.getFullYear() ;

  // hide the story from view
  $("#story").hide();

  // ---- event handler ---- //
  $("#btn-click").click(function(e) {

    e.preventDefault()

    // grab the values from the input boxes, then append them to the DOM
    $(".name").empty().append($("input.name").val());
    $(".one").empty().append($("input.one").val());
    $(".two").empty().append($("input.two").val());
    $(".three").empty().append($("input.three").val());
    $(".four").empty().append($("input.four").val());
    $(".five").empty().append($("input.five").val());
    $(".six").empty().append($("input.six").val());
    $(".seven").empty().append($("input.seven").val());
    $(".eight").empty().append($("input.eight").val());
    $(".nine").empty().append($("input.nine").val());
    $(".ten").empty().append($("input.ten").val());
    $(".eleven").empty().append($("input.eleven").val());
    $(".twelve").empty().append($("input.twelve").val());
    $(".thirteen").empty().append($("input.thirteen").val());
    $(".fourteen").empty().append($("input.fourteen").val());
    $(".fifteen").empty().append($("input.fifteen").val());
    $(".sixteen").empty().append($("input.sixteen").val());
    $(".seventeen").empty().append($("input.seventeen").val());
    $(".eighteen").empty().append($("input.eighteen").val());
    $(".nineteen").empty().append($("input.nineteen").val());
    $(".twenty").empty().append($("input.twenty").val());
    $(".twentyone").empty().append($("input.twentyone").val());

    // show the story
    $("#story").show();

      $('#exampleModal').modal('show');

    // empty the form's values
    $(':input').val('');

    // hide the questions
    $("#questions").hide();

  });

  // ---- event handler ---- //
  $("#play-btn").click(function(e) {
    $("#questions").show();
    $("#story").hide();
      $('#exampleModal').modal('hide');
  });

});

function dlImage() {
  domtoimage.toJpeg(document.getElementById('story'), {
      quality: 0.95
    })
    .then(function(dataUrl) {
      var link = document.createElement('a');
      link.download = 'letter-to-santa.jpeg';
      link.href = dataUrl;
      link.click();
    });

//     domtoimage.toJpeg(document.getElementById('story'), {
//      quality: 0.95,
//      filter: node => node.tagName !== 'a'
// })
//     .then(function (dataUrl) {
//         var link = document.createElement('a');
//         link.download = 'letter-to-santa.jpeg';
//         link.href = dataUrl;
//         link.click();
//     });
}

function shareFB() {

  var title = 'My Letter To Santa';
  var description = 'Dear Santa, please bring me two... ';
  var image = 'http://epmgaa.media.clients.ellingtoncms.com/img/croppedphotos/2016/11/21/newsbrief_t580.png?8f1b5874916776826eb17d7e67de7278c987ca33';


  shareOverrideOGMeta(window.location.href,
    title,
    description,
    image);

  return false;
}


function shareOverrideOGMeta(overrideLink, overrideTitle, overrideDescription, overrideImage) {
  FB.ui({
      method: 'share_open_graph',
      action_type: 'og.likes',
      action_properties: JSON.stringify({
        object: {
          'og:url': overrideLink,
          'og:title': overrideTitle,
          'og:description': overrideDescription,
          'og:image': overrideImage
        }
      })
    },
    function(response) {
      // Action after response
    });
}

function shareOriginal() {
  FB.ui({
      method: 'share',
      href: window.location.href
    },
    function(response) {
      // Action after response
      console.log(response);
    });

  return false;
}

function copyLink() {
  var Url = "https://obviouslee.com";
document.execCommand("copy");
  alert(Url + "Copied to clipboard!");
}

// document.addEventListener("DOMContentLoaded", function(event) {
// var canvas = document.querySelector("canvas");
//
//   var ctx = canvas.getContext('2d');
//
//   ctx.beginPath();
//   ctx.arc(75,75,50,0,Math.PI*2,true); // Outer circle
//   ctx.moveTo(110,75);
//   ctx.arc(75,75,35,0,Math.PI,false);   // Mouth (clockwise)
//   ctx.moveTo(65,65);
//   ctx.arc(60,65,5,0,Math.PI*2,true);  // Left eye
//   ctx.moveTo(95,65);
//   ctx.arc(90,65,5,0,Math.PI*2,true);  // Right eye
//   ctx.stroke();
//
//   document.querySelector("button").addEventListener("click", function() {
//   function genImg() {
//       html2canvas(document.querySelector("#content"), {canvas: canvas}).then(function(canvas) {
//           console.log('Drew on the existing canvas');
//       });
//     }
//   }, false);
//   });
  // function genImg() {
  //     html2canvas(document.querySelector("#content"), {canvas: canvas}).then(function(canvas) {
  //         console.log('Drew on the existing canvas');
  //     });
  //   }
