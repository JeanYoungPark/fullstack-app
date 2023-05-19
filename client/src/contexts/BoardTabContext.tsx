import React, { ReactNode, createContext, useState } from 'react'

export interface BoardTabContextProps {
    activeTab: string;
    changeTab: (tab: string) => void;
  }
  
export const BoardTabContext = createContext<BoardTabContextProps>({
    activeTab: '',
    changeTab: () => {},
});

export const BoardTabProvider: React.FC<{children: ReactNode}> = ({ children }) => {
    const [activeTab, setActiveTab] = useState("all");
    
    const changeTab = (tab: string) => {
        setActiveTab(tab);
        console.log(tab);
    }

    return (
        <BoardTabContext.Provider value={{activeTab: activeTab, changeTab}}>
            {children}
        </BoardTabContext.Provider>
    )
}