import React from "react"


function Card(props) {
const [isAdded, setIsAdded] = React.useState(true);

const onClickPlus = () => {
  setIsAdded(!isAdded);
}
 
    return (
    <div className="card ">
        <div className="favorite" onClick={props.onClickFavorit}>
            <img src="/img/likeOFF.svg" alt="Like" />
        </div>
        <img width="133" height="112" src={props.imgUrl} alt=''></img>
        <h5>{props.name}</h5>
        <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column ">
                <span>Цена:</span>
                <b>{props.price}</b>
            </div>
              <img className="plus" onClick={onClickPlus} src={isAdded ? "/img/btn-plus.svg" : "/img/btn-plus-check.svg"} alt="btn-puls" />
        </div>
    </div>
    )
}

export default Card;