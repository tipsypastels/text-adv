class View {

  /* ITS LIKE A CLOSURE
   * BUT A CLASS omg
   * this is cool
   */

  static icon(fa_icon) {
    return class extends this {
      get icon() {
        return fa_icon;
      }
    }
  }

  constructor(area) {
    this.area     = area;
    this.state    = area.state;
    this.game     = area.game;
    this.setState = area.setState;

    this.clearPage();
    this.renderIcon();
  }

  clearPage() {
    $('.field').html('');
  }

  renderIcon() {
    let { icon } = this;
    if (!icon) {
      return;
    }

    $('#icon').html(`
      <i class="fas fa-${icon}"></i>
    `);
  }

  text(text) {
    $("#text").text(text);
    return this;
  }

  buttons(buttons) {
    let view     = this;
    let $buttons = $('#buttons');
    
    for (let title in buttons) {
      let buttonValue = buttons[title];
      let cb;

      switch(typeof buttonValue) {
        case 'function': {
          cb = buttonValue;
          break;
        }

        case 'string': {
          cb = function() {
            this.gotoView(buttonValue)
          }.bind(view);
          break;
        }
      }

      let newButton = 
        $(`<button>${title}</button>`).click(() => {
          cb.call(view);
        });

      $buttons.append(newButton);
    }

    return this;
  }

  input(cb) {
    let view   = this;
    let $input = $('#input');

    let currentValue = this.game.player_name || '';

    $input.append(`
      <input 
        id="prompt" 
        type="text" 
        autofocus 
        value="${currentValue}"
        placeholder="Type here..." />
    `);

    let submitButton =
      $('<button>Submit</button>').click(() => {
        let value = $('input#prompt').val();

        if (value) {
          cb.call(view, value);
        }
      });

    $input.append(submitButton);
  }

  gotoView(viewName) {
    this.area.gotoView(viewName);
  }
}