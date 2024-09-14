import birdie from '../../img/birdie.png'
export default function MainPage() {
    return (
        <div className="WrapperMainPage">
            <div className="LeftContentPage">
                <img src={birdie} />
            </div>
            <div className='RigthContentPage'>
                <h1>Реплики картин от <span>Ink. House</span></h1>
                <p>Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие произведения, доступные цены.</p>
                <button>
                    Продукция
                </button>
            </div>
        </div>
    )
}