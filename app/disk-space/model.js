import DS from 'ember-data';

export default DS.Model.extend({
    status: DS.attr(),
    totalBytes: DS.attr(),
    freeBytes: DS.attr(),
    threshold: DS.attr()
});
