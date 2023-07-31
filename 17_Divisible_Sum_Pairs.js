function divisibleSumPairs(n, k, ar) {
    var counter = 0;
    for (var i = 0; i < n-1; i++) {
        // console.log("Round of i : " + i);
        // console.log("Value i : =====> " + ar[i]);
        for(var j = 0; j < n; j++) {
            if (j > i) { 
                // console.log("Round of j : " + j);
                // console.log("Value j : " + ar[j]);
                // console.log("ar[i] : " + ar[i]);
                // console.log("ar[j] : " + ar[j]);
                // console.log("ar[i] + ar[j] : " + ar[i] + ar[j]);
                if ((ar[i] + ar[j]) % k === 0) {
                    // console.log("ar[i] + ar[j] : " + ar[i] + ar[j]);
                    counter++
                }
            }
        }
    }

    return counter;
}

ar = [1, 2, 3, 4, 5, 6]
n = ar.length
var k = 5
console.log(divisibleSumPairs(n, k, ar));
