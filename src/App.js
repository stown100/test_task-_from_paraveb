import React from "react";
import Heder from "./components/Header/Heder";
import Cards from "./components/Cards/Cards";
import api from "./utils/Api";
import Footer from "./components/Footer/Footer";
import StickyFilter from "./components/StuckyFilter/StickyFilter";
import SimpleSwiper from "./components/SimpleSwiper/SimpleSwiper";

function App() {

  const [data, setData] = React.useState([]);
  const [searchAuthor, setSearchAuthor] = React.useState('');
  const [filterMinDate, setFilterMinDate] = React.useState('');
  const [filterMaxDate, setFilterMaxDate] = React.useState('');

  // Рендер карточек
  React.useEffect(() => {
    Promise.resolve((api.getInitialCards())
      .then((cards) => {
        setData(cards.articles)
      }))
      .catch((err) => {
        console.error(err)
      })
  }, []);

  // Фильтрация массива данных по дате и автору в разных вариантах
  const filtredCardsByAuthorAndMinDateAndMaxDate = data.filter(el => {
    // Фильтрация по автору
    if (searchAuthor.length > 0 && filterMinDate.length === 0 && filterMaxDate.length === 0) {
      return el.author && el.author.toLowerCase().toLowerCase().includes(searchAuthor.toLowerCase())
    }
    // Фильтрация по полям: автор и от
    if (searchAuthor.length > 0 && filterMinDate.length > 0 && filterMaxDate.length === 0) {
      return el.author && el.author.toLowerCase().toLowerCase().includes(searchAuthor.toLowerCase()) && +el.publishedAt.replace(/[^0-9]/g, '') >= +filterMinDate.replace(/[^0-9]/g, '');
    }
    // Фильтрация по полям: автор и до
    if (searchAuthor.length > 0 && filterMaxDate.length > 0 && filterMinDate.length === 0) {
      return el.author && el.author.toLowerCase().toLowerCase().includes(searchAuthor.toLowerCase()) && +el.publishedAt.replace(/[^0-9]/g, '') <= +filterMaxDate.replace(/[^0-9]/g, '');
    }
    // Фильтрация по полям: автор, от и до
    if (searchAuthor.length > 0 && filterMaxDate.length > 0 && filterMinDate.length > 0) {
      return el.author && el.author.toLowerCase().toLowerCase().includes(searchAuthor.toLowerCase()) && +el.publishedAt.replace(/[^0-9]/g, '') >= +filterMinDate.replace(/[^0-9]/g, '') && +el.publishedAt.replace(/[^0-9]/g, '') <= +filterMaxDate.replace(/[^0-9]/g, '');
    }
    // Фильтрация по полю от
    if (filterMinDate.length > 0 && filterMaxDate.length === 0 && searchAuthor.length === 0) {
      return +el.publishedAt.replace(/[^0-9]/g, '') >= +filterMinDate.replace(/[^0-9]/g, '');
    }
    // Фильтрация по полю до
    if (filterMinDate.length === 0 && filterMaxDate.length > 0 && searchAuthor.length === 0) {
      return +el.publishedAt.replace(/[^0-9]/g, '') <= +filterMaxDate.replace(/[^0-9]/g, '');
    }
    // Фильтрация по полям от и до
    if (filterMinDate.length > 0 && filterMaxDate.length > 0 && searchAuthor.length === 0) {
      return +el.publishedAt.replace(/[^0-9]/g, '') >= +filterMinDate.replace(/[^0-9]/g, '') && +el.publishedAt.replace(/[^0-9]/g, '') <= +filterMaxDate.replace(/[^0-9]/g, '')
    }
    return el
  })

  const handleChange = (e) => {
    setSearchAuthor(e.target.value);
  }

  const handleChangeFromMinDate = (e) => {
    setFilterMinDate(e.target.value);
  }

  const handleChangeFromMaxDate = (e) => {
    setFilterMaxDate(e.target.value);
  }

  return (
    <div className="App">
      <Heder />
      <SimpleSwiper />
      <StickyFilter handleChange={handleChange} handleChangeFromMinDate={handleChangeFromMinDate}
        handleChangeFromMaxDate={handleChangeFromMaxDate} searchAuthor={searchAuthor}
        filterMinDate={filterMinDate}
        filterMaxDate={filterMaxDate} />
      <Cards filtredCardsByAuthorAndMinDateAndMaxDate={filtredCardsByAuthorAndMinDateAndMaxDate} />
      <Footer />
    </div>
  );
}

export default App;
