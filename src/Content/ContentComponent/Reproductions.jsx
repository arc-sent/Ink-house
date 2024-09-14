import { useState , useContext } from 'react'
import { ReproductionsData } from '../../data.js'
import CardReproductions from './CardReproductions.jsx'
import { ContextPicture } from '../../Context.jsx';

export default function Reproductions() {
    const [country, setCountry] = useState('France')
    const { pictures, setPictures } = useContext(ContextPicture);

    return (
        <div className='Reproductions'>
            <div className='ReproductionsNavWrapper'>
                <h1>Репродукции</h1>
                <div className='ReproductionsNav'>
                    <button onClick={() => setCountry('France')} className={country === 'France' ? 'active' : ''}>Франция</button>
                    <button onClick={() => setCountry('Germany')} className={country === 'Germany' ? 'active' : ''}>Германия</button>
                    <button onClick={() => setCountry('England')} className={country === 'England' ? 'active' : ''}>Англия</button>
                </div>
            </div>

            <div className='WrapperReproductions'>
                {ReproductionsData[country].map((reproduction) => {
                    return <CardReproductions key={reproduction.id} item={reproduction} setPictures = {setPictures} pictures = {pictures}/>
                })}
            </div>
        </div>
    )
}
