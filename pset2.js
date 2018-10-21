/*
    @func removeNegatives
    @param {array} arr
    @returns {array}
    @desc - takes all engative numbers and makes positive
    @example - removeNegatives([-3,-2,1,2,3,-4]); // [3,2,1,2,3,4]
*/
    const removeNegatives = arr => {
        const arrCopy = [];
        for(let i = 0; i < arr.length; i++){
            arrCopy.push(Math.abs(arr[i]));
        }; return arrCopy;
    };

    console.log(removeNegatives([-3,-2,1,2,3,-4])); // [3,2,1,2,3,4]
/*
    @func findVal
    @param {array} arr
    @param {anything} val
    @returns {number}
    @desc - checks each value of array and compares to val
            if found, returns the INDEX at which val was found
            otherwise, returns -1
    @example
        findVal([1,2,3,4], 1); // 0
        findVal([1,2,3,4], 4); // 3
        findVal([1,2,3,4], 9); // -1
*/
    const findVal = (arr, val) => {
        for (let i = 0; i < arr.length; i++){
            if (arr[i] === val) {
                return i;
            };            
        }; return -1
    };

    console.log(findVal([1,2,3,4], 1)); // 0
    console.log(findVal([1,2,3,4], 4)); // 3
    console.log(findVal([1,2,3,4], 9)); // -1

/*
    @func removeOdds
    @param {array} arr
    @returns {array}
    @desc - checks each value of array
            if odd, remove from array
            otherwise, keep in array
    @example
        removeOdds([1,2,3,4]); // [2,4]
        removeOdds([1,"2",3,4]); // [4]
*/
    const removeOdds = arr => {
        const evens = [];
    
        for (let i = 0; i < arr.length; i++){
            if (typeof arr[i] === "number" && arr[i] % 2 === 0) {
                evens.push(arr[i]);
            };
        }; return evens;
    };

    console.log(removeOdds([1,2,3,4])); // [2,4]
    console.log(removeOdds([1,"2",3,4])); // [4]

/*
    @func addSquares
    @param {array} arr
    @returns {array}
    @desc - for each value in array, square it then add to array
    @example - 
        addSquares([1,2,3,4); // [1,2,3,4,1,4,9,16]
*/
    const addSquares = arr => {
        const arrCopy = arr.slice();
        for (let i = 0; i < arr.length; i++){
            arrCopy.push(arrCopy[i] ** 2);
        };
        return arrCopy;
    };

    console.log(addSquares([1,2,3,4])); // [1,2,3,4,1,4,9,16])
/*
    @func doubleify
    @param {array} arr
    @returns {array}
    @desc - take each value of array, add same value right after
    @example - doubleify([1,2,3,4); // [1,1,2,2,3,3,4,4]
*/

    const doubleify = arr => {
        let newArr = [...arr];

            for(let i = 0; i < arr.length; i++){
                newArr.splice(arr[i] + 2 , 0, arr[i]);
            } return newArr;
    }
    console.log(doubleify([1,2,3,4])); // [1,1,2,2,3,3,4,4])


    const doubleify = arr => {
        const arrCopy = arr.slice();
        // for (let i = 0; i < arr.length; i++){
        //     for (let j = 0; j < 3; j++) {
        //         arrCopy.push(arr[i]);
        //     };
        // };
        for (let i = 0; i < arrCopy.length; i += 2){
            arrCopy.splice(i, 0, arrCopy[i])
        }
        return arrCopy;
        }

    console.log(doubleify([1,2,3,4])); // [1,1,2,2,3,3,4,4])
/*
    @func findMax
    @param {array}
    @returns {number}
    @desc - find largest number in array
    @example - findMax([1,2,3,99,4]); // 99 
*/

    const findMax = arr => {
        // let max = Math.max.apply(null, arr)
        // return max;
        let largest = arr[0];
        for (let i = 0; i < arr.length; i++){
            if(arr[i] > largest) {
                largest = arr[i];
            }; 
        }; return largest;
    }

    console.log(findMax([1,2,3,99,4]));