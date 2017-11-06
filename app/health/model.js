import DS from 'ember-data';

export default DS.Model.extend({
  status: DS.attr('string'),
  total: DS.attr('string'),
  free: DS.attr('string')
});
