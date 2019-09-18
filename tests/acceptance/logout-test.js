import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | logout', function(hooks) {
  setupApplicationTest(hooks);

  test('clicking logout button should result in login screen', async function(assert) {
    await visit('/teams');
    assert.equal(currentURL(), '/teams');
    await click('.team-sidebar__logout-button')
    // pauseTest() // resumeTest()
    assert.equal(currentURL(), '/login');
  });
});
