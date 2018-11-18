import React from 'react';
import App from '../App';
import findSiblingList , {
    hasIndexOverlaped,
    getLeftIndex,
    getRightIndex,
} from '../helpers/find_sibling_list';

describe('Finding sibling list', () => {

    it('it determines that index has overlapped', () => {
        expect.assertions(2);
        const leftOutOfBoundsIndex = -1;
        const lengthOfList = 3;
        const indexDidOverlapToLeftSide =
            hasIndexOverlaped(leftOutOfBoundsIndex, lengthOfList);

        expect(indexDidOverlapToLeftSide).toBeTruthy();

        const rightOutOfBoundsIndex = 4;
        const indexDidOverlapToRightSide =
            hasIndexOverlaped(rightOutOfBoundsIndex, lengthOfList);

        expect(indexDidOverlapToRightSide).toBeTruthy();
    });

    it('it determines that index has not overlapped', () => {
        expect.assertions(2);
        const firstListIndex = 0;
        const lengthOfList = 3;
        let indexDidOverlap =
            hasIndexOverlaped(firstListIndex, lengthOfList);

        expect(indexDidOverlap).toBeFalsy();

        const lastIndex = 2;
        indexDidOverlap =
            hasIndexOverlaped(lastIndex, lengthOfList);

        expect(indexDidOverlap).toBeFalsy();
    });

    it('determines the index of the list to the left', () => {
        expect.assertions(3);
        let leftIndex = 2;
        let hasItemOverlaped = false;
        const lengthOfList = 3;

        let newLeftIndex =
            getLeftIndex(leftIndex, hasItemOverlaped, lengthOfList);

        expect(newLeftIndex).toBe(2);

        /* ******************************************************** */

        leftIndex = 0;
        hasItemOverlaped = true;

        newLeftIndex =
            getLeftIndex(leftIndex, hasItemOverlaped, lengthOfList);

        expect(newLeftIndex).toBe(2);


        /* ******************************************************** */

        leftIndex = 1;
        hasItemOverlaped = false;

        newLeftIndex =
            getLeftIndex(leftIndex, hasItemOverlaped, lengthOfList);

        expect(newLeftIndex).toBe(1);
    });




    it('finds in progress list from general list', () => {
        // findSiblingList();
    });
});
