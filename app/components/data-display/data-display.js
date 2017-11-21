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

function mapField(dataModel, fieldObj, index, array) {
    if(fieldObj.constructor === Array){
        throw('DataDisplay field cannot be an Array');
    }

    if(fieldObj.field && fieldObj.field.constructor === String) {
        return { value: dataModel.get(fieldObj.field), title: fieldObj.title };
    }
    
    let notFieldSectionKeys = ['title'];
    let keys = Object.keys(fieldObj);
    let sectionKey = keys.filter((key) => notFieldSectionKeys.indexOf(key) === -1)[0];
    let fields = fieldObj[sectionKey];

    return { title: fieldObj.title, value: fields.map(_.partial(mapField, dataModel.get(sectionKey))) };

}