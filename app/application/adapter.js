import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: 'http://107.21.177.120:8080',
    namespace: 'stock-service'
});
