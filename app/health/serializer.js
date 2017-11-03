import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({

    // normalizeQueryRecordResponse (store, primaryModelClass, payload, id, requestType) {
    //     let diskSpace = payload.diskSpace;
    //     let elasticSearch = payload.elasticsearch;

    //     let serializedPayload = {
    //         health: {
    //             id: 1,
    //             status: payload.status,
    //             diskSpace: 1,
    //             elasticSearch: 1
    //         },
    //         diskSpaces: [{
    //             id: 1,
    //             status: diskSpace.status,
    //             totalBytes: diskSpace.total,
    //             freeBytes: diskSpace.free,
    //             threshold: diskSpace.threshold
    //         }],
    //         elasticSearchs: [{
    //             id: 1,
    //             status: elasticSearch.status,
    //             clusterName: elasticSearch.clusterName,
    //             numberOfNodes: elasticSearch.numberOfNodes,
    //             activePrimaryShards: elasticSearch.activePrimaryShards,
    //             activeShards: elasticSearch.activeShards
    //         }]
            
    //     };
        

    //     return this._super(store, primaryModelClass, serializedPayload, id, requestType);
    // }
    normalizeQueryRecordResponse(store, primaryModelClass, payload, id, requestType) {
        let diskSpace = payload.diskSpace;
        let elasticSearch = payload.elasticsearch;

        let serializedPayload = {
            data: {
                type: 'healths',
                id: '1',
                attributes: {
                    'status': payload.status,
                    
                },
                relationships: {
                    'disk-space': {
                        data: {
                            type: 'disk-spaces',
                            id: '1'
                        }
                    },
                    'elastic-search': {
                        data: {
                            type: 'elastic-searchs',
                            id: '1'
                        }
                    }
                }
                

            },
            included: [{
                type: 'disk-spaces',
                id: '1',
                attributes: {
                    'status': diskSpace.status,
                    'total-bytes': diskSpace.total,
                    'free-bytes': diskSpace.free,
                    'threshold': diskSpace.threshold,
                    
                }
            },
            {
                type: 'elastic-searchs',
                id: '1',
                attributes: {
                    'status': elasticSearch.status,
                    'cluster-name': elasticSearch.clusterName,
                    'number-of-nodes': elasticSearch.numberOfNodes,
                    'active-primary-shards': elasticSearch.activePrimaryShards,
                    'active-shards': elasticSearch.activeShards
                }
            }]

            
        };


        return this._super(store, primaryModelClass, serializedPayload, serializedPayload.data.id, requestType);
    }
});
