import * as _ from 'lodash';
import Route from '@ember/routing/route';

import ENVModel from './model';
import DataDisplay from '../components/data-display/data-display';

let fields = ['path', 'nlsPath', 'term', 'pwd'];
let createEnvData = _.partialRight(DataDisplay.createData, fields);

export default Route.extend({
    model() {
        return this.store.queryRecord('env', {}).then(createEnvData);
    }
});
