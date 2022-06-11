import { computed, reactive } from "vue";

interface State {
  showSidebar: boolean;
}

const state = reactive<State>({
  showSidebar: false,
});

const mutations = {
  setSidebar(payload: boolean) {
    state.showSidebar = !state.showSidebar;
    console.log(state.showSidebar, " status changed");
  },
};

const actions = {
  getSidebarStatus() {
    console.log(state.showSidebar, " status");
    return state.showSidebar;
  },
};

const getters = {
  sidebarStatus: computed(() => state.showSidebar),
};

export default {
  getters,
  actions,
  mutations,
};
