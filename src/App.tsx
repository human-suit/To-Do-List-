import { createContext, useState } from 'react'
import './App.css'
import Header from "./components/Header"
import useOnlineState from './hooks/useOnlineState'
import useDeviseType from './hooks/useDeviceType'
import SectionList from './components/SectionList'
import { Props } from './types/types'
//для передачи данных между компонентами




type ContextType ={
  value:{
    theme: string,
    setTheme: React.Dispatch<React.SetStateAction<string>>
  },
  value2?:{
    initialBeans: Props,
    setInitialBeans: React.Dispatch<React.SetStateAction<Props>>
  }
}



//для передачи данных между компонентами
export const ThemeContex = createContext<ContextType | null >(null)

function App() {
  
  const arrayMas: Props = {
    items:[
        {
            "beanId": 1,
            "flavorName": "Купить книгу",
            "dopInfo": "Заработать денег",
            "isWork":false
        },
        {
            "beanId": 2,
            "flavorName": "Убрать квартиру",
            "dopInfo": "Помыть посуду",
            "isWork":false
        }
    ]
  }
  //для передачи данных между компонентами
  const [theme, setTheme] = useState("light")
  const [initialBeans, setInitialBeans] = useState(arrayMas)
  //Использование своих хуков созданных в папке hooks
  const status = useOnlineState()
  console.log(status)
  const windowSize = useDeviseType()
  console.log(windowSize)
  

  return (
    <>
      
        {/* //для передачи данных между компонентами */}
        <ThemeContex.Provider value={{value:{theme,setTheme}, value2:{initialBeans,setInitialBeans}}}>
          <div className={`container ${theme}`}>
            <Header/>
            <SectionList/>
            
           
            
          </div>
        </ThemeContex.Provider>
          
    </>
  )
}

export default App
