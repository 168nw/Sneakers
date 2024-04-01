import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import React from "react";




function App() {
const [items, setItems] = React.useState([])

  const[cartOpened, setCartOpened] = React.useState(false)

React.useEffect(() => {
  fetch('https://660a5b500f324a9a2884c26b.mockapi.io/items')
  .then((res) => {
  return res.json();
})
  .then((json) => {
    setItems(json)
  });
}, []);

  return (
    <div className="wrapper clear">
      {cartOpened  && <Drawer onClickCloseCart = {() => setCartOpened(false)} /> }
      <Header onClickCart = {() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1 className="">Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        
        <div className="d-flex flex-wrap">
        {items.map((obj) =>(
          <Card
          name = {obj.name}
          price ={obj.price}
          imgUrl = {obj.imgUrl}
          onClickFavorit = {() => console.log('Товар добавлен в Избранное ')}
          onClickPlus = {() => console.log('Товар добавлен в корзину')}
          />
        ))}
        </div>
      </div>
    </div>
  );
}

export default App;

