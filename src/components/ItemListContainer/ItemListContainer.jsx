import React from 'react';
import classes from './ItemListContainer.module.css'; 

const ItemListContainer = (props) => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>{props.greeting}</h1> 
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Remeras
          <span className="badge bg-warning rounded-pill">3</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Buzos
          <span className="badge bg-warning rounded-pill">5</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Pantalones
          <span className="badge bg-warning rounded-pill">14</span>
        </li>
      </ul>
    </div>
  );
}

export default ItemListContainer;
