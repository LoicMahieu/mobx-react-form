import { expect } from 'chai';

import $ from './data/_.flat'; // FORMS

describe('Form submit() decoupled callback', () => {
  // $I
  it('$I.submit() should call onSuccess callback on valid form', (done) => {
    $.$I.submit({
      onSuccess: (form) => {
        expect(form.isValid).to.be.true; // eslint-disable-line
        done();
      },
    });
  });

  // $I
  it('$I.submit() should return a promise fulfilled with the return of onSuccess callback', () => {
    const foo = $.$I.submit({
      onSuccess: () => 'bar',
    });

    return foo
      .then((v) => {
        expect(v).to.equal('bar');
      });
  });

  // $N
  it('$N.submit() should call onError callback on invalid form', (done) => {
    $.$N.submit({
      onError: (form) => {
        expect(form.isValid).to.be.false; // eslint-disable-line
        done();
      },
    });
  });
});
