// find demo at this url
// https://www.webrtc-experiment.com/RTCMultiConnection/stream-mp3-live.html

// find code at this url
// https://github.com/muaz-khan/RTCMultiConnection/blob/master/demos/stream-mp3-live.html
// https://github.com/muaz-khan/WebRTC-Experiment/issues/222

window.onload = function () {
 var connection = new RTCMultiConnection("haryanvi-radio-kasoot");

  connection.session = {
    audio: true,
    oneway: true
  };

  connection.onstream = function(e) {
    document.getElementById('media-content').appendChild(e.mediaElement);
  };

  // connect to signaling gateway
  connection.connect();

}