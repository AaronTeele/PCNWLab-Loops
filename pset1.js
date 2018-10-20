/*
    @func average
    @param {array} arr
    @returns {numnber}
    @desc - loop through arr and 
            find average of all numbers
    @example - average([1,2,3,4]); // 2.5
*/
    const average = array => {
        const arrCopy = array.slice();
        let accumulator = 0;
        for(let i = 0; i < arrCopy.length; i++){
            accumulator += arrCopy[i];
        }; return accumulator / arrCopy.length;
    }
    
    console.log(average([1,2,3,4])); // 2.5)
/*
    @func squareEach
    @param {array} arr
    @returns {array}
    @desc - square each value in array
    @example - squareEach([1,2,3,4]); // [1,4,9,16]
*/
    const squareEach = arr => {
        const arrCopy = arr.slice();
        for(let i = 0; i < arrCopy.length; i++){
            arrCopy[i] = arrCopy[i] ** 2;
        };
        return arrCopy;
    };

    console.log(squareEach([1,2,3,4])); // [1,4,9,16]

/*
    @func averageSquare
    @param {array} arr
    @returns {number}
    @desc - loop through arr and 
            square each element
            find the average of the 
            SQUARES of each element in this array
    @example - 
        // turn [1,2,3,4] to [1,4,9,16]
        // then find the averate of the array to the right
        averageSquare([1,2,3,4]); // 7.5
*/
        const averageSquare = arr => {
            const arrCopy = arr.slice();
            let squared = 0;
            for(let i = 0; i < arrCopy.length; i++){
                squared += arrCopy[i] ** 2;
            };
            return squared / arrCopy.length;
        };
        console.log(averageSquare([1,2,3,4])); // 7.5

/*
    @func negateArr
    @param {array} arr
    @returns {array}
    @desc - negate each item in array
    @example
        negateArr([1,2,3,4]); // [-1,-2,-3,-4]
*/
        const negateArr = arr => {
            const arrCopy = arr.slice();
            let negative = []
            for(let i = 0; i < arrCopy.length; i++){
                negative.push(arrCopy[i] * -1);
            }
            return negative;
        };

        console.log(negateArr([1,2,3,4])); // [-1,-2,-3,-4])

/*
    @func reverseArr
    @param {array} arr
    @returns {array}
    @desc - reverse an array
    @example - reverseArr([1,2,3,4]); // [4,3,2,1]
*/
    const reverseArr = arr => {
        const arrCopy = arr.slice();
        const reverse = [];
        for(let i = 0; i < arrCopy.length; i++){
            reverse.unshift(arrCopy[i]);
        }
        return reverse;
    }

    console.log( reverseArr([1,2,3,4])); // [4,3,2,1]

/*
    @func negateBackwards
    @param {array} arr
    @returns {array}
    @desc - reverse AND negate array
    @example
        negateBackwards([1,2,3,4]); // [-4, -3, -2, -1]
*/

    const negateBackwards = arr => {
        const arrCopy = arr.slice();
        const negBack = [];
        for(let i = 0; i < arrCopy.length; i++){
            negBack.unshift(arrCopy[i] * - 1);
        };
        return negBack;
    };

    console.log(negateBackwards([1,2,3,4])); // [-4, -3, -2, -1]