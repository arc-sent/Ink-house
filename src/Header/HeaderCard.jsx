import { IoIosRemoveCircle } from "react-icons/io";


export default function HeaderCard({ item , setPictures , index }) {
    function handleClick(){
        setPictures(prevs => prevs.filter(prev => prev.id !== item.id));
    }
    return (
        <div className="headerCard">
            <img src={item.image} />
            <div className="infoHeaderCard">
                <h1>{item.title}</h1>
                <p className="artistCard">{item.artist}</p>
                <p className="priceCard">
                    {Math.floor(item.price / 1000)} {String(item.price % 1000).padStart(3, '0').slice(0, 3)} руб
                </p>
            </div>
            <IoIosRemoveCircle className="close" onClick={handleClick}/>
        </div>
    )
}