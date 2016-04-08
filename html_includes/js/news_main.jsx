var NewsData = function (_id, _title, _content, _image)
{
    this.ID = _id;
    this.Title = _title;
    this.Content = _content;
    this.Image = _image;
}

var NewsItem = React.createClass({
    render: function(){
        var id = "news-item-" + this.props.id;
        return (
            <div id={id}>
                {this.props.title}
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
                        <NewsItem id={item.ID} title={item.Title} key={i} />
                    );
                })}
            </div>
        );
    }
});

/*function GenerateNewsItem(data, targetID)
{
    ReactDOM.render(
        <NewsItem id={data.ID} title={data.Title} />,
        document.getElementById(targetID)
    );
}*/

function SampleNews()
{
    var news = new Array();
    news.push(new NewsData(0, "Test 1", "This is a sample", null));
    news.push(new NewsData(1, "Test 2", "This is a sample", null));
    news.push(new NewsData(2, "Test 3", "This is a sample", null));
    news.push(new NewsData(3, "Test 4", "This is a sample", null));

    //GenerateNewsItem(news, "news-board");
    ReactDOM.render(<NewsPage items={news} />, document.getElementById("news-board"));
}

SampleNews();
