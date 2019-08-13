import React from 'react';

const Card = props => {
  const { info } = props;
  
  console.log(info)
  return (
    <div className="row">
      <div className="col m12">
        <div className="card">
          <div className="card-content white-text">
            <span className="card-title">{info.City}</span>
            <div className="row">
              <div className="col m6">
                <p>Metro area name: </p>
              </div>
              <div className="col m3 pull-m2">
                <p>{info.Metro}</p>
              </div>
            </div>
            <div className="row">
              <div className="col m6">
                <p>Zip code</p>
              </div>
              <div className="col m3 pull-m2">
                <p>{info.RegionName}</p>
              </div>
            </div>
            <div className="row">
              <div className="col m6">
                <p>Current Price</p>
              </div>
              <div className="col m3 pull-m2">
                <p>${info['2019-06']}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;