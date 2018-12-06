$(function() {

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
      link.download = 'letter-to-santa.jpg';
      link.href = dataUrl;
      link.click();
    });
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
    });

  return false;
}
