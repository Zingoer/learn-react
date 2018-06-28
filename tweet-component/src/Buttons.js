import React, { Component } from 'react';

const ReplyButton = () => (
  <i className="fa fa-reply reply-button" />
);

const LikeButton = () => (
  <i className="fa fa-heart like-button" />
);

const RetweetButton = () => (
  <i className="fa fa-retweet retweet-button" />
);

const MoreButton = () => (
  <i className="fa fa-ellipsis-h more-options-button" />
)

export {ReplyButton, LikeButton, RetweetButton, MoreButton}
