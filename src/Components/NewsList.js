const NewsList = ({articles}) => {
    return ( 
        <div>
            {articles && articles.map((article)=>{
             return <div key={article.link} className="news-container">
                    <img src={article.media} alt="image" className="news-media"/>
                    <p className="news-text">{article.author === null ? `Unknown Author` : article.author} wrote "{article.title}"</p>
                    <button className="news-link"><a href={article.link} target="_blank">Read Here</a></button>
                    </div>;
            })}
        </div>
     );
}
 
export default NewsList;