import React from "react";
import Heder from "./components/Header/Heder";
import Preview from "./components/Preview/Preview";
import Cards from "./components/Cards/Cards";
import api from "./utils/Api";
import Footer from "./components/Footer/Footer";
import StickyFilter from "./components/StuckyFilter/StickyFilter";

function App() {

  const [data, setData] = React.useState([])

  React.useEffect(() => {
    Promise.resolve((api.getInitialCards())
      .then((cards) => {
        setData(cards.articles)
      }))
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return (
    <div className="App">
      <Heder />
      <Preview />
      <StickyFilter />
      <Cards data={data} />
      <Footer />
    </div>
  );
}

export default App;
