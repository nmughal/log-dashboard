import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('health-elasticsearch-display', 'Integration | Component | health elasticsearch display', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{health-elasticsearch-display}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#health-elasticsearch-display}}
      template block text
    {{/health-elasticsearch-display}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
