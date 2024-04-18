import React from 'react';
import ExibePopUp from '../components/ExibePopUp/ExibePopUp';

const PopupContext = React.createContext();

export const PopupProvider = ({ children }) => {
  const [popupContent, setPopupContent] = React.useState(null);

  const showPopup = (mensagem, cor) => {
    setPopupContent({ mensagem, cor });
    setTimeout(() => {
      hidePopup();
    }, 3000);
  };

  const hidePopup = () => {
    setPopupContent(null);
  };

  return (
    <PopupContext.Provider value={{ showPopup }}>
      {children}
      {popupContent && <ExibePopUp estado={popupContent} />}
    </PopupContext.Provider>
  );
};

export const usePopup = () => React.useContext(PopupContext);