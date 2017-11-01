import DS from 'ember-data';

export default DS.Model.extend({
    diskSpace: DS.belongsTo('disk-space'),
    elasticSearch: DS.belongsTo('elastic-search')
});
