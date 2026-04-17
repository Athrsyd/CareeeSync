import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import PortfolioHooks from '../../hooks/PortfolioHooks'

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
            <>
                fullname <br />
                <h1>{portfolioData.fullname}</h1>
                <br /><br />

                about me <br />
                <p>{portfolioData.about_me}</p> <br /><br />

                project title <br />
                <h2>{portfolioData.project_title}</h2> <br />


                <br /><br />

                link link: <br />
                <a href={portfolioData.linkedin_link} target="_blank" rel="noopener noreferrer">
                    {portfolioData.linkedin_link}
                </a>
                <br /><br />

                {/* Tambahkan template rendering di sini */}
            </>
        ) : 'No portfolio data available'}
    </div>
  )
}

export default Portfolio