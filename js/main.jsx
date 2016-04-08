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
