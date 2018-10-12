class Area {
  constructor(game) {
    this.game  = game;
    this.state = game.getStateFor(this);
    this.views = this.constructor.Views;

    if (this.onEnter) {
      this.onEnter();
    }

    this.gotoView(this.defaultView);
  }

  get name() {
    return this.constructor.name;
  } 

  toString() {
    return this.name;
  }

  // BASIC ACTIONS

  goto(areaClass, opts = StateManager.gotoOpts) {
    this.game.goto(areaClass, opts);
    return this;
  }

  gotoView(viewName) {
    let viewClass = this.views[viewName];

    if (!viewClass) {
      throw new Error(`Could not find view "${viewName}" for ${this}.`)
    }

    if (!viewClass.prototype.render) {
      throw new Error(`${viewName} must implement instance method render().`)
    }

    let view = new viewClass(this);

    if (view.beforeRender) {
      view.beforeRender();
    }

    view.render();
    this.currentView = view;
  }

  // STATE MANAGEMENT

  setState(newState) {
    this.state = Object.assign(
      this.state, newState
    );
  }

  saveState() {
    this.game.saveArea(this);
  }
}

Area.Views = {};