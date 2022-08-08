import React from "react";

const Card = (props) => {
    let badgeText 
    if (props.item. openSpots === 0){
        badgeText = "Sold Out"
    }
    else if (props.item.location === "Online"){
        badgeText = "Online"
    }

    return (
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={props.item.coverImg} alt="Katie-Zaferes-img" className="card-img"/>
            <div className="card-info">
                <img src="images/star.png" alt="satr-img"  className="card-star"/>
                <span>{props.item.stats.rating}</span>
                <span className="grey">({props.item.stats.reviewCount}) • </span>
                <span className="grey">{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p> <spam className="bold">From ${props.item.price}</spam> / person</p>
        </div>
    )
}

export default Card;