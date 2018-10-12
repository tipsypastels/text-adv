Start.Views.StartName = class extends View.icon('signature') {
  render() {
    this
      .text('Welcome! Enter your name to begin.')
      .input(result => {
        this.game.player_name = result;
        this.gotoView('StartReady');
      });
  }
}