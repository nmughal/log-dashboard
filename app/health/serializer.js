import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload.id = '1';
    payload = { health: payload };
    primaryKey: 'status';
    return this._super(store, primaryModelClass, payload, id, requestType);
  }

});
