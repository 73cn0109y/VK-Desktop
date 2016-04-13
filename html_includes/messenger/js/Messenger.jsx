var MessageBlock = React.createClass({
    getInitialState: function() {
        return {senderX: 0, senderWidth: 0}
    },
    componentDidMount: function() {
        var senderTitleWidth = 0;
        var self = ReactDOM.findDOMNode(this);
        this.setState({senderX: self.children[1].getBoundingClientRect().left, senderWidth: self.children[1].offsetWidth});
    },
    render: function() {
        var time = FormatTime(this.props.data.Time);
        var dateGroup = "day";
        if (time.indexOf("weeks") > -1) {
            dateGroup = "week";
        } else if (time.indexOf("months") > -1) {
            dateGroup = "month";
        } else if (time.indexOf("year") > -1) {
            dateGroup = "year";
        }
        var isOnline = (this.props.data.Online
            ? "Online"
            : "");
        var style = {
            left: (this.state.senderX + this.state.senderWidth) + "px"
        };
        var unreadStyle = classNames(
            "unreadCount",
            "no-select",
            { "hidden": this.props.data.UnreadCount <= 0 }
        );
        return (
            <div className="MessageBlock" data-dategroup={dateGroup}>
                <CircleImage additionalClass="senderPicture no-select" size={[45, 45]}/>
                <div className="senderName">{this.props.data.Sender}</div>
                <div className="message">{this.props.data.Message}</div>
                <div className="senderOnline" style={style}>{isOnline}</div>
                <div className="recieveDate">{time}</div>
                <div className={unreadStyle}>+{this.props.data.UnreadCount}</div>
            </div>
        );
    }
});

var Messenger = React.createClass({
    render: function() {
        var self = this;
        return (
            <div id="Messenger">
                {this.props.items.map(function(item, i) {
                    return (<MessageBlock data={item} key={i}/>);
                })}
            </div>
        );
    }
});

function GenerateMessages(data, target) {
    ReactDOM.render(
        <Messenger items={data}/>, document.getElementById(target));
    PositionPastEvents(target);
}

function PositionPastEvents(target) {
    var children = $("#" + target).children().first().children();
    var ordered = new Array([], [], [], []);
    var dateGroups = ["This Month", "This Year", "Over a year ago"];

    for (var i = 0; i < children.length; i++) {
        var e = $(children[i]);
        var group = e.attr("data-dategroup");

        switch (group) {
            case "day":
                ordered[0].push(e);
                break;
            case "week":
                ordered[1].push(e);
                break;
            case "month":
                ordered[2].push(e);
                break;
            case "year":
                ordered[3].push(e);
                break;
        }
    }

    var top = 0;
    var spaceInsertCount = 0;

    for (var i = 0; i < ordered[0].length; i++) {
        top += ordered[0][i].outerHeight() + 10;
    }

    CreateMessageSeperator($(children).parent(), dateGroups[0], top);
    spaceInsertCount++;

    for (var i = 1; i < ordered.length; i++) {
        for (var c = 0; c < ordered[i].length; c++) {
            $(ordered[i][c]).css("top", (spaceInsertCount * 30) + "px");
            top += $(ordered[i][c]).outerHeight() + 10;
        }
        if (i != ordered.length - 1) {
            top += CreateMessageSeperator($(children).parent(), dateGroups[i], top + 30);
            spaceInsertCount++;
        }
    }
}

function CreateMessageSeperator(target, group, top) {
    var s = document.createElement("div");
    s.className = "seperator no-select";
    s.innerText = group;
    $(s).css("top", (top + 5) + "px");
    $(target).append(s);
    return $(s).outerHeight();
}

function FormatTime(e) {
    var date = e.substr(0, 10);
    var time = e.substr(11, 8);
    var timeNSec = FormatShortTime(time.substr(0, 5));
    var readable = FormatReadableTime(e);

    return (readable == null
        ? timeNSec
        : readable);
}

function FormatShortTime(e) {
    var hour = e.substr(0, 2);
    var minute = e.substr(3, 2);
    var amPM = "AM";

    if (hour == 0) {
        hour = 12;
    } else if (hour > 12) {
        hour -= 12;
        amPM = "PM";
    }

    return hour + ":" + minute + " " + amPM;
}

function FormatReadableTime(e) {
    var timeDiff = FormatTimeDifference(Date.now() - Date.parse(e));

    if (timeDiff[1] < 24) { // less than 24 hours ago
        return null;
    } else if (timeDiff[0] <= 1) { // yesterday
        return "yesterday";
    } else if (timeDiff[0] <= 7) { // within the last week
        return Math.floor(7 - timeDiff[0]) + " days ago";
    } else if (timeDiff[0] <= 14) { // week before
        return "last week";
    } else if (timeDiff[0] <= 30) { // within the last month
        return Math.floor(timeDiff[0] / 7) + " weeks ago";
    } else if (timeDiff[0] <= 365) { // withn the last year
        return Math.floor(timeDiff[0] / 30) + " months ago";
    } else {
        return "over a year ago";
    }
}

function FormatTimeDifference(e) {
    var dd = 0,
        hh = 0,
        mm = 0,
        ss = 0;

    ss = Math.floor(e / 1000);
    mm = Math.floor(e / 1000 / 60);
    hh = Math.floor(e / 1000 / 60 / 60);
    dd = Math.floor(e / 1000 / 60 / 60 / 24);

    return [dd, hh, mm, ss];
}
