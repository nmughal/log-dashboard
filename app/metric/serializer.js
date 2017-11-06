import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
    normalizeQueryRecordResponse(store, primaryModelClass, payload, id, requestType) {

        let serializedPayload = {
            data: {
                type: 'metrics',
                id: '1',
                attributes: {
                    'memory': payload.mem,
                    'memory-free': payload['mem.free'],
                    'threads': payload['threads'],
                    'threads-peak': payload['threads.peak'],
                    'threads-daemon': payload['threads.daemon']
                }
            }
        };

        return this._super(store, primaryModelClass, serializedPayload, serializedPayload.data.id, requestType); 
    }
});