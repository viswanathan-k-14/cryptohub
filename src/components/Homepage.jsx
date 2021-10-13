import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';
import { ArrowRightOutlined } from '@ant-design/icons';
// eslint-disable-next-line
import { identifier } from '@babel/types';
import Loader from './Loader';

const { Title } = Typography;
const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  if (isFetching) return <Loader />;

  return (
    <>
      <Title level={3} className='heading'>
        Overall Crypto Stats
      </Title>
      <Row gutter={[32, 32]}>
        <Col span={12}>
          <Statistic title='Total Cryptocurrencies' value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic
            title='Total Exchanges'
            value={millify(globalStats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title='Total Market Cap'
            value={`$${millify(globalStats.totalMarketCap)}`}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title='Total 24h Volume'
            value={`$${millify(globalStats.total24hVolume)}`}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title='Total Markets'
            value={millify(globalStats.totalMarkets)}
          />
        </Col>
      </Row>
      <div className='home-heading-container'>
        <Title level={3} className='home-title'>
          Top #10 crypto currency
        </Title>
        <Title level={5} className='show-more'>
          <Link to='/cryptocurrencies'>
            show more &nbsp;
            <ArrowRightOutlined />
          </Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />
      <div className='home-heading-container'>
        <Title level={3} className='home-title'>
          Latest crypto news
        </Title>
        <Title level={5}>
          <Link to='/news'>
            show more &nbsp;
            <ArrowRightOutlined />
          </Link>
        </Title>
      </div>
      <News simplified />
    </>
  );
};

export default Homepage;
