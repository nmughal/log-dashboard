import * as _ from 'lodash';
import Route from '@ember/routing/route';

import ENVModel from './model';
import DataDisplay from '../components/data-display/data-display';

var healthFields = [
    { 'diskSpace': ['status', 'totalBytes', 'freeBytes', 'threshold'] },
    { 'elasticSearch': ['status', 'clusterName', 'numberOfNodes', 'numberOfNodes', 'activePrimaryShards', 'activeShards'] }
];

let createHealthData = _.partialRight(DataDisplay.createData, healthFields);

export default Route.extend({
    model() {
        return this.store.queryRecord('health', {}).then(createHealthData);
    }
});
