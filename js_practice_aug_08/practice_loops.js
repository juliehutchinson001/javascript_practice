const apiRes = [
    {
        img: {
            small: 'small.png',
            medium: 'medium.png',
            large: 'large.png'
        },
        title: 'Some Title',
        subTitle: 'Some Sub Title'
    },
    {
        img: {
            small: 'small.png2',
            medium: 'medium.png2',
            large: 'large.png2'
        },
        title: 'Some Title2',
        subTitle: 'Some Sub Title2'
    },
    {
        img: {
            small: 'small.png3',
            medium: 'medium.png3',
            large: 'large.png3'
        },
        title: 'Some Title3',
        subTitle: 'Some Sub Title3'
    }
]

apiRes.forEach((item) => {

    const innerObj = item['img'];

    if (innerObj.small) {
        innerObj.small = 'small.jpg';
    } 
    
    if (innerObj.medium) {
        innerObj.medium = 'medium.jpg';
    } 
    
    if (innerObj.large) {
        innerObj.large = 'large.jpg';
    }

});

let apiResNewArr = [];

apiRes.forEach((item, index) => {

    apiResNewArr.push(item);

    const innerObj = apiResNewArr[index]['img'];

    if (innerObj.small) {
        innerObj.small = 'small.jpg';
    } 
    
    if (innerObj.medium) {
        innerObj.medium = 'medium.jpg';
    } 
    
    if (innerObj.large) {
        innerObj.large = 'large.jpg';
    }

});

const newArr = apiRes.map((item) => {
    const innerObj = item['img'];

    if (innerObj.small) {
        innerObj.small = 'small.jpg';
    } 
    
    if (innerObj.medium) {
        innerObj.medium = 'medium.jpg';
    } 
    
    if (innerObj.large) {
        innerObj.large = 'large.jpg';
    }
});