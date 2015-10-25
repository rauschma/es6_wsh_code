/* global suite */
/* global test */

// EXERCISE: create the module impl/class.js so that these tests pass

import assert from 'assert';

import { Point, ColorPoint } from '../impl/class';

suite('class_test');

test('Point', () => {
    let pt = new Point(3, 5);
    
    assert.ok(pt instanceof Point);
    assert.equal(pt.toString(), '(3, 5)');    
});

test('ColorPoint', () => {
    assert.equal(Object.getPrototypeOf(ColorPoint), Point);
    assert.equal(Object.getPrototypeOf(ColorPoint.prototype), Point.prototype);
    
    let cpt = new ColorPoint(2, 6, 'red');
    
    assert.ok(cpt instanceof Point);
    assert.ok(cpt instanceof ColorPoint);
    
    assert.equal(cpt.x, 2);
    assert.equal(cpt.y, 6);
    assert.equal(cpt.color, 'red');
    
    assert.equal(cpt.toString(), '(2, 6) in red');    
});
