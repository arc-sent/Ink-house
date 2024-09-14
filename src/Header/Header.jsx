import React, { useContext, useEffect, useState } from 'react';
import {
    Layout,
    Button,
    Modal,
} from 'antd';
import './header.scss'
import logo from '../img/Ink.House.svg';
import basket from '../img/basket.svg';
import { ContextPicture } from '../Context';
import HeaderCard from './HeaderCard';

const { Header } = Layout;

export default function HeaderCustom() {
    const modalStyles = {
        header: {
            backgroundColor: '#E1EDE6',
        },
        body: {
            backgroundColor: '#E1EDE6',
        },
        footer: {
            backgroundColor: '#E1EDE6',
        },
        content: {
            backgroundColor: '#E1EDE6',
        },
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const { pictures, setPictures } = useContext(ContextPicture);
    const sum = pictures.reduce((sum, current) => sum + current.price, 0);
    const [showLeftContent, setShowLeftContent] = useState(true);
    const [burger, setBurger] = useState(false);

    const handleScroll = () => {
        if (window.scrollY === 0) {
            setShowLeftContent(true);
        } else {
            setShowLeftContent(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <Header className={`header ${showLeftContent ? '' : 'hide'} ${!showLeftContent && burger ? 'active' : ''} ${showLeftContent && burger ? 'hideActive' : ''}`}>
            <div className='wrapperHeaderContent'>

                <div className={`leftContentHeader ${showLeftContent ? '' : 'hide'}`}>
                    <img src={logo} alt="Logo" className="logo" />
                    <p>Ink. House</p>
                </div>

                <div className={burger ? 'rigthContentHeader active' : showLeftContent ? 'rigthContentHeader hide' : 'rigthContentHeader'}>
                    <div className={burger ? 'burger active' : 'burger'} onClick={() => setBurger(!burger)}>
                        <span></span>
                    </div>
                    <div className={burger ? 'nav active' : 'nav'}>
                        <a href='#'>Репродукции</a>
                        <a href='#'>Новинки</a>
                        <a href='#'>О нас</a>
                    </div>
                    <img src={basket} onClick={showModal} className={burger ? 'active' : ''} />
                </div>

            </div>

            <Modal
                title="Корзина"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                centered
                styles={modalStyles}
                className='Modal'
                okText='Купить'
                cancelButtonProps={{ style: { display: 'none' } }}
                footer={(_, { OkBtn, CancelBtn }) => (
                    <div className="footer">
                        <div className='priceFooter'>
                            Итоговая цена: <span>{Math.floor(sum / 1000)} {String(sum % 1000).padStart(3, '0').slice(0, 3)} руб</span>
                        </div>
                        <div>
                            <Button type="primary" onClick={handleOk} className='custom-ok-button'>Купить</Button>
                        </div>
                    </div>
                )}
            >
                <div className='wrapperInModal'>
                    {pictures.length > 0 ?
                        <div>
                            {pictures.map((item, index) => {
                                return <HeaderCard item={item} key={index} setPictures={setPictures} />
                            })}
                        </div>
                        :
                        <div>
                            Ваша корзина пустая!
                        </div>}
                </div>

            </Modal>
        </Header>
    )
}