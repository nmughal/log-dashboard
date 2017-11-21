import * as _ from 'lodash';
import Route from '@ember/routing/route';
import DataDisplay from '../components/data-display/data-display';

let fields = ['memory', 'memoryFree', 'threads', 'threadsPeak', 'threadsDaemon'];
let createMetricData = _.partialRight(DataDisplay.createData, fields);

export default Route.extend({
    model() {
        return this.store.queryRecord('metric', {}).then(createMetricData);
    }
});

