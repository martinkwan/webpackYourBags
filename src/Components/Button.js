import $ from 'jquery';
import Mustache from 'mustache';
import template from './Button.html';
import './Button.scss';

export default class Button {
  constructor(link) {
    this.link = link;
  }

  onClick(event) {
    event.preventDefault();
    alert(this.link);
  }

  render(node) {
    const text = $(node).text();

    $(node).html(
      Mustache.render(template, {text})
    );

    // Attach our listeners
    $('.button').click(this.onClick.bind(this));
  }
}
