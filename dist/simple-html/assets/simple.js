var allInputs = $( ":input" );
var formChildren = $( "form > *" );
$( "#messages" ).text( "Found " + allInputs.length + " inputs and the form has " +
  formChildren.length + " children." );

$( "form" ).submit(function( event ) {
  event.preventDefault();
});

function generateLetter() {

  var badwords = new Array("fuck", "shit", "ass", "dick", "asshole");

  // if($.inArray(name, badwords) !==-1 || $.inArray(email, badwords) !==-1 || $.inArray(subject, badwords) !==-1 || $.inArray(message, badwords) !==-1) {
  //      alert("Your inputs contain Bad Words, Please Remove Them Before Proceeding");
  //                  return false;
  //    }
  // var check_text = document.getElementById("ONE").value;
  // var error = 0;
  // for (var i = 0; i < bad_words.length; i++) {
  //   var val = bad_words[i];
  //   if ((check_text.toLowerCase()).indexOf(val.toString()) > -1) {
  //     error = error + 1;
  //   }
  // }

var text = $("input:text[id='ONE']").val();

if($.inArray(text, badwords) !==-1 ) {
    $('#myModal').modal('show');
  } else {

    // This is the starting story

    var story = "Dear Santa, Wow has it been a year already? Time flies! How have you been? How are ONE and TWO? I know that LivePD North Pole episode must have been stressful, but I know the courts will find THREE innocent. Santa, I feel you may have received some bad intel on your FOUR last December so I wanted to share a few of my triumphs from this year that I know will make me a shoe-in for your FIVE list. Besides volunteering my time as a SIX, I frequently gave SEVEN to that EIGHT on the corner near my office. Everyday I set a goal to be the best NINE I could be ('A' for effort, amirite?).  I am SO proud that I only TEN'ed twice this year and my heart goes out to folks like [firstName lastName of a celebrity, politcal figure, or OMie]ELEVEN who could not stop TWELVE'ing. I hope my example inspires them to try harder next year! Now that you can see what a good FOUR I've been, I have but one small item on my wishlist: a THIRTEEN. Santa, I feel blessed. I have so much FOURTEEN in my life, but let's face it: 2018 has been a year (#fakeFIFTEEN) and this one little SIXTEEN will bring so much to joy to not only me, but my beloved teammates at SEVENTEEN as well. In the words of DJ Khaled, 'I appreciate you.' More than ever, we need a EIGHTEEN'ing hero like you to deliver NINETEEN all over the world. On December 24th when I get home from the late volunteer shift at the TWENTY, I'll be sure to leave out a plate of your favorite TWENTYONE's. Warmest regards, Your TWENTYTWO, TWENTYTHREE";

    var inputValue = $("#ONE").val();
    story = story.replace("ONE", inputValue);

    inputValue = $("#TWO").val();
    story = story.replace("TWO", inputValue);

    inputValue = $("#THREE").val();
    story = story.replace("THREE", inputValue);

    inputValue = $("#FOUR").val();
    story = story.replace("FOUR", inputValue);

    inputValue = $("#FIVE").val();
    story = story.replace("FIVE", inputValue);

    inputValue = $("#SIX").val();
    story = story.replace("SIX", inputValue);

    inputValue = $("#SEVEN").val();
    story = story.replace("SEVEN", inputValue);

    inputValue = $("#EIGHT").val();
    story = story.replace("EIGHT", inputValue);

    inputValue = $("#NINE").val();
    story = story.replace("NINE", inputValue);

    inputValue = $("#TEN").val();
    story = story.replace("TEN", inputValue);

    inputValue = $("#ELEVEN").val();
    story = story.replace("ELEVEN", inputValue);

    inputValue = $("#TWELVE").val();
    story = story.replace("TWELVE", inputValue);

    inputValue = $("#THIRTEEN").val();
    story = story.replace("THIRTEEN", inputValue);

    inputValue = $("#FOURTEEN").val();
    story = story.replace("FOURTEEN", inputValue);

    inputValue = $("#FIFTEEN").val();
    story = story.replace("FIFTEEN", inputValue);

    inputValue = $("#SIXTEEN").val();
    story = story.replace("SIXTEEN", inputValue);

    inputValue = $("#SEVENTEEN").val();
    story = story.replace("SEVENTEEN", inputValue);

    inputValue = $("#EIGHTEEN").val();
    story = story.replace("EIGHTEEN", inputValue);

    inputValue = $("#NINETEEN").val();
    story = story.replace("NINETEEN", inputValue);

    inputValue = $("#TWENTYONE").val();
    story = story.replace("TWENTYONE", inputValue);

    inputValue = $("#TWENTYTWO").val();
    story = story.replace("TWENTYTWO", inputValue);

    inputValue = $("#TWENTYTHREE").val();
    story = story.replace("TWENTYTHREE", inputValue);


    // This writes the story when the user clicks the "Generate MadLib" button"
    $("#result").text(story);

    // var canvas = document.getElementById('canvas');
    // ctx = canvas.getContext('2d');
    //
    // var DOMURL = window.URL || window.webkitURL || window;
    //
    // var img = new Image();
    // var svg = new Blob([story], {
    //   type: 'image/svg+xml;charset=utf-8'
    // });
    // var url = DOMURL.createObjectURL(svg);
    //
    // img.onload = function() {
    //   ctx.drawImage(img, 0, 0);
    //   DOMURL.revokeObjectURL(url);
    // }
    //
    // img.src = url;

    var node = document.getElementById('result');

    var el = document.getElementById('modal-result');


    domtoimage.toPng(node)
      .then(function(dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        document.body.appendChild(img);
        el.appendChild(img);
      })
      .catch(function(error) {
        console.error('oops, something went wrong!', error);
      });

    $('#exampleModal').modal('show');


  }
}

function dlImage() {
  domtoimage.toJpeg(document.getElementById('result'), {
      quality: 0.95
    })
    .then(function(dataUrl) {
      var link = document.createElement('a');
      link.download = 'letter-to-santa.jpeg';
      link.href = dataUrl;
      link.click();
    });
}

function shareFB() {

  // This is the starting story
  var story = "Dear Santa, please bring me two VERB PLURAL_NOUN.";


  var inputValue = $("#plural-noun-1").val();
  story = story.replace("PLURAL_NOUN", inputValue);

  inputValue = $("#verb").val();
  story = story.replace("VERB", inputValue);

  // This writes the story when the user clicks the "Generate MadLib" button"
  $("#result").text(story);

  var title = 'My Letter To Santa';
  var description = 'Dear Santa, please bring me two ' + $("#verb").val() + " " + $("#plural-noun-1").val();
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
