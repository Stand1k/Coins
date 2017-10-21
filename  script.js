    var arr = [4,4,4,4,4,4,4,4,4];

    function randomInteger(min,max) {
        var rand = min + Math.random() * (max + 1 - min);
         rand = Math.floor(rand); 
         return rand;
    }

    var item = randomInteger(0,8);
    var number =  randomInteger(1,7);
    if(number === 4){
        number = number - 1;
    }
    
     console.log(arr);
    arr[item] =  number;


    if (arr[0] + arr[1]+ arr[2] > arr[3] + arr[4] + arr[5]) { // 123 > 456 //
        if (arr[0] + arr[1] + arr[2] > arr[6] + arr[7] + arr[8]) { // 123 > 789
            if (arr[0] > arr[2]) {
                console.log(arr[0]);
            } else if (arr[0] < arr[2]) {
                console.log(arr[2]);
            } else {
                console.log(arr[1]);
            }
        } else{
            if (arr[3] < arr[5]) {
                console.log(arr[3]);
            } else if (arr[3] > arr[5]) {
                console.log(arr[5]);
            } else {
                console.log(arr[4]);
            }
        } 
    } else if (arr[0] + arr[1] + arr[2] > arr[6] + arr[7] + arr[8]) { //123 > 789  //
        if (arr[0] + arr[1] + arr[2] > arr[3] + arr[4] + arr[5]) { // 123 > 456
            if (arr[0] > arr[2]) {
                console.log(arr[0]);
            } else if (arr[0] < arr[3]) {
                console.log(arr[3]);
            } else {
                console.log(arr[2]);
            }
        } else {
            if (arr[6] < arr[8]) {
                console.log(arr[6]);
            } else if (arr[6] > arr[8]) {
                console.log(arr[8]);
            } else {
                console.log(arr[7]);
            }
        }
     } else if (arr[3] + arr[4] + arr[5] > arr[0] + arr[1] + arr[2]) { // 456 > 123 //
        if (arr[3] + arr[4] + arr[5] > arr[6] + arr[7] + arr[8]) { // 456 > 789
                if (arr[3] > arr[5]) {
                    console.log(arr[3]);
                } else if (arr[3] < arr[5]) {
                    console.log(arr[5]);
                } else {
                    console.log(arr[4]);
                }
            } else{
                if (arr[0] < arr[2]) {
                    console.log(arr[0]);
                } else if (arr[0] > arr[2]) {
                    console.log(arr[2]);
                } else {
                    console.log(arr[1]);
                }
            }

    } else if (arr[3] + arr[4] + arr[5] > arr[6] + arr[7] + arr[8]) { // 456 > 789 //
        if (arr[3] + arr[4] + arr[5] > arr[0] + arr[1] + arr[2]) { // 456 > 123
                if (arr[3] > arr[5]) {
                    console.log(arr[3]);
                } else if (arr[3] < arr[5]) {
                    console.log(arr[5]);
                } else {
                    console.log(arr[4]);
                }
            }else{
                if (arr[6] < arr[8]) {
                    console.log(arr[6]);
                } else if (arr[6] < arr[8]) {
                    console.log(arr[8]);
                } else {
                    console.log(arr[7]);
                }
            }

     } else if (arr[6] + arr[7] + arr[8] > arr[0] + arr[1] + arr[2]) { //789 > 123 //
        if (arr[6] + arr[7] + arr[8] > arr[3] + arr[4] + arr[5]) { // 789 > 456
                if (arr[6] > arr[8]) {
                    console.log(arr[6]);
                } else if (arr[6] < arr[8]) {
                    console.log(arr[8]);
                } else {
                    console.log(arr[7]);
                }
            } else{
                if (arr[0] < arr[2]) {
                    console.log(arr[0]);
                } else if (arr[0] < arr[2]) {
                    console.log(arr[2]);
                } else {
                    console.log(arr[1]);
                }
            }


     } else if (arr[6] + arr[7] + arr[8] > arr[3] + arr[4] + arr[5]) { //789 > 456  //
        if (arr[6] + arr[7] + arr[8] > arr[0] + arr[1] + arr[2]) { // 789 > 123
            if (arr[6] > arr[8]) {
                console.log(arr[6]);
            } else if (arr[6] < arr[8]) {
                console.log(arr[8]);
            } else {
                console.log(arr[7]);
            }
        } else {
            if (arr[3] < arr[5]) {
                console.log(arr[3]);
            } else if (arr[3] < arr[5]) {
                console.log(arr[5]);
            } else {
                console.log(arr[4]);
            }
        }
    }



