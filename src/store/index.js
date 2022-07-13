import { createStore } from "vuex"

import state from "./state";
import mutations from "./mutations";
import * as getters from "./getters";
import * as actions from "./actions";

/**
 * 创建实例
 */
export default createStore({
    state,
    mutations,
    getters,
    actions,
})