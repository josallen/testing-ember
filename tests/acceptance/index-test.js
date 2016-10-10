import { test } from 'qunit';
import moduleForAcceptance from 'testing-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | index');

test('visiting /', function(assert) {
  visit('/');
  fillIn('input#email-input', 'unicorn@magic.com');
  click('button#submit');

  andThen(() => {
    assert.equal(currentURL(), '/');
    assert.equal(find('input#email-input').text(), '');
    assert.equal(find('#response').text(), 'You\'re all set unicorn@magic.com, keep an eye out for your invitation.');

  });

});

test('should link to about page', function(assert) {
  visit('/');
  click('a:contains("About")');

  andThen(() => {
    assert.equal(currentURL(), '/about');

  });

});

test('should link to the contact page', function(assert) {
  visit('/');
  click('a:contains("Contact")');

  andThen(() => {
    assert.equal(currentURL(), '/contact');
  });

});
