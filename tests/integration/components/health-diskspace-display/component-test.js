import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('health-diskspace-display', 'Integration | Component | health diskspace display', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{health-diskspace-display}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#health-diskspace-display}}
      template block text
    {{/health-diskspace-display}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
