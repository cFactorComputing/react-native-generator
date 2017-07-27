import I18n from 'common/lang/I18n';

jest.mock('react-native-i18n', () => ({}));

it('I18n should be configured', () => {
  expect(I18n.translations.en).toBeDefined();
  expect(I18n.fallbacks).toEqual(true);
});
