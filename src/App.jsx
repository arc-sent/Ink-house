import React from 'react';
import { Layout } from 'antd';
const { Footer, Content } = Layout;
import HeaderCustom from './Header/Header.jsx';
import ContentCustom from './Content/Content.jsx';
import { Context, ContextPicture } from './Context.jsx';
import CustomFooter from './Footer/Footer.jsx';


const layoutStyle = {
  height: '100vh',
};

function App() {
  return (

    <Layout style={layoutStyle}>
      <Context>
        <HeaderCustom />
        <ContentCustom />
        <CustomFooter />
      </Context>
    </Layout>
  );
}

export default App;

