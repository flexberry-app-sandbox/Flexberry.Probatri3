import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  статусЗаказа: DS.attr('i-i-s-probatri-статус'),
  заказ: DS.belongsTo('i-i-s-probatri-заказ', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-probatri-журнал-заказов.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  статусЗаказа: {
    descriptionKey: 'models.i-i-s-probatri-журнал-заказов.validations.статусЗаказа.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  заказ: {
    descriptionKey: 'models.i-i-s-probatri-журнал-заказов.validations.заказ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЖурналЗаказовE', 'i-i-s-probatri-журнал-заказов', {
    дата: attr('Дата', { index: 0 }),
    заказ: belongsTo('i-i-s-probatri-заказ', 'Номер заказа', {
      номерЗаказа: attr('Номер заказа', { index: 2, hidden: true }),
      мастер: belongsTo('i-i-s-probatri-мастер', '', {
        фИО: attr('Мастер', { index: 3 })
      }, { index: -1, hidden: true })
    }, { index: 1, displayMemberPath: 'номерЗаказа' }),
    статусЗаказа: attr('Статус заказа', { index: 4 })
  });

  modelClass.defineProjection('ЖурналЗаказовL', 'i-i-s-probatri-журнал-заказов', {
    дата: attr('Дата', { index: 0 }),
    заказ: belongsTo('i-i-s-probatri-заказ', 'Номер заказа', {
      номерЗаказа: attr('Номер заказа', { index: 1 }),
      мастер: belongsTo('i-i-s-probatri-мастер', '', {
        фИО: attr('Мастер', { index: 2 })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true }),
    статусЗаказа: attr('Статус заказа', { index: 3 })
  });
};
