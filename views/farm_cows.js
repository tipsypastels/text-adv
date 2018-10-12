Farm.Views.FarmCows = class extends View.icon('bell') {
  render() {
    let { saw_cows } = this.state;

    this
      .text(`The cows are ${saw_cows ? 'still' : 'indeed'} cowing.`)
      .buttons({
        'Neat': 'Farmhouse',
      })
      .setState({ saw_cows: true });
  }
}