import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:index', 'Unit | Controller | index', {
  unit: true
});

test('isValid should return false when emailAddress is not in valid format', function(assert) {
  const controller = this.subject();

  controller.set('emailAddress', 'Unicorns');

  assert.equal(controller.get('isValid'), false);

});

test('isValid should return true when emailAddress is in valid format', function(assert) {
  const controller = this.subject();

  controller.set('emailAddress', 'unicorn@magic.com');

  assert.equal(controller.get('isValid'), true);

});

test('isDisabled should return true when emailAddress is not in valid format', function(assert) {
  const controller = this.subject();

  controller.set('emailAddress', 'Unicorns');

  assert.equal(controller.get('isDisabled'), true);

});

test('isDisabled should return false when emailAddress is in valid format', function(assert) {
  const controller = this.subject();

  controller.set('emailAddress', 'unicorn@magic.com');

  assert.equal(controller.get('isDisabled'), false);

});

test('saveInvitation should set responseMessage and clear emailAddress', function(assert) {
  assert.expect(2);

  const controller = this.subject();
  const emailAddress = 'unicorn@magic.com';

  controller.set('emailAddress', emailAddress);

  controller.send('saveInvitation');

  assert.equal(controller.get('emailAddress'), '');
  assert.equal(controller.get('responseMessage'), `You're all set ${emailAddress}, keep an eye out for your invitation.`);

});
