import { Layout } from 'antd';
const { Footer } = Layout;
import './footer.scss';
import star from '../img/Star 1 (1).svg';
import facebook from '../img/facebook.svg';
import insta from '../img/insta.svg';
import youTube from '../img/you-tube.svg';

export default function CustomFooter() {
    return (
        <Footer className='CustomFooter'>
            <div className='wrapperCustomFooter'>
                <div className='logoAndPhone'>
                    <div className='logo'>
                        <img src={star} />
                        Ink. House
                    </div>
                    <div className='phone'>
                        <a href='tel:+7 (999) 543-54-54'>+7 (999) 543-54-54</a>
                        <p>Мастерская</p>
                    </div>

                </div>
                <div className='wrappGapAndIcon'>
                    <div className='gapWrapper'>
                        <div className='gap'>
                            <h1>Репродукции</h1>
                            <a href='#'>Франция</a>
                            <a href='#'>Германия</a>
                            <a href='#'>Англия</a>
                        </div>
                        <div className='gap'>
                            <h1>Новинки</h1>
                            <a href='#'>2021</a>
                            <a href='#'>2020</a>
                        </div>
                        <div className='gap'>
                            <h1>О нас</h1>
                            <a href='#'>Художники</a>
                            <a href='#'>Менеджеры</a>
                        </div>
                    </div>

                    <div className='IconsWrapper'>
                        <div className='icons'>
                            <img src={facebook} />
                            <img src={insta} />
                            <img src={youTube} />
                        </div>
                        <div className='textWrapper'>
                            <p>Ink. House ®</p>
                            <p>All rights reserved</p>
                        </div>
                    </div>
                </div>

            </div>
        </Footer>
    )
}