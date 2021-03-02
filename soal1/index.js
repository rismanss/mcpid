function twoSums(arr, target) {
  let tmp = [];
  let result = [];
  for(let i = 0; i < arr.length; i++) {
    
    // check penjumlahan i dengan length 1,2,3... dan seterusnya hingga mendapatkan hasil === target 
    tmp.push(arr[i]);

    for(let j = 0; j < tmp.length; j++) {
      // check hasil === target
      // console.log((arr[i] + arr[j]) === target);

      // j !== i agar hasil tidak mengambil nilai dari angka yang sama [0,0] .
      if ((arr[i] + arr[j]) === target && j !== i) {
        // check length
        // console.log(j, i);

        result.push(j, i);
      }
    }

  }

  return result;
};

console.log(twoSums([3,3], 6), ' ...test3');
console.log(twoSums([3,2,4], 6), ' ...test2');
console.log(twoSums([2,7,11,15], 13), ' ...test1');
