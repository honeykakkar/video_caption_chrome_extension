(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
chrome.browserAction.onClicked.addListener(function (tab) {
    //Fired when User Clicks ICON
    chrome.tabs.executeScript(null, { file: "scripts/content_scripts/inject_menu.js", allFrames: true });
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log(sender.tab ? "from a content script:" + sender.tab.url : "from the extension");
    if (request.application == "video_caption") {
        if (request.type == "OPEN_EDITOR") {
            chrome.tabs.executeScript(null, { file: "scripts/content_scripts/inject_editor.js", allFrames: true });
            sendResponse({ success: true });
        }
    }
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzY3JpcHRzXFxiYWNrZ3JvdW5kXFxiYWNrZ3JvdW5kLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsT0FBTyxhQUFQLENBQXFCLFNBQXJCLENBQStCLFdBQS9CLENBQTJDLFVBQVUsR0FBVixFQUFlOztBQUN0RCxXQUFPLElBQVAsQ0FBWSxhQUFaLENBQTBCLElBQTFCLEVBQWdDLEVBQUUsTUFBTSx3Q0FBUixFQUFrRCxXQUFXLElBQTdELEVBQWhDO0FBQ0gsQ0FGRDs7QUFJQSxPQUFPLE9BQVAsQ0FBZSxTQUFmLENBQXlCLFdBQXpCLENBQ0ksVUFBVSxPQUFWLEVBQW1CLE1BQW5CLEVBQTJCLFlBQTNCLEVBQXlDO0FBQ3JDLFlBQVEsR0FBUixDQUFZLE9BQU8sR0FBUCxHQUFhLDJCQUEyQixPQUFPLEdBQVAsQ0FBVyxHQUFuRCxHQUF5RCxvQkFBckU7QUFDQSxRQUFJLFFBQVEsV0FBUixJQUF1QixlQUEzQixFQUEyQztBQUN2QyxZQUFHLFFBQVEsSUFBUixJQUFnQixhQUFuQixFQUFpQztBQUM3QixtQkFBTyxJQUFQLENBQVksYUFBWixDQUEwQixJQUExQixFQUFnQyxFQUFFLE1BQU0sMENBQVIsRUFBb0QsV0FBVyxJQUEvRCxFQUFoQztBQUNBLHlCQUFhLEVBQUUsU0FBUyxJQUFYLEVBQWI7QUFDSDtBQUNKO0FBQ0osQ0FUTCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjaHJvbWUuYnJvd3NlckFjdGlvbi5vbkNsaWNrZWQuYWRkTGlzdGVuZXIoZnVuY3Rpb24gKHRhYikgeyAvL0ZpcmVkIHdoZW4gVXNlciBDbGlja3MgSUNPTlxyXG4gICAgY2hyb21lLnRhYnMuZXhlY3V0ZVNjcmlwdChudWxsLCB7IGZpbGU6IFwic2NyaXB0cy9jb250ZW50X3NjcmlwdHMvaW5qZWN0X21lbnUuanNcIiwgYWxsRnJhbWVzOiB0cnVlIH0pO1xyXG59KTtcclxuXHJcbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihcclxuICAgIGZ1bmN0aW9uIChyZXF1ZXN0LCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHNlbmRlci50YWIgPyBcImZyb20gYSBjb250ZW50IHNjcmlwdDpcIiArIHNlbmRlci50YWIudXJsIDogXCJmcm9tIHRoZSBleHRlbnNpb25cIik7XHJcbiAgICAgICAgaWYgKHJlcXVlc3QuYXBwbGljYXRpb24gPT0gXCJ2aWRlb19jYXB0aW9uXCIpe1xyXG4gICAgICAgICAgICBpZihyZXF1ZXN0LnR5cGUgPT0gXCJPUEVOX0VESVRPUlwiKXtcclxuICAgICAgICAgICAgICAgIGNocm9tZS50YWJzLmV4ZWN1dGVTY3JpcHQobnVsbCwgeyBmaWxlOiBcInNjcmlwdHMvY29udGVudF9zY3JpcHRzL2luamVjdF9lZGl0b3IuanNcIiwgYWxsRnJhbWVzOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pOyJdfQ==
