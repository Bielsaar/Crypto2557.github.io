import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";

const getDefaultState = () => {
  return {
    data: [],
    dataHard: [],
    dataOther: []
  };
};

const state = getDefaultState();
const namespaced = true;

export const pets = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};

export default getDefaultState;