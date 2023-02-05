import { createContext, useState } from 'react'
import { dictionary } from '../data/dictionary'

const LangContext = createContext()
const initialLanguage = window.navigator.language?.split('-')[0] === 'es' ? 'es' : 'en'

const LangProvider = ({ children }) => {
  const [language, setLanguage] = useState(initialLanguage)
  const [translations, setTranslations] = useState(dictionary[language])

  const handleLang = (e) => {
    if (language === 'en') {
      setLanguage('es')
      setTranslations(dictionary.es)
    } else if (language === 'es') {
      setLanguage('en')
      setTranslations(dictionary.en)
    }
  }

  const data = { translations, handleLang, language }

  return <LangContext.Provider value={data}>{children}</LangContext.Provider>
}

export { LangProvider }
export default LangContext
