function generateLetter() {

  // This is the starting story
  var story = "Dear Santa, please bring me two VERB PLURAL_NOUN.";


  var inputValue = $("#plural-noun-1").val();
  story = story.replace("PLURAL_NOUN", inputValue);

  inputValue = $("#verb").val();
  story = story.replace("VERB", inputValue);

  // This writes the story when the user clicks the "Generate MadLib" button"
  $("#result").text(story);
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
}

function dlImage() {
  domtoimage.toJpeg(document.getElementById('result'), { quality: 0.95 })
    .then(function (dataUrl) {
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
