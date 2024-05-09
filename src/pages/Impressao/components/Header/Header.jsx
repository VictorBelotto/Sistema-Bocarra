import React from 'react';
import styles from './Header.module.css'
import getOrderNumber from '../../../../scripts/getOrderNumber';
import Logo from '../../../../assets/images/L1Preto.svg'

const Header = () => {
  const dates = getOrderNumber(); 

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container} >
        <div><img src={Logo} alt="Logo" /></div>
        <div>
         <p>{dates.orderNumber}</p>
         <p>Data: {dates.data}</p>
        </div>
      </div>
      <div className={styles.containerDetalhe}> 
        <span></span>
        <h2>orçamento</h2>
        <span></span>
      </div>
    </div>
  );
};

export default Header;
