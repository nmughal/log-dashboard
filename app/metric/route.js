import * as _ from 'lodash';
import Route from '@ember/routing/route';
import DataDisplay from '../components/data-display/data-display';

let fields = [
    {
        title: 'Memory',
        field: 'memory'
    }, 
    {
        title: 'Memory Free',
        field: 'memoryFree'
    },
    {
        title: 'Threads',
        field: 'threads'
    }, 
    {
        title: 'Threads Peak',
        field: 'threadsPeak'
    },
    {
        title: 'Threads Daemon',
        field: 'threadsDaemon'
    }   
];

let createMetricData = _.partialRight(DataDisplay.createData, fields);

export default Route.extend({
    model() {
        return this.store.queryRecord('metric', {}).then(createMetricData);
    }
});

