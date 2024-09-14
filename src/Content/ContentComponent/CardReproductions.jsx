import { useState , useEffect } from "react";

export default function CardReproductions({ item, setPictures , pictures }) {
    const [active, setActive] = useState(false);

    useEffect(() => {
        const isActive = pictures.some(picture => picture.id === item.id);
        setActive(isActive);
    }, [pictures, item.id]);

    function handleClick() {
        setActive(true)
        setPictures(prev => [...prev, item]);
    };
    return (
        <div className="card">
            <img src={item.image} />
            <p className="artist">{item.artist}</p>
            <h1>{item.title}</h1>
            <p className="product">{item.product}</p>
            <p className="price">
                {Math.floor(item.price / 1000)} {String(item.price % 1000).padStart(3, '0').slice(0, 3)} руб
            </p>
            <button className={active ? 'active' : ''}
                disabled={active}
                onClick={handleClick}>
                {active ? 'Добавлено' : 'В корзину'}
            </button>
        </div>
    )
}