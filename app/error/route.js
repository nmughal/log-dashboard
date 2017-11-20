import Route from '@ember/routing/route';

export default Route.extend({

    setupController(controller, error) {
        // Call _super for default behavior
        this._super(controller, error);
        
        this.controller.set('errorMessage', error.message);
        
    }
});
