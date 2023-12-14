import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ЛицаEnum from '../enums/i-i-s-probatri-лица';

export default FlexberryEnum.extend({
  enum: ЛицаEnum,
  sourceType: 'IIS.Probatri.Лица'
});
