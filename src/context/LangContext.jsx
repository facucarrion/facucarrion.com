import { createContext, useState } from 'react'
import { dictionary } from '../data/dictionary'

const LangContext = createContext()
const initialLang =
  window.navigator.language?.split('-')[0] === 'es' ? 'es' : 'en'

const LangProvider = ({ children }) => {
  const [language, setLanguage] = useState(initialLang)
  const [translations, setTranslations] = useState(dictionary[language])

  const handleLang = {
    select: (e) => {
      setLanguage(e.target.value)
      setTranslations(dictionary[e.target.value])
    },
    button: (language) => {
      const newLang = language === 'es' ? 'en' : 'es'
      setLanguage(newLang)
      setTranslations(dictionary[newLang])
    }
  }

  const data = { translations, handleLang, language }
  return <LangContext.Provider value={data}>{children}</LangContext.Provider>
}

export { LangProvider }
export default LangContext
