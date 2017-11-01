import DS from 'ember-data';

export default DS.Model.extend({
    status: DS.attr(),
    clusterName: DS.attr(),
    numberOfNodes: DS.attr(),
    activePrimaryShards: DS.attr(),
    activeShards: DS.attr()
});
