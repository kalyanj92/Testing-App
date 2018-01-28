import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('App Testing' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('shows a comment box', () => {
    expect(component.find('.comment-box')).to.exist;
  });
  it('shows a comment List', () => {
    expect(component.find('.comment-list')).to.exist;
  });
});
