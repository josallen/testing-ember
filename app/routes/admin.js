import Ember from 'ember';

const subscribers = [{
  "id": 123456789,
  "email": "Roooodles@unicorn.com"
}
];

export default Ember.Route.extend({
  model() {
    return subscribers;
  }
});
