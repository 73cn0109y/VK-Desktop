var MessageData = function(_sender, _online, _message, _time, _unreadCount) {
    this.Sender = _sender;
    this.Online = _online;
    this.Message = _message;
    this.Time = _time;
    this.UnreadCount = _unreadCount;
}

var messages = [
    new MessageData("Franklin", true, "What are you up to later?", "2016-04-12T10:00:37", 1),
    new MessageData("Harry", false, "Who the hell is Harry!?", "2016-04-11T18:02:46", 1),
    new MessageData("Eric", false, "This design looks awesome!", "2016-04-01T12:05:08", 0),
    new MessageData("Admin", true, "Welcome to the alpha test.", "2016-03-20T00:00:01", 0),
    new MessageData("Franklin", false, "What are you up to later?", "2016-01-01T10:00:37", 1),
    new MessageData("Harry", true, "Who the hell is Harry!?", "2015-09-08T18:02:46", 0),
    new MessageData("Eric", false, "This design looks awesome!", "2016-02-01T12:05:08", 6),
    new MessageData("Admin", true, "Welcome to the alpha test.", "1970-01-01T00:00:01", 0)
];

$(document).ready(function(){
    GenerateMessages(messages, "MessengerContainer");
});
