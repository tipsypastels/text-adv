class StateManager {
  static get blank() {
    return {};
  }

  static get gotoOpts() {
    return { save: true };
  }

  constructor(game) {
    this.game  = game;
    this.areas = {};
  }

  forArea(area) {
    let oldState = this.areas[area];
    if (oldState) {
      return oldState;
    }

    let { initialState } = area;
    if (initialState) {
      return initialState;
    }

    return StateManager.blank;
  }

  saveArea(area) {
    this.areas[area] = Object.assign(
      this.areas[area] || StateManager.blank, 
      area.state,
    );
  }
}