import * as _ from 'lodash';
import Route from '@ember/routing/route';

import ENVModel from './model';
import DataDisplay from '../components/data-display/data-display';



let fields = [
    {
        title: 'PATH',
        field: 'path'
    },
    {
        title: 'NLS PATH',
        field: 'nlsPath'
    },
    {
        title: 'Term',
        field: 'term'
    },
    {
        title: 'PWD',
        field: 'pwd'
    }
];

let createEnvData = _.partialRight(DataDisplay.createData, fields);

export default Route.extend({
    model() {
        return this.store.queryRecord('env', {}).then(createEnvData);
    }
});
