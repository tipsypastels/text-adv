Start.Views.StartReady = class extends View.icon('redo') {
  render() {
    this
      .text(`Your name is ${this.game.player_name}?`)
      .buttons({
        'No': 'StartName',
        'Yes': () => this.area.goto(Farm),
      });
  }
}