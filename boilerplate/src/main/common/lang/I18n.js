import I18n from 'react-native-i18n';

I18n.fallbacks = true;

I18n.translations = {
  en: require('./messages/english.json'),
  'en-GB': require('./messages/en-GB.json'),
  'en-US': require('./messages/en-US.json'),
};

export default I18n;
