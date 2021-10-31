/**
 * @description: 创建 Actions 实例
 */

function emptyAction() {
  console.log("当前使用的 Action 为空!");
}

class Actions {
  // 默认值为空 Action
  actions = {
    onGlobalStateChange: emptyAction,
    setGlobalState: emptyAction
  };
  
  /**
   * 设置 actions
   */
  setActions(actions) {
    this.actions = actions;
  }

  /**
   * 映射
   */
  onGlobalStateChange(...args) {
    return this.actions.onGlobalStateChange(...args);
  }

  /**
   * 映射
   */
  setGlobalState(...args) {
    return this.actions.setGlobalState(...args);
  }
}

const actions = new Actions();
export default actions;