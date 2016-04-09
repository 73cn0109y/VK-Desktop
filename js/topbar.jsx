var TopBarTabButton = React.createClass({
    getInitialState: function() {
        return { isSelected: false };
    },
    onClicked: function() {
        this.setState({ isSelected: true });
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

var NewsTabButton = React.createClass({
    getInitialState: function() {
        return { isSelected: false };
    },
    onClicked: function() {
        this.setState({ isSelected: true });
        this.props.callbackParent(this.props.name, this.props.target);
    },
    render: function() {
        var styleclass = classNames(
            "topbar-tab",
            { "selected": (this.props.selected == this.props.name) }
        );
        return (
            <div className={styleclass} onClick={this.onClicked}>
                {this.props.name}
            </div>
        );
    }
});

var TabBar = React.createClass({
    getInitialState: function() {
        return {
            selected: this.props.items[0][0],
            isNewsBar: this.props.isNews != null
        }
    },
    handleClick: function(e, t) {
        this.setState({selected: e});
        if(!this.state.isNewsBar){
            window.ContainerTarget.contentWindow.location.href = t;
        }
    },
    render: function() {
        var self = this;
        var buildNews = (this.props.isNews != null);
        return (
            <div>
                { this.props.items.map(function(item, i){
                    if(!buildNews) {
                        return (
                            <TopBarTabButton name={item[0]} target={item[1]} key={i} selected={self.state.selected} callbackParent={self.handleClick} />
                        );
                    }
                    else {
                        return (
                            <NewsTabButton name={item[0]} target={item[1]} key={i} selected={self.state.selected} callbackParent={self.handleClick} />
                        );
                    }
                })}
            </div>
        );
    }
});

function CreateTabs(e, t)
{
    ReactDOM.render(<TabBar items={e} />, document.getElementById(t));
}

function CreateNewsTab(e, t)
{
    ReactDOM.render(<TabBar items={e} isNews="true" />, document.getElementById(t));
}
