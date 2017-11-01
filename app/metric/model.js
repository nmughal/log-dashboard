import DS from 'ember-data';

export default DS.Model.extend({
    memory: DS.attr(),
    memoryFree: DS.attr(),
    threads: DS.attr(),
    threadsPeak: DS.attr(),
    threadsDaemon: DS.attr()
});
