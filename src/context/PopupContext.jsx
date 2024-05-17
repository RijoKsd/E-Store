import { createContext, useState } from 'react'


export const PopupContext = createContext()



  const PopupProvider = ({ children }) => {
    const [isPopupOpen,setIsPopupOpen] = useState(false)
    return (
      <PopupContext.Provider value={{ setIsPopupOpen, isPopupOpen }}>
        {children}
      </PopupContext.Provider>
    );
    }

export default PopupProvider;
 