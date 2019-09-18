import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | format-timestamp', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders', async function(assert) {
    this.set('inputValue', new Date(2019, 8, 17, 3, 25, 2, 1));// 3 h 25 min 2 sec 1 ms

    await render(hbs`{{format-timestamp inputValue}}`);

    assert.equal(this.element.textContent.trim(), 'Sep 17, 2019 03:25.02 AM');
  });
});
