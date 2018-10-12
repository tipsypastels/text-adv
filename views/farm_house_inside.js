Farm.Views.FarmhouseInside = class extends View.icon('couch') {
  render() {
    this
      .text("Welcome to the farm house's cozy interior.")
      .buttons({
        'Go Outside': 'Farmhouse',
      });
  }
}