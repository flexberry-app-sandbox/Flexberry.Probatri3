import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Probatri',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Probatri',
          title: 'Probatri'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
