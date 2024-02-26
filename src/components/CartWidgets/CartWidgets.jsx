import React from 'react'
import cart from './assets/carro.vacio.png'
import cart1 from './assets/carro.lleno.png'
import styles from './CartWidgets.module.css'; 

const CartWidgets = () => {
  return (
    <button className={styles.cartButton}>
        <img className={styles.cartIcon} src={cart} alt="Carrito vacío" />
        <span className={styles.cartCount}>0</span>
        
        {/*<img className={styles.cartIcon} src={cart1} alt="Carrito con productos" />*/}
    </button>
  );
}

export default CartWidgets;
