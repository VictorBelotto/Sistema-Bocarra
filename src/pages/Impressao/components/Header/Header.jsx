import React from 'react';
import styles from './Header.module.css'
import getOrderNumber from '../../../../scripts/getOrderNumber';


const Header = () => {
  const dates = getOrderNumber(); 

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container} >
        <div><img src="src\assets\images\L1Preto.svg" alt="" /></div>
        <div>
         <p>{dates.orderNumber}</p>
         <p>{dates.data}</p>
        </div>
      </div>
      <div className={styles.containerDetalhe}> 
        <span></span>
        <p>orçamento</p>
        <span></span>
      </div>
    </div>
  );
};

export default Header;
