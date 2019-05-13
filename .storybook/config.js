import { configure } from '@storybook/angular';

function loadStories() {
  require('../src/stories/index.stories.ts');
}

configure(loadStories, module);
