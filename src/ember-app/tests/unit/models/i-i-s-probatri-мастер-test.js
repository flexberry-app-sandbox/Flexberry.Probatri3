import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-probatri-мастер', 'Unit | Model | i-i-s-probatri-мастер', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-probatri-журнал-заказов',
    'model:i-i-s-probatri-заказ',
    'model:i-i-s-probatri-контрагент',
    'model:i-i-s-probatri-мастер',
    'model:i-i-s-probatri-номенклатура',
    'model:i-i-s-probatri-расчет-заказа',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
