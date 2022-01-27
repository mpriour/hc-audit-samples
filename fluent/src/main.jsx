import { render } from 'preact';
import { Provider, teamsTheme } from '@fluentui/react-northstar'
import { App } from './app';
import './index.css';

render(
<Provider theme={teamsTheme}>
  <App />
</Provider>,
document.getElementById('app'))
