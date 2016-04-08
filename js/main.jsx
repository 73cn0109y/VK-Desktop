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

ReactDOM.render(<ClickButton />, document.getElementById('body'));*/

var TopBarTabButton = React.createClass({
    getInitialState: function(){
        return { isSelected: false };
    },
    onClicked: function(){
        this.setState({ isSelected: true });
        this.props.callbackParent(this.props.name);
    },
    render: function(){
        var selectorClassName = classNames(
            "topbar-tab-selector",
            { "selected": (this.props.selected == this.props.name) });
        return(
            <div className="topbar-tab" onClick={this.onClicked}>
                {this.props.name}
                <div className={selectorClassName} />
            </div>
        );
    }
});

var TabBar = React.createClass({
    getInitialState: function(){
        return { selected: "News" }
    },
    handleClick: function(e){
        this.setState({ selected: e });
    },
    render: function(){
        return (
            <div>
                <TopBarTabButton name="News" selected={this.state.selected} callbackParent={this.handleClick} />
                <TopBarTabButton name="Update" selected={this.state.selected} callbackParent={this.handleClick} />
                <TopBarTabButton name="Comments" selected={this.state.selected} callbackParent={this.handleClick} />
            </div>
        );
    }
});

ReactDOM.render(<TabBar />, document.getElementById('center-topbar'));
