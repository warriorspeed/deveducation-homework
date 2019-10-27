// Найти максимальный  элемент массива
//[1 , 22 , 7 , 4 , 74 , 88 , -2  , 121 ]
    function findMax(array) {
        if (arguments.length > 1 || arguments.length == 0) {
            return false
        }
        if (typeof (array) !== 'object') {
            return false
        }
        let max = array[0];
        for (var i = 0; i < array.length; i++) {
            if (max < array[i]) max = array[i];
        }

        return max;
    }

