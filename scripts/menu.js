'use strict';

class Menu {
  constructor(options) {
    this._el = options.element;
    this._template = document.getElementById('menu-template').innerHTML;
    this._templateFunction = _.template(this._template);

    this._el.innerHTML = this._templateFunction(options.data);

    this._el.addEventListener('click', this._onTitleClick.bind(this));

    this._prepareScroll();
  }

  _onTitleClick(event) {
    this._el.classList.toggle('menu_closed')
  }

  _onDocumentScroll() {
    if (pageYOffset > this._startPosition.top
      && !this._el.classList.contains('menu_sticky')
    ) {
      this._el.classList.add('menu_sticky');
    }

    if (pageYOffset <= this._startPosition.top
      && this._el.classList.contains('menu_sticky')
    ) {
      this._el.classList.remove('menu_sticky');
    }
  }

  _prepareScroll() {
    this._startPosition = this._el.getBoundingClientRect();

    window.addEventListener('scroll', this._onDocumentScroll.bind(this));
  }
}