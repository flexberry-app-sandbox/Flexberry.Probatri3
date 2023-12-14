import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-probatri-заказ', 'Unit | Serializer | i-i-s-probatri-заказ', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-probatri-заказ',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-probatri-лица',
    'transform:i-i-s-probatri-статус',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
