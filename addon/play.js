function playVideo() {
	console.log("Hello World!");
	browser.tabs.executeScript({file: "page.js"});
}

function runInVLC(url) {
	console.log("HERE");
	
	var exeFile = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsILocalFile);

	console.log("HERE 2 ");
	
	exeFile.initWithPath("C:\\Program Files\\VideoLAN\\VLC\\vlc.exe");
	
	if(exeFile.exists()){
		var process = Components.classes["@mozilla.org/process/util;1"].createInstance(Component.interfaces.nsIProcess);  
		process.init(exeFile);
		process.run(false, [url], 1);  // launch the executable with another file as parameter.
}
}

function notify(message) {
	var sources = message.sources;
	console.log(sources.length);
	if (sources.length == 1) {
		runInVLC(sources[0]);
	}
}

browser.runtime.onMessage.addListener(notify);

browser.browserAction.onClicked.addListener(playVideo);

