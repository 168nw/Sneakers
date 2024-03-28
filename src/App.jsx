import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";


const arrSneakers = [
  {name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12900, imgUrl: '/img/sneakers/image 1.jpg'},
  {name: 'Мужские Кроссовки Nike Air Max 270', price: 12999, imgUrl: '/img/sneakers/image 5.jpg'},
  {name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8499, imgUrl: '/img/sneakers/image 3.jpg'},
  {name: 'Кроссовки Puma X Aka Boku Future Rider', price: 8999, imgUrl: '/img/sneakers/image 6.jpg'},
]

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1 className="">Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        
        <div className="d-flex">
        {arrSneakers.map((obj) =>(
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
