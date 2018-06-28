import React, { Component } from 'react';
import './index.css';

import Avatar from './Avatar';
import NameWithHandle from './NameWithHandle';
import Time from './Time';
import Message from './Message';
import { ReplyButton, RetweetButton, LikeButton, MoreButton } from './Buttons';

export default class Tweet extends Component {
  render() {
    return (
      <div className="tweet">
        <Avatar />
        <div className="content">
          <NameWithHandle />
          <Time />
          <Message />
          <div className="buttons">
            <ReplyButton />
            <RetweetButton />
            <LikeButton />
            <MoreButton />
          </div>
        </div>
      </div>
    );
  }
}
