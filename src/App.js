import './App.css';
import requests from './requests'
import Banner from './Banner/Banner'
import Row from './Row/Row'
import Nav from './Nav/Nav'

function App() {
  return (
    <div className="App">
        <Nav />
        <Banner />
        <Row 
            title="NETFLIX ORIGINALS"
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow={true}
        />
        <Row 
            title="TrendingNow"
            fetchUrl={requests.fetchTrending}
        />
        <Row 
            title="Top Rated"
            fetchUrl={requests.fetchTopRated}
        />
        <Row 
            title="Action Movies"
            fetchUrl={requests.fetchActionMovies}
        />
        <Row 
            title="Comedy Movies"
            fetchUrl={requests.fetchComedyMovies}
        />
        <Row 
            title="Horror Movies"
            fetchUrl={requests.fetchHorrorMovies}
        />
        <Row 
            title="Romance Movies"
            fetchUrl={requests.fetchRomanceMovies}
        />
        <Row 
            title="Documentaries"
            fetchUrl={requests.fetchDocumentaries}
        />
    </div>
  );
}

export default App;
