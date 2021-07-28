import { mount } from '@vue/test-utils';
import BaseButton from './BaseButton.vue';

describe('BaseButton', () => {
  test('Whether the contents of the slot will be rendered.', () => {
    const wrapper = mount(BaseButton, {
      slots: {
        default: 'ボタン',
      },
    });

    expect(wrapper.html()).toContain('ボタン');
  });
});
