import React from 'react'

const Card = ({ userInfo }) => {
  return (
    <div className="main-card">
      <div className="main-header">
        <img src={userInfo.img} alt="logo" />
        <div>
          <h3>{userInfo.name}</h3>
          <span className="domain">{userInfo.website}</span>
        </div>
      </div>

      <div className="main-content">
        <p>
          {userInfo.description}
        </p>

        <div className="stats">
          <div>
            <span>Users</span>
            <strong>{userInfo.users}</strong>
          </div>
          <div>
            <span>Founded</span>
            <strong>{userInfo.foundedYear}</strong>
          </div>
          <div>
            <span>Type</span>
            <strong>{userInfo.type}</strong>
          </div>
        </div>
      </div>

      <div className="main-footer">
        <span className="tag">Technology</span>
        <a href={userInfo.website} target="_blank" rel="noreferrer" className="visit">
          Visit →
        </a>
      </div>
    </div>
  )
}

export default Card 