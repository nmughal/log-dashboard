import Route from '@ember/routing/route';
import { computed } from '@ember/object';

export default Route.extend({
    host: 'http://107.21.177.120:8080/stock-service',
    previousTransition: null,
    init() {
        this.setHost(this.host);
    },

    setHost(host) {
        let adapter = this.store.adapterFor('application');
        adapter.set('host', host);
    },
    actions: {
        error (error, transition) {
            // let applicationController = this.controllerFor('application');
            // applicationController.set('previousTransition', transition);

            return true;
        },

        changeUrl(url) {
            Ember.run.debounce(this, changeUrlValue, url, 1000);
        }
    },
    fullUrl: computed('host', 'nameSpace', function() {
        return `${this.get('host')}`;
    })
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

    this.refresh();
}