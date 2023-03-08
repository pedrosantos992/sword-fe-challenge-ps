/**
 * @vitest-environment happy-dom
 */

import { describe, it, expect, vi } from "vitest";
import { mount, shallowMount } from "@vue/test-utils";
import Discover from "../Discover.vue";
import FiltersList from "../FiltersList.vue";
import { createTestingPinia } from "@pinia/testing";

describe("Discover Component Tests", () => {
  it("Renders Discover with child Component FiltersList", () => {
    const wrapper = mount(Discover, {
      mounted: vi.fn(),
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn(),
          }),
        ],
      },
    });
    expect(wrapper.findComponent(FiltersList).exists()).toBeTruthy();
  });
});
