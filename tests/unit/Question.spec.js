import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Question from '../../src/views/Question.vue';

describe('Question.vue', () => {
  it('renders 4 inputs', () => {
    const wrapper = shallowMount(Question),
      label = [];

    expect(wrapper.findAll('el-row el-input').length).to.eq(4);

    const list = wrapper.findAll('el-form-item');

    for (let i = 0; i < list.length; i++) {
      const item = list.at(i).attributes('label');

      if (item) label.push(item);
    }

    expect(label).to.deep.equal(['题目', 'A', 'B', 'C', 'D', '分数']);
  });
});
