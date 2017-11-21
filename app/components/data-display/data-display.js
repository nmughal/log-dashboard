import * as _ from 'lodash';

const DataDisplay = Ember.Object.extend({
});

DataDisplay.createData = function(dataModel, fields){
    return {
        dataModel,
        data: fields.map(_.partial(mapField, dataModel))
    }
}

export default DataDisplay;

function mapField(dataModel, field, index, array) {
    if(field.constructor === String) {
        return { key: field, value: dataModel.get(field) };
    }
    else if(field.constructor === Array){
        throw('DataDisplay field cannot be an Array');
    }

    let key = Object.keys(field)[0];
    let value = field[key];
    return { key, value: value.map(_.partial(mapField, dataModel.get(key))) };

}