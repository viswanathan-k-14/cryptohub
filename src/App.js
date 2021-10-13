import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import {
  Exchanges,
  Homepage,
  News,
  Cryptocurrencies,
  CryptoDetails,
  Navbar,
} from './components';
import { Layout, Typography, Space } from 'antd';
import './App.css';

function App() {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Switch>
              <Route exact path='/'>
                <Homepage />
              </Route>
              <Route exact path='/exchanges'>
                <Exchanges />
              </Route>
              <Route exact path='/cryptocurrencies'>
                <Cryptocurrencies />
              </Route>
              <Route exact path='/crypto/:coinId'>
                <CryptoDetails />
              </Route>
              <Route exact path='/news'>
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>

        <div className='footer'>
          <Typography.Title
            level={5}
            style={{ color: 'white', textAlign: 'center' }}
          >
            <Link to='/'>Cryptohub</Link> <br />
            Made with 💙 by{' '}
            <a
              href='https://github.com/viswanathan-k-14'
              rel='noreferrer'
              style={{ color: '#0071bd' }}
              target='_blank'
            >
              Viswanathan
            </a>
          </Typography.Title>
          <Space>
            <Link to='/'>Home</Link>
            <Link to='/exchanges'>Exchanges</Link>
            <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
            <Link to='/news'>News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
