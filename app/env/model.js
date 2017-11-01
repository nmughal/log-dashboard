import DS from 'ember-data';

export default DS.Model.extend({
    path: DS.attr(),
    nLSPath: DS.attr(),
    term: DS.attr(),
    pwd: DS.attr()
});
