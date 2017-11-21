import * as _ from 'lodash';
import Route from '@ember/routing/route';

import ENVModel from './model';
import DataDisplay from '../components/data-display/data-display';

var healthFields = [
    { 
        title: 'Disk Space',
        diskSpace: [
            {
                title: 'Status',
                field:'status'
            }, 
            {
                title: 'Total Bytes',
                field: 'totalBytes'
            }, 
            {
                title: 'Free Bytes',
                field: 'freeBytes'
            }, 
            {
                title: 'Threshold',
                field: 'threshold'
            }
        ]
    },
    { 
        title: 'Elastic Search',
        elasticSearch: [
            {
                title: 'Status',
                field:'status',
            },
            {
                title: 'Cluster Name',
                field: 'clusterName' 
            },
            {
                title: 'Number Of Nodes',
                field: 'numberOfNodes'
            },
            {
                title: 'Active Primary Shards',
                field: 'activePrimaryShards'
            }, 
            {
                title: 'Active Shards',
                field: 'activeShards'
            }
        ]
    }
];

let createHealthData = _.partialRight(DataDisplay.createData, healthFields);

export default Route.extend({
    model() {
        return this.store.queryRecord('health', {}).then(createHealthData);
    }
});
