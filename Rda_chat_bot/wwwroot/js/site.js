// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

function changeBotInputValue(event) {
	var txt = event.target.innerText;
	var input = document.getElementsByClassName("wc-shellinput")[0];
	var lastValue = input.value;
	input.value = txt;
	var event = new CustomEvent('input', { bubbles: true });
	event.simulated = true;
	var tracker = input._valueTracker;
	if (tracker) {
		tracker.setValue(lastValue);
	}
	input.dispatchEvent(event);
	$(".wc-send:first").click();

	$("#exampleQuestionPanel").hide();
	$("#bot-icon-greeting").hide();
}

window.onload = function (e) {
	var array = document.getElementsByClassName("wc-console")
	for (var i = 0; i < array.length; i++) {
		array[i].addEventListener("click", function () {
			removeExampleQuestionPanel();
		})
	}
}

function chatWindowClicked() {
	if (chatIsOpen == false) {
		toggleChatBotWindow();
	}
}


function removeExampleQuestionPanel() {
	$("#exampleQuestionPanel").hide();
	$("#bot-icon-greeting").hide();
}

function exitButtonClicked(event) {
	var chatWindow = $("#bot-window-sliding-div")
	if (chatIsOpen == true) {
		toggleChatBotWindow();
	}
	else {
		var chatWindow = $("#bot-window-container")
		chatWindow.hide();
	}
	event.stopPropagation();
}

var chatIsOpen = true;
function toggleChatBotWindow() {
	var chatWindow = $("#bot-window-container")
	var slidingChatWindow = $("#bot-window-sliding-div")
	var botIcon = $("#bot-icon");

	if (chatIsOpen == true) {
		chatWindow.css("height", 70)
		slidingChatWindow.css("bottom", -500);
		botIcon.css("height", 40);
		botIcon.css("width", 40);
	}
	else {
		chatWindow.css("height", 550)
		slidingChatWindow.css("bottom", 0);
		botIcon.css("height", 60);
		botIcon.css("width", 60);
	}
	chatIsOpen = !chatIsOpen;
}