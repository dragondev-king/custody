import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import locales from 'resources/locales';

const NAMESPACE = 'common'

export const getI18nInstance = () => i18n.use(initReactI18next).init({
  lng: 'en',
  resources: locales
})

export default getI18nInstance

