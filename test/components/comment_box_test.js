import {renderComponent, expect} from '../test_helper';
import CommentBox from '../../src/components/comment_box';


describe('CommentBox',() => {
    let component;
    beforeEach(() => {
        component = renderComponent(CommentBox);
    });
    it('Has a class Name',() => {
        expect(component).to.have.class('comment-box');
    });
    it('Has a text area',() => {
        expect(component.find('textarea')).to.exist;
    });
    it('Has a Button',() => {
        expect(component.find('button')).to.exist;
    });
    describe('entering some text', () => {
        beforeEach(() => {
          component.find('textarea').simulate('change', 'new comment');
        });
    
        it('shows that text in the textarea', () => {
          expect(component.find('textarea')).to.have.value('new comment');
        });
    
        it('when submitted, clears the input', () => {
          component.simulate('submit');
          expect(component.find('textarea')).to.have.value('');
        });
      });
});