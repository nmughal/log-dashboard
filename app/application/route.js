import Route from '@ember/routing/route';

export default Route.extend({
    actions: {
        triggerRefresh() {
            this.refresh();
        },

        error (error, transition) {
            let applicationController = this.controllerFor('application');
            applicationController.set('previousTransition', transition);

            return true;
        }
    }
            
});
