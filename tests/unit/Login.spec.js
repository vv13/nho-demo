import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Login from "../../src/views/Login.vue";

describe("Login.vue", () => {
  it("renders 2 inputs", () => {
    const wrapper = shallowMount(Login);

    expect(wrapper.findAll('el-input').length).to.eq(2);
  });
});
