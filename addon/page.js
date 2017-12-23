var videos;
// Force NodeList into normal List.
videos = [].slice.call(document.querySelectorAll('video'));

var iFrames;
iFrames = [].slice.call(document.querySelectorAll('iframe'));

iFrames.forEach(function (f) {
    var v =  [].slice.call(f.contentDocument.querySelectorAll('video'));
    videos = videos.concat(v);
});

var sources = [];

for (var i = 0; i < videos.length; i++) {
	sources.push(videos[i].src);
}

browser.runtime.sendMessage({"sources": sources});

console.log("Hello from cs");