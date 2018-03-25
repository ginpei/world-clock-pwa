import Vue from 'vue';
import HomeHeader from '@/components/HomeHeader.vue';

describe('HomeHeader.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HomeHeader);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.left button').textContent)
      .toEqual('Reset');
  });
});
