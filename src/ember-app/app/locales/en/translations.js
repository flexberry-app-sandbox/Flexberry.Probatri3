import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISProbatriЖурналЗаказовLForm from './forms/i-i-s-probatri-журнал-заказов-l';
import IISProbatriЗаказLForm from './forms/i-i-s-probatri-заказ-l';
import IISProbatriКонтрагентLForm from './forms/i-i-s-probatri-контрагент-l';
import IISProbatriМастерLForm from './forms/i-i-s-probatri-мастер-l';
import IISProbatriНоменклатураLForm from './forms/i-i-s-probatri-номенклатура-l';
import IISProbatriЖурналЗаказовEForm from './forms/i-i-s-probatri-журнал-заказов-e';
import IISProbatriЗаказEForm from './forms/i-i-s-probatri-заказ-e';
import IISProbatriКонтрагентEForm from './forms/i-i-s-probatri-контрагент-e';
import IISProbatriМастерEForm from './forms/i-i-s-probatri-мастер-e';
import IISProbatriНоменклатураEForm from './forms/i-i-s-probatri-номенклатура-e';
import IISProbatriЖурналЗаказовModel from './models/i-i-s-probatri-журнал-заказов';
import IISProbatriЗаказModel from './models/i-i-s-probatri-заказ';
import IISProbatriКонтрагентModel from './models/i-i-s-probatri-контрагент';
import IISProbatriМастерModel from './models/i-i-s-probatri-мастер';
import IISProbatriНоменклатураModel from './models/i-i-s-probatri-номенклатура';
import IISProbatriРасчетЗаказаModel from './models/i-i-s-probatri-расчет-заказа';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-probatri-журнал-заказов': IISProbatriЖурналЗаказовModel,
    'i-i-s-probatri-заказ': IISProbatriЗаказModel,
    'i-i-s-probatri-контрагент': IISProbatriКонтрагентModel,
    'i-i-s-probatri-мастер': IISProbatriМастерModel,
    'i-i-s-probatri-номенклатура': IISProbatriНоменклатураModel,
    'i-i-s-probatri-расчет-заказа': IISProbatriРасчетЗаказаModel
  },

  'application-name': 'Probatri',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Probatri',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Probatri',
          title: 'Probatri'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        заказы: {
          caption: 'Заказы',
          title: 'Заказы',
          справочники: {
            caption: 'Справочники',
            title: 'Справочники',
            'i-i-s-probatri-контрагент-l': {
              caption: 'Контрагенты',
              title: 'Контрагент'
            },
            'i-i-s-probatri-мастер-l': {
              caption: 'Мастера',
              title: 'Мастер'
            },
            'i-i-s-probatri-номенклатура-l': {
              caption: 'Номенклатура',
              title: 'Номенклатура'
            }
          },
          документация: {
            caption: 'Документация',
            title: 'Документация',
            'i-i-s-probatri-заказ-l': {
              caption: 'Оформление заказа',
              title: 'Заказ'
            },
            'i-i-s-probatri-журнал-заказов-l': {
              caption: 'Журнал заказов',
              title: 'Журнал заказов'
            }
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-probatri-журнал-заказов-l': IISProbatriЖурналЗаказовLForm,
    'i-i-s-probatri-заказ-l': IISProbatriЗаказLForm,
    'i-i-s-probatri-контрагент-l': IISProbatriКонтрагентLForm,
    'i-i-s-probatri-мастер-l': IISProbatriМастерLForm,
    'i-i-s-probatri-номенклатура-l': IISProbatriНоменклатураLForm,
    'i-i-s-probatri-журнал-заказов-e': IISProbatriЖурналЗаказовEForm,
    'i-i-s-probatri-заказ-e': IISProbatriЗаказEForm,
    'i-i-s-probatri-контрагент-e': IISProbatriКонтрагентEForm,
    'i-i-s-probatri-мастер-e': IISProbatriМастерEForm,
    'i-i-s-probatri-номенклатура-e': IISProbatriНоменклатураEForm
  },

});

export default translations;
