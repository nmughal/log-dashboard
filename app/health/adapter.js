import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    host: 'http://107.21.177.120:8080',
    namespace: 'stock-service',

    pathForType(modelName) {
        return 'health';
    }
});
