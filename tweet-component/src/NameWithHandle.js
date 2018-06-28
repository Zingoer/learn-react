import React, { Component } from 'react';

export default class NameWithHandle extends Component {
  render() {
    return (
      <span className="name-with-handle">
        <span className="name">Xiaoxi Pang</span>
        <span className="handle">@yourhandle</span>
      </span>
    );
  }
}
