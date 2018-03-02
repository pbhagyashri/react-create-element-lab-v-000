import React from 'react';
import ReactDOM from 'react-dom';

// IMPORTANT!!!! uncomment the lines below to make your tests work
var title = React.createElement('h1', {}, 'An Awesome Person');
var tagline = React.createElement('p', {}, 'Who is learning React');

var interests = React.createElement('ul', {className: 'my-interests'},
  [
    React.createElement('li', {}, 'JavaScript'),
    React.createElement('li', {}, 'React'),
    React.createElement('li', {}, 'Movies'),
    React.createElement('li', {}, 'Ice cream')
  ]
)

var meInReact = React.createElement('div', {className: 'me'}, [title, tagline, interests])


ReactDOM.render(
  meInReact,
  document.getElementById('global')
);

export default meInReact
