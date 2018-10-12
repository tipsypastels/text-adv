class Game {
  constructor(areaClass) {
    this.state = new StateManager(this);

    if (typeof areaClass === 'function') {
      this.goto(areaClass);
    }
  }

  // BASIC ACTIONS

  goto(areaClass, opts = StateManager.gotoOpts) {
    if (this.location) {
      if (opts.save === true) {
        this.location.saveState();
      }

      if (this.location.onExit) {
        this.location.onExit(areaClass);
      }
    }

    let area = new areaClass(this);
    this.location = area;
    return this;
  }

  // STATE MANAGEMENT

  setAreaState(newState) {
    this.location.setState(newState);
    return this;
  }

  get areaState() {
    return this.location.state;
  }

  getStateFor(area) {
    return this.state.forArea(area);
  }

  saveArea(area) {
    this.state.saveArea(area);
    return this;
  }
}