import DS from 'ember-data';

export default DS.JSONSerializer.extend(EmbeddedRecordsMixin, {
    attrs: {
        diskSpace: {
            serialize: false,
            deserialize: 'records'
        },
        elasticSearch: {
            serialize: false,
            deserialize: 'records'
        }
    }
});
