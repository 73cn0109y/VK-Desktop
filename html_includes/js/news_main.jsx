var itemInfo = new Array();
var preloadImages = [];

var NewsData = function (_id, _title, _content, _image)
{
    this.ID = _id;
    this.Title = _title;
    this.Content = _content;
    this.Image = _image;
}

var NewsItem = React.createClass({
    getInitialState: function(){
        return { imageHeight: 0, itemInfoIndex: 0 };
    },
    componentDidMount: function(){
        if(this.props.data.Image != null) {
            var self = this;
            getImageSize(this.props.data.Image, function(width, height){
                self.setState({ imageHeight: height });
                itemInfo[self.state.itemInfoIndex][1] = ReactDOM.findDOMNode(self).offsetHeight;
                PositionNewsItems();
            });
        }
        itemInfo.push(new Array(
            ReactDOM.findDOMNode(this),
            (this.state.imageHeight == 0 ? ReactDOM.findDOMNode(this).offsetHeight : this.state.imageHeight))
        );
        this.setState({itemInfoIndex: itemInfo.length - 1});
    },
    render: function(){
        var headerSplitClass = classNames(
            "hasText",
            { "visible": (this.props.data.Content != null) }
        );
        var style = {
            "width": (this.props.width == 0 ? "44%" : this.props.width),
        };
        var imgStyle = {
            background: 'url("' + this.props.data.Image + '") no-repeat center center',
            height: this.state.imageHeight,
            backgroundSize: "contain"
        };
        return (
            <div id={this.props.data.ID} className="news-item" style={style}>
                <div className="header">
                    <div className="user-picture no-select">
                        <CircleImage size={[49, 49]} />
                    </div>
                    <div className="item-title">
                        {this.props.data.Title}
                    </div>
                    <div className="item-timediff">
                        18 minutes ago
                    </div>
                    <div className="item-hide no-select">X</div>
                    <hr className={headerSplitClass} />
                </div>
                <div className="content">
                    {this.props.data.Content}
                    <br />
                    <div style={imgStyle}></div>
                </div>
                <div className="feedback">

                </div>
            </div>
        );
    }
});

function getImageSize(imgsrc, callback) {
    var $img = document.createElement("img");
    $img.src = imgsrc;

    var wait = setInterval(function() {
        var w = $img.width,
            h = $img.height;
        if (w && h) {
            clearInterval(wait);
            callback.apply(this, [w, h]);
        }
    }, 30);
}

var NewsPage = React.createClass({
    getInitialState: function(){
        return { width: 0 };
    },
    updateDimensions: function(){
        var target = document.getElementById(this.props.containerID);
        var width = target.offsetWidth;
        width *= 0.95; // minus 5% on each side
        width /= 2;
        width *= 0.925;
        this.setState({ width: width });
    },
    componentWillMount: function(){
        this.updateDimensions();
    },
    componentDidMount: function(){
        window.addEventListener("resize", this.updateDimensions);
    },
    componentWillUnmount: function(){
        window.removeEventListener("resize", this.updateDimensions);
    },
    render: function(){
        var self = this;
        return (
            <div id="news-page">
                { this.props.items.map(function(item, i){
                    return (
                        <NewsItem data={item} key={i} width={self.state.width} />
                    );
                })}
            </div>
        );
    }
});

function SampleNews()
{
    var news = new Array();
    news.push(new NewsData(0, "Item 0", "My new track Lift Me Up is finally out.. I must admit.. I'm very proud of this one. Thanks for all your support!!", null));
    news.push(new NewsData(1, "Item 1", "Let's get it started!", "./imgs/news/001.jpg"));
    news.push(new NewsData(2, "Item 2", "Let's get it started!", null));
    news.push(new NewsData(3, "Item 3", "My new track Lift Me Up is finally out.. I must admit.. I'm very proud of this one. Thanks for all your support!!", "./imgs/news/001.jpg"));
    news.push(new NewsData(4, "Item 4", "My new track Lift Me Up is finally out.. I must admit.. I'm very proud of this one. Thanks for all your support!!", null));
    news.push(new NewsData(5, "Item 5", "Let's get it started!", null));
    news.push(new NewsData(6, "Item 6", "Let's get it started!", null));
    news.push(new NewsData(7, "Item 7", "My new track Lift Me Up is finally out.. I must admit.. I'm very proud of this one. Thanks for all your support!!", null));

    for(var i = 0; i < news.length; i++)
    {
        if(news[i].Image != null)
        {
            var img = new Image();
            img.src = news[i].Image;
            preloadImages.push(img);
        }
        else {
            preloadImages.push(null);
        }
    }

    ReactDOM.render(<NewsPage items={news} containerID="news-board" />, document.getElementById("news-board"));

    PositionNewsItems();
}

function PositionNewsItems()
{
    var colPositions = new Array(10, 10);

    for(var i = 0; i < itemInfo.length; i++)
    {
        if(colPositions[0] <= colPositions[1]) {
            itemInfo[i][0].style.left = "5%";
            itemInfo[i][0].style.top = colPositions[0];
            colPositions[0] += itemInfo[i][1] + 10;
        }
        else {
            itemInfo[i][0].style.left = "50%";
            itemInfo[i][0].style.top = colPositions[1];
            colPositions[1] += itemInfo[i][1] + 10;
        }
    }
}

SampleNews();
CreateNewsTab( [
    [ "Tape", "" ],
    [ "Photos", "" ],
    [ "Videos", "" ],
    [ "Recommendations", "" ],
    [ "Friends", "" ],
    [ "Community", "" ],
    [ "Articles", "" ],
    [ "Like", "" ]
], 'news-tabs');
