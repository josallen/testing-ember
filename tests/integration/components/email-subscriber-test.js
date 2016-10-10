import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('email-subscriber', 'Integration | Component | email subscriber', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);
  let stubSubscriber = Ember.Object.create({
    id: 123456,
    email: 'Stampy@unicorns.com'
  });

  this.set('subscriberObj', stubSubscriber);
  this.render(hbs`{{email-subscriber subscriber=subscriberObject}}`);
  assert.equal(this.$('.subscriber').length, 1, 'rendered subscriber object');

});
