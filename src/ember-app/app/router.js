import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-probatri-журнал-заказов-l');
  this.route('i-i-s-probatri-журнал-заказов-e',
  { path: 'i-i-s-probatri-журнал-заказов-e/:id' });
  this.route('i-i-s-probatri-журнал-заказов-e.new',
  { path: 'i-i-s-probatri-журнал-заказов-e/new' });
  this.route('i-i-s-probatri-заказ-l');
  this.route('i-i-s-probatri-заказ-e',
  { path: 'i-i-s-probatri-заказ-e/:id' });
  this.route('i-i-s-probatri-заказ-e.new',
  { path: 'i-i-s-probatri-заказ-e/new' });
  this.route('i-i-s-probatri-контрагент-l');
  this.route('i-i-s-probatri-контрагент-e',
  { path: 'i-i-s-probatri-контрагент-e/:id' });
  this.route('i-i-s-probatri-контрагент-e.new',
  { path: 'i-i-s-probatri-контрагент-e/new' });
  this.route('i-i-s-probatri-мастер-l');
  this.route('i-i-s-probatri-мастер-e',
  { path: 'i-i-s-probatri-мастер-e/:id' });
  this.route('i-i-s-probatri-мастер-e.new',
  { path: 'i-i-s-probatri-мастер-e/new' });
  this.route('i-i-s-probatri-номенклатура-l');
  this.route('i-i-s-probatri-номенклатура-e',
  { path: 'i-i-s-probatri-номенклатура-e/:id' });
  this.route('i-i-s-probatri-номенклатура-e.new',
  { path: 'i-i-s-probatri-номенклатура-e/new' });
});

export default Router;
