import React from 'react';
import getOrderNumber from '../../../../scripts/getOrderNumber';


const Header = () => {
  const orderNumber = getOrderNumber(); 

  return (
    <div>
      <div>
        <img src="src\assets\images\L1Preto.svg" alt="" />
      </div>
      <div>
        <p>{orderNumber}</p>
        <div>
          {/* Exibe a data atual */}
        </div>
      </div>
    </div>
  );
};

export default Header;
