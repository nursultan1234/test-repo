const makeBoard=(x, y) => {
    for (let i = 0; i < y; i++) {
        let string = '', a, b;

        if (i % 2) {
            a = '■';
            b = '□';
        } else {
            a = '□';
            b = '■';
        }

        for (let j = 0; j < x; j++) {
            if (j % 2) {
                string += a;
            } else {
                string += b;
            }
        }

        console.log(string);
    }
}

makeBoard(8,8);