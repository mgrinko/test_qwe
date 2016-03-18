'use strict';



class Slider {
  constructor(options) {
    this._el = options.element;
    this._thumb = this._el.querySelector('.thumb');

    this._thumb.onmousedown = this._onMouseDown.bind(this);

    this._onDocumentMouseMove = this._onDocumentMouseMove.bind(this);
    this._onDocumentMouseUp = this._onDocumentMouseUp.bind(this);
  }

  _onMouseDown() {
    document.addEventListener('mousemove', this._onDocumentMouseMove);
  }

  _onDocumentMouseMove(event) {
    this._thumb.style.left = event.clientX + 'px';

    console.log(this._thumb.style.left);

    document.addEventListener('mouseup', this._onDocumentMouseUp)
  }

  _onDocumentMouseUp() {
    document.removeEventListener('mousemove', this._onDocumentMouseMove);
    document.removeEventListener('mouseup', this._onDocumentMouseUp);
  }
}

new Slider({
  element: document.getElementById('slider')
});