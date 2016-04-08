var TopBarTabButton = React.createClass({
    getInitialState: function() {
        return {isSelected: false};
    },
    onClicked: function() {
        this.setState({isSelected: true});
        this.props.callbackParent(this.props.name, this.props.target);
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
        return { selected: this.props.items[0][0] }
    },
    handleClick: function(e, t) {
        this.setState({selected: e});
        window.ContainerTarget.contentWindow.location.href = t;
    },
    render: function() {
        var self = this;
        return (
            <div>
                { this.props.items.map(function(item, i){
                    return (
                        <TopBarTabButton name={item[0]} target={item[1]} key={i} selected={self.state.selected} callbackParent={self.handleClick} />
                    );
                })}
            </div>
        );
    }
});

function CreateTabs(e)
{
    ReactDOM.render(<TabBar items={e} />, document.getElementById('topbar'));
}
