import {CDN_URL} from "../utils/constant";

const RestaurantCard = ({ name, cuisines, rating, imageId, areaName }) => {
    return (
      <div className="res-card">
        <img src={CDN_URL + imageId} alt={name} />
        <h3>{name}</h3>
        <p className="res-area">{areaName}</p>
        <p className="res-cuisines">{cuisines.join(", ")}</p>
        <p className="res-meta">
          <span className="res-rating">⭐ {rating}</span>
        </p>
      </div>
    );
  };

    export default RestaurantCard;