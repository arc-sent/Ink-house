import React from 'react';
import { Layout } from 'antd';
import './content.scss';
import MainPage from './ContentComponent/MainPage';
import Reproductions from './ContentComponent/Reproductions';
import NewCollection from './ContentComponent/NewCollection';
import OurTeam from './ContentComponent/OurTeam';

const { Content } = Layout;

export default function ContentCustom() {
    return (
        <Content className='content'>
            <MainPage />
            <Reproductions />
            <div className='wrapperNewCollection'>
                <NewCollection />
            </div>
            <OurTeam />
        </Content>
    )

}