import { Story, Meta } from '@storybook/angular/types-6-0';
import { MovieListComponent } from './movie-list.component';

export default {
  title: 'App/Movie List',
  component: MovieListComponent
} as Meta

const Template: Story<MovieListComponent> = (args: MovieListComponent) => ({ props: args });
export const Case1 = Template.bind({});

