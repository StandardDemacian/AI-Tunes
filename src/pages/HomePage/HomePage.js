import ArtistSearch from "../../components/ArtistSearchForm/ArtistSearchForm"
import HighScoreCard from "../../components/HighScoresCard/HighScoresCard"

function HomePage() {
    return (
      <>
        <div className="header">HomePage</div>
        <ArtistSearch/>
        <HighScoreCard/>
      </>
  
    )
  }
  
  export default HomePage