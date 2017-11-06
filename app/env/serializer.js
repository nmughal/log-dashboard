import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
    normalizeQueryRecordResponse(store, primaryModelClass, payload, id, requestType) {
        let diskSpace = payload.diskSpace;
        let elasticSearch = payload.elasticsearch;

        let serializedPayload = {
            data: {
                type: 'env',
                id: '1',
                attributes: {
                    'path': payload.systemEnvironment.PATH,
                    'nls-path': payload.systemEnvironment.NLSPATH,
                    'term': payload.systemEnvironment.TERM,
                    'pwd': payload.systemEnvironment.PWD
                }
            }
        };

        return this._super(store, primaryModelClass, serializedPayload, serializedPayload.data.id, requestType); 
    }
});

