const ran = (min, max) => {
    let array = [];

    for (let i = 0; i < 10; i++) {
        array.push(min + Math.floor((max-min+1) * Math.random()));
    }

    return array;
};

const print = (array) => {
    console.log(array)
};

const result = ran(5, 20);
print(result);