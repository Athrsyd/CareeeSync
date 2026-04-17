import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import PortfolioHooks from '../../hooks/PortfolioHooks'
import Template2 from './Template/Template2';

const Portfolio = () => {
    const { portfolioData, loading, error, fetchPortfolio } = PortfolioHooks();
    const { id } = useParams();

    useEffect(() => {
        fetchPortfolio(id);
    }, []);
    setTimeout(() => {
        console.log(portfolioData || 'No portfolio data after timeout');
    }, 2000);
  return (
    <div>
        {portfolioData ? (
            <Template2 data={portfolioData} />
        ) : 'No portfolio data available'}
    </div>
  )
}

export default Portfolio