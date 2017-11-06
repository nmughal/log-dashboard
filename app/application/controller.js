import { computed } from '@ember/object';
import Controller from '@ember/controller';


export default Controller.extend({
    host: 'http://107.21.177.120:8080',
    nameSpace: 'stock-service',

    init() {
        this.setHostNamespace(this.host, this.nameSpace);
    },

    setHostNamespace(host, namespace) {
        let adapter = this.store.adapterFor('application');
        adapter.set('host', host);
        adapter.set('namespace', namespace);
    },

    fullUrl: computed('host', 'nameSpace', function() {
        return `${this.get('host')}/${this.get('nameSpace')}`;
    }),

    

    actions: {
        changeUrl(url) {
            Ember.run.debounce(this , changeUrlValue, url, 1000);
        }
    }
});

function changeUrlValue(url) {
    let indexLastSlash = url.lastIndexOf('/');
    let host = url;
    let namespace = '';

    if(indexLastSlash !== -1) {
        host = url.slice(0, indexLastSlash);
        namespace = url.slice(indexLastSlash + 1);
    }

    this.set('host', host);
    this.set('nameSpace', namespace);
    this.setHostNamespace(host, namespace);
    
}
