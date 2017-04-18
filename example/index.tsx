import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Button from '../lib';

ReactDOM.render(
  <Button
    text="hi"
    count={4}
    countUpdater={prevState => ({ count: prevState.count + 3 })}
  />,
  document.getElementById('app')
);
