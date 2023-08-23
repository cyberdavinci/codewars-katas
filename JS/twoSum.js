const twoSum = (numbers, target) => {
  let referenceObj = {};
  for (let i = 0; i <= numbers.length; i++) {
    /*
    *********************************************************************
    we will use this referene to find one of the two values sum 
    to target.
    ********************************************************************
    */

    const referenceValue = target - numbers[i];
    if (referenceValue in referenceObj)
      return [referenceObj[referenceValue], i];

    referenceObj[numbers[i]] = i;
    /*
    ***********************************************************
    reference object stores tha values we have already iterated 
    through.
    store the current number as the key and its index as the 
    value in referenceObj object.
    ***********************************************************
    */
  }

  return [];
};

console.log(twoSum([1, 2, 3], 4));
