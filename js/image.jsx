var RoundedImage = React.createClass({
    render: function(){
        var style = {
            width: this.props.size[0] + "px",
            height: this.props.size[1] + "px"
        };
        return(
            <ReactBootstrap.Image className={this.props.additionalClass} style={style} src="https://react-bootstrap.github.io/assets/thumbnail.png" rounded />
        );
    }
});

var CircleImage = React.createClass({
    render: function(){
        var style = {
            width: this.props.size[0] + "px",
            height: this.props.size[1] + "px"
        };
        return(
            <ReactBootstrap.Image className={this.props.additionalClass} style={style} src="https://react-bootstrap.github.io/assets/thumbnail.png" circle />
        );
    }
});

var ThumbnailImage = React.createClass({
    render: function(){
        var style = {
            width: this.props.size[0] + "px",
            height: this.props.size[1] + "px"
        };
        return(
            <ReactBootstrap.Image className={this.props.additionalClass} style={style} src="https://react-bootstrap.github.io/assets/thumbnail.png" thumbnail />
        );
    }
});

function CreateCircleImage(width, height, targetID)
{
    ReactDOM.render(<CircleImage size={[width, height]} />, document.getElementById(targetID));
}

function CreateRoundedImage(width, height, targetID){
    ReactDOM.render(<RoundedImage size={[width, height]} />, document.getElementById(targetID));
}

function CreateThumbnailImage(width, height, targetID){
    ReactDOM.render(<ThumbnailImage size={[width, height]} />, document.getElementById(targetID));
}
