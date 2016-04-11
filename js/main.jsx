/*var LikeButton = React.createClass({
    getInitialState: function() {
        return { liked: false };
    },
    handleClick: function(e) {
        this.setState({ liked: !this.state.liked });
    },
    render: function() {
        var text = this.state.liked ? 'like' : 'haven\'t liked';
        return (
            <p  onClick={this.handleClick}>
                You {text} this. Click to toggle.
            </p>
        );
    }
});

ReactDOM.render(<LikeButton />, document.getElementById('body'));*/

/*var ClickButton = React.createClass({
    getInitialState: function(){
        return { clicked: false }
    },
    handleClick: function(e){
        this.setState({ clicked: !this.state.clicked });
    },
    render: function(){
        var text = this.state.clicked ? "clicked" : "not clicked";
        var btnClass = classNames({
            'btn': true,
            'btn-pressed': this.state.clicked
        });
        return(
            <input type="button" onClick={this.handleClick} value={text} className={btnClass} />
        );
    }
});

ReactDOM.render(<ClickButton />, document.getElementById('body'));
*/

function main() {
    window.ContainerTarget = document.getElementById("mainContent");

    CreatePageBar([
        [ "Profile", GenRandom(-10, 10) ],
        [ "Friends", GenRandom(-10, 10) ],
        [ "Photos", GenRandom(-10, 10) ],
        [ "Videos", GenRandom(-10, 10) ],
        [ "Music", GenRandom(-10, 10) ],
        [ "Messages", GenRandom(-10, 10) ],
        [ "Communities", GenRandom(-10, 10) ],
        [ "News", GenRandom(-10, 10), true ],
        [ "Feedback", GenRandom(-10, 10) ],
        [ "Bookmarks", GenRandom(-10, 10) ],
        [ "Settings", GenRandom(-10, 10) ]
    ], 'page-tabs');

    CreateCircleImage(49, 49, "profile-picture");
    CreateTabs([
        [
            "News", "html_includes/news.html"
        ],
        [
            "Update", "html_includes/update.html"
        ],
        ["Comments", "html_includes/comments.html"]
    ], 'topbar');

    //$("#mainContent").load("html_includes/news.html");
    window.ContainerTarget.contentWindow.location.href = "html_includes/news.html";
}

main();

window.onresize = function(e) {
    PositionSizing();
};

function PositionSizing() {
    var hideTarget = document.getElementById("Container-Right");
    var containerBody = document.getElementById("Container-Body");
    var containerLeft = document.getElementById("Container-Left");

    if (document.body.offsetWidth <= 1670) {
        hideTarget.className = "container-right hidden";
        containerBody.className = "container-body extended";
        containerLeft.className = "container-left extended";
    } else {
        hideTarget.className = "container-right";
        containerBody.className = "container-body";
        containerLeft.className = "container-left";
    }

    if (document.body.offsetWidth <= 1250) {
        containerBody.style.left = 250;
    } else {
        containerBody.style.left = "";
    }
}

function GenRandom(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}

setTimeout(PositionSizing(), 10);
