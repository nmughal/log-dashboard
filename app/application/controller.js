import { computed } from '@ember/object';
import Controller from '@ember/controller';


export default Controller.extend({
    host: 'http://107.21.177.120:8080/stock-service',
    previousTransition: null,

    init() {
        this.setHost(this.host);
    },

    setHost(host) {
        let adapter = this.store.adapterFor('application');
        adapter.set('host', host);
    },

    fullUrl: computed('host', 'nameSpace', function() {
        return `${this.get('host')}`;
    }),

    

    actions: {
        changeUrl(url) {
            Ember.run.debounce(this , changeUrlValue, url, 1000);
        }
    }
});

function changeUrlValue(url) {
    this.set('host', url);
    this.setHost(url);
    let routeName = this.currentRouteName;

    if(!!this.previousTransition){
        this.previousTransition.retry();
        this.set('previousTransition', null);
        return;
    }

    this.send('triggerRefresh');
}
