var itemHeights = new Array();

var NewsData = function (_id, _title, _content, _image)
{
    this.ID = _id;
    this.Title = _title;
    this.Content = _content;
    this.Image = _image;
}

var NewsItem = React.createClass({
    componentDidMount: function(){
        itemHeights.push(new Array(
            ReactDOM.findDOMNode(this),
            ReactDOM.findDOMNode(this).offsetHeight)
        );
    },
    render: function(){
        var headerSplitClass = classNames(
            "hasText",
            { "visible": (this.props.data.Content != null) }
        );
        return (
            <div id={this.props.data.ID} className="news-item">
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
        return (
            <div id="news-page">
                { this.props.items.map(function(item, i){
                    return (
                        <NewsItem data={item} key={i} />
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
    news.push(new NewsData(1, "Item 1", "Let's get it started!", null));
    news.push(new NewsData(2, "Item 2", "Let's get it started!", null));
    news.push(new NewsData(3, "Item 3", "My new track Lift Me Up is finally out.. I must admit.. I'm very proud of this one. Thanks for all your support!!", "https://external-syd1-1.xx.fbcdn.net/safe_image.php?d=AQDCuo4QGJ9WyDyW&w=470&h=246&url=http%3A%2F%2Fcdn-uza9x79xqk.s3.amazonaws.com%2Fsites%2F24%2F2016%2F04%2F07184347%2Fbeps2-2.jpg&cfs=1&upscale=1&sx=1&sy=0&sw=1198&sh=627&ext=png2jpg"));
    news.push(new NewsData(4, "Item 4", "My new track Lift Me Up is finally out.. I must admit.. I'm very proud of this one. Thanks for all your support!!", null));
    news.push(new NewsData(5, "Item 5", "Let's get it started!", null));
    news.push(new NewsData(6, "Item 6", "Let's get it started!", null));
    news.push(new NewsData(7, "Item 7", "My new track Lift Me Up is finally out.. I must admit.. I'm very proud of this one. Thanks for all your support!!", null));

    ReactDOM.render(<NewsPage items={news} />, document.getElementById("news-board"));

    var colPositions = new Array(10, 10);

    for(var i = 0; i < itemHeights.length; i++)
    {
        if(colPositions[0] <= colPositions[1]) {
            itemHeights[i][0].style.left = "5%";
            itemHeights[i][0].style.top = colPositions[0];
            colPositions[0] += itemHeights[i][1] + 10;
        }
        else {
            itemHeights[i][0].style.left = "50%";
            itemHeights[i][0].style.top = colPositions[1];
            colPositions[1] += itemHeights[i][1] + 10;
        }
        /*if(i % 2 == 0)
        {
            itemHeights[i][0].style.left = "5%";
            itemHeights[i][0].style.top = colPositions[0];
            colPositions[0] += itemHeights[i][1] + 10;
        }
        else
        {
            if(colPositions[0] < colPositions[1]) {
                itemHeights[i][0].style.left = "5%";
                itemHeights[i][0].style.top = colPositions[0];
                colPositions[0] += itemHeights[i][1] + 10;
            }
            else {
                itemHeights[i][0].style.left = "50%";
                itemHeights[i][0].style.top = colPositions[1];
                colPositions[1] += itemHeights[i][1] + 10;
            }

            /*itemHeights[i][0].style.top = colPositions[1];
            colPositions[1] += itemHeights[i][1] + 10;
        }*/
    }
}

SampleNews();
