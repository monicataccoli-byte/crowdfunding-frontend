import React from 'react';
import { Link } from 'react-router-dom';
import "./FundraiserCard.css";

function FundraiserCard({ fundraiserData }) {
    // Business Logic: Percentage calculation for the progress bar
    const progressPercent = (fundraiserData.amount_raised / fundraiserData.goal) * 100;

    return (
        <Link to={`/fundraiser/${fundraiserData.id}`} className="fundraiser-card-link">
            <div className="fundraiser-card">
                <img src={fundraiserData.image} alt={fundraiserData.title} />
                
                <div className="card-content">
                    {/* Status Badge */}
                    <span className={`status-badge ${fundraiserData.is_open ? 'safe' : 'urgent'}`}>
                        {fundraiserData.is_open ? 'Safe' : 'Urgent Rescue'}
                    </span>

                    <h3>{fundraiserData.title}</h3>
                    
                    <p className="impact-text">Helping this pet find a furever home.</p>
                    
                    <div className="progress-container">
                        <div 
                            className="progress-bar" 
                            style={{ width: `${Math.min(progressPercent, 100)}%` }}
                        ></div>
                    </div>
                    
                    <div className="card-stats">
                        <span className="raised">${fundraiserData.amount_raised} raised</span>
                        <span className="goal">Goal: ${fundraiserData.goal}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default FundraiserCard;
