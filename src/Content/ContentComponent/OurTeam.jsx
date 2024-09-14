import brush from '../../img/brush.png';
import one from '../../img/human/Ellipse 30.png';
import two from '../../img/human/Ellipse 31.jpg';
import three from '../../img/human/Ellipse 32.jpg'
export default function OurTeam() {
    return (
        <div className='OurTeam'>
            <div className='leftOurTeam'>
                <img src={brush} />
            </div>
            <div className='rigthOurTeam'>
                <h1>
                    Наша команда
                </h1>
                <div className='WrapperP'>
                    <p>
                        Значимость этих проблем настолько очевидна, что базовый вектор развития позволяет оценить значение экспериментов, поражающих по своей масштабности и грандиозности. Мы вынуждены отталкиваться от того, что консультация с широким активом.
                    </p>
                </div>

                <div className='wrapperImage'>
                    <img src={one} />
                    <img src={two} />
                    <img src={three} />
                </div>
            </div>
        </div>
    )
}