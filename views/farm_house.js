Farm.Views.Farmhouse = class extends View.icon('leaf') {
  render() {
    this
      .text("Welcome to the farm house!")
      .buttons({
        'Go Inside': 'FarmhouseInside',
        'Check out Cows': 'FarmCows',
      });
  }
};