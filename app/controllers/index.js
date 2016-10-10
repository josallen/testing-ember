import Ember from 'ember';

export default Ember.Controller.extend({
  emailAddress: '',

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),

  actions: {
    saveInvitation() {
      this.set('responseMessage', `You're all set ${this.get('emailAddress')}, keep an eye out for your invitation.`);
      this.set('emailAddress', '');
    }
  }
});
