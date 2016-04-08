var TopBarTabButton = React.createClass({
    getInitialState: function() {
        return {isSelected: false};
    },
    onClicked: function() {
        this.setState({isSelected: true});
        this.props.callbackParent(this.props.name);
    },
    render: function() {
        var selectorClassName = classNames(
            "topbar-tab-selector",
            { "selected": (this.props.selected == this.props.name) }
        );
        return (
            <div className="topbar-tab" onClick={this.onClicked}>
                {this.props.name}
                <div className={selectorClassName}/>
            </div>
        );
    }
});

var TabBar = React.createClass({
    getInitialState: function() {
        return { selected: this.props.items[0] }
    },
    handleClick: function(e) {
        this.setState({selected: e});
    },
    render: function() {
        var self = this;
        return (
            <div>
                { this.props.items.map(function(item, i){
                    return (
                        <TopBarTabButton name={item} key={i} selected={self.state.selected} callbackParent={self.handleClick} />
                    );
                })}
            </div>
        );
    }
});

if(window.tabs != null)
    ReactDOM.render(<TabBar items={window.tabs} />, document.getElementById('topbar'));
