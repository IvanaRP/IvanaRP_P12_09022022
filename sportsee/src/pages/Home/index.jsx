import NavLeft from '../../components/NavigationLeft'

import "../../styles/home.css";

function Home() {
  return (
    <div className="homeWrapper">
      <div className="homeContainer">
      <NavLeft />
        <div className="brandContainer">
          <h1>SportSEE</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
