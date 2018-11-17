const BEGINNING_OF_LIST = 0;

const hasIndexOverlaped = (index, lengthOfList) => {
    const isItemOverlaped = index < BEGINNING_OF_LIST || index >= lengthOfList;

    return isItemOverlaped;
};

const getLeftIndex = (leftIndex, isItemOverlaped, lengthOfList) => {
    const endOfList = lengthOfList - 1;

    return isItemOverlaped ? endOfList : leftIndex;
};

const getRightIndex = (rightIndex, isItemOverlaped) => {
    return isItemOverlaped ? BEGINNING_OF_LIST : rightIndex;
};

const findSiblingList = (currentIndex, direction, lengthOfList) => {
    let listIndex;
    let isItemOverlaped;

    if (direction === 'right') {
        const rightIndex = currentIndex + 1;
        isItemOverlaped = hasIndexOverlaped(rightIndex, lengthOfList);
        listIndex = getRightIndex(rightIndex, isItemOverlaped);
    } else {
        const leftIndex = currentIndex - 1;
        isItemOverlaped = hasIndexOverlaped(leftIndex);
        listIndex = getLeftIndex(leftIndex, isItemOverlaped, lengthOfList);
    }

    return listIndex;
};

export default findSiblingList;
