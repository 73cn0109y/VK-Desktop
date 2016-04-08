var NewsData = function (_id, _title, _content, _image)
{
    this.ID = _id;
    this.Title = _title;
    this.Content = _content;
    this.Image = _image;
}

var NewsItem = React.createClass({
    getInitialState: function(){
        return { height: 0 }
    },
    componentDidMount: function(){
        //console.log(ReactDOM.findDOMNode(this).offsetWidth);
        this.setState({ height: -(ReactDOM.findDOMNode(this).offsetHeight) });
    },
    render: function(){
        var style = {
            left: this.props.left,
            top: (this.props.data.ID == 0 ? 0 : this.state.height + 10)
        };
        var headerSplitClass = classNames(
            "hasText",
            { "visible": (this.props.data.Content != null) }
        );
        return (
            <div id={this.props.data.ID} className="news-item" style={style}>
                <div className="header">
                    <div className="user-picture">
                        <CircleImage size={[49, 49]} />
                    </div>
                    <div className="item-title">
                        {this.props.data.Title}
                    </div>
                    <div className="item-timediff">
                        18 minutes ago
                    </div>
                    <div className="item-hide">X</div>
                    <hr className={headerSplitClass} />
                </div>
                <div className="content">
                    {this.props.data.Content}
                    <ReactBootstrap.Image src={this.props.data.Image} className="content-image" />
                </div>
                <div className="feedback">

                </div>
            </div>
        );
    }
});

var NewsPage = React.createClass({
    render: function(){
        var left = "5%";
        return (
            <div id="news-page">
                { this.props.items.map(function(item, i){
                    if(i % 2 == 0 && i != 0){
                        left = "5%";
                    }
                    else if(i != 0){
                        left = "50%";
                    }
                    return (
                        <NewsItem data={item} key={i} left={left} />
                    );
                })}
            </div>
        );
    }
});

function SampleNews()
{
    var news = new Array();
    news.push(new NewsData(0, "Headhunterz shared a link.", "My new track Lift Me Up is finally out.. I must admit.. I'm very proud of this one. Thanks for all your support!!", null));
    news.push(new NewsData(1, "Akon", "Let's get it started!", null));
    news.push(new NewsData(2, "Akon", "Let's get it started!", null));
    news.push(new NewsData(3, "Headhunterz shared a link.", "My new track Lift Me Up is finally out.. I must admit.. I'm very proud of this one. Thanks for all your support!!", "https://external-syd1-1.xx.fbcdn.net/safe_image.php?d=AQDCuo4QGJ9WyDyW&w=470&h=246&url=http%3A%2F%2Fcdn-uza9x79xqk.s3.amazonaws.com%2Fsites%2F24%2F2016%2F04%2F07184347%2Fbeps2-2.jpg&cfs=1&upscale=1&sx=1&sy=0&sw=1198&sh=627&ext=png2jpg"));

    ReactDOM.render(<NewsPage items={news} />, document.getElementById("news-board"));
}

SampleNews();
