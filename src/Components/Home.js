import { useState} from "react";
import NewsList from "./NewsList";
const Home = () => {
const [myResult,setResult] = useState([]);
const [title,setTitle] = useState("");
const [isLoading,setLoading] = useState(false);
function newsReady(arg1){
    setResult(arg1);
    setLoading(false);
}
// Set your api key to x-rapidapi-key property so the function would work.
const getNews = () => {
    setLoading(true);
    fetch(`https://free-news.p.rapidapi.com/v1/search?q=${title}&lang=en`, {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "free-news.p.rapidapi.com",
        "x-rapidapi-key": "Your API Key"
    }
})
.then(response => response.json())
.then(response => {
    // manipulate the data here.
    newsReady(response.articles);
})
.catch(err => {
	console.error(err);
});
    }
    return ( 
        <div className="main">
            <header>
                <p>This website is fiction.</p>
                <div>
                    <h3>Contacts for the Developer</h3>
                    <a href="https://www.linkedin.com" className="fa fa-linkedin" target='_blank'></a>
                    <a href="https://github.com" className="fa fa-github" target='_blank'></a>
                </div>
            </header>
            <main>
                <p >Would you like to see some news
                from FreeNews API ? Search below then. Keep in mind that only English language is supported.
                </p>
            </main>
            <footer>
                <div className="search-main">
                    <header className="search-input">
                        <input type="text" placeholder="Keyword" id="home__input" value={title} onChange={(e)=> setTitle(e.target.value)}/>
                        <button onClick={()=>{getNews();
                        setTitle('');
                        }} id="home__search">Search</button>
                    </header>
                    <section className="search-result">
                        {myResult ? <NewsList articles={myResult} /> : <div>If you don't type a word, I can only bring you a bunch of <span className="news-coming">&#128530;&#128530;&#128530;</span> </div>}
                        {isLoading && <h1>Your news are on their way <span className="news-coming">&#9203;</span> </h1>}
                    </section>
                </div>
            </footer>
        </div>
     );
}
 
export default Home;