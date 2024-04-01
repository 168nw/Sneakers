function Drawer(props) {
    return(
        <div className="overlay">
        <div className="drawer">
          <h2 className=" d-flex justify-between mb-30 ">
            Корзина 
            <div className="btnCart cu-p">
              <img onClick={props.onClickCloseCart} src="\img\btn-delite.svg" alt="btn-dealite" />
            </div>
          </h2>
          <div className="items">
            <div className="cartItem d-flex align-center mb-20">
              <div 
              className="cartItemImg"
              style={{backgroundImage: `url(img/sneakers/image_12.png)`}} >
              </div>
              <div className="mr-20 flex">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <div className="btnCart">
                <img src="\img\btn-delite.svg" alt="btn-dealite" />
              </div>
            </div>
            <div className="cartItem d-flex align-center mb-20">
              <div 
              className="cartItemImg"
              style={{backgroundImage: `url(img/sneakers/image_12.png)`}} >
              </div>
              <div className="mr-20 flex">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <div className="btnCart">
                <img src="\img\btn-delite.svg" alt="btn-dealite" />
              </div>
            </div>
          </div>
          <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>22 000 руб.</b>
                </li>
                <li>
                  <span>Налог 5%</span>
                  <div></div>
                  <b>2 000 руб.</b>
                </li>
              </ul>
              <button className="greenButton">Оформить заказ<img src="/img/arrow.svg" alt="arrow"></img></button>
            </div>
        </div>
      </div>
    )
}

export default Drawer