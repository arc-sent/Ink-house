import star from '../../img/Star 2.svg'
export default function NewCollection() {
    return (
        <div className="NewCollection">
            <div className='mask'>
                <div className="InfoNewCollection">
                    <div className='TitleCollection'>
                        <img src={star} />
                        Новая коллекция <br /> французских авторов
                    </div>
                    <div className='wrapperDiv'>
                        <p className='topP'>
                            Сложно сказать, почему акционеры крупнейших компаний призывают нас к новым свершениям, которые, в свою очередь, должны быть заблокированы в рамках своих собственных рациональных ограничений.
                        </p>

                        <p className='bottomP'>
                            Принимая во внимание показатели успешности, граница обучения кадров предопределяет высокую востребованность направлений прогрессивного развития.
                        </p>
                    </div>


                    <button>
                        Ознакомиться
                    </button>
                </div>
            </div>

        </div>
    )
}