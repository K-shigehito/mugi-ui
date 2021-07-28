import { mount } from '@vue/test-utils';
import BaseButton from './BaseButton.vue';

describe('BaseButton', () => {
  // 渡したスロットコンテンツがレンダリングされるかどうか
  test('Whether the contents of the slot will be rendered.', () => {
    const wrapper = mount(BaseButton, {
      slots: {
        default: 'ボタン',
      },
    });

    expect(wrapper.html()).toContain('ボタン');
  });

  // clickされたイベントがemitされるかどうか
  test('The click event will be emitted.', () => {
    const wrapper = mount(BaseButton, {
      slots: {
        default: 'ボタン',
      },
    });

    wrapper.find('button').trigger('click');

    expect(wrapper.emitted().click).toBeTruthy();
  });
});
