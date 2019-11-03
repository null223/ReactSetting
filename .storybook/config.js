import { configure,addParameters, addDecorator } from '@storybook/react';
import { setConsoleOptions } from '@storybook/addon-console';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withInfo } from '@storybook/addon-info';

setConsoleOptions({
  panelExclude: []
});

function loadStories() {
  const req = require.context('../stories', true, /\.stories\.js$/);
  req.keys().forEach((filename) => req(filename));

}

addDecorator(withInfo({
  inline: false,
  header: true,
  styles: {
    header: {
      h1: { color: 'tomato' },
    },
  },
}));

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    // defaultViewport: 'iphone6',
  }
});

configure(loadStories, module);