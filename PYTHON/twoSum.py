def twoSum(numbers, target):
    refObj = {}

    for number in numbers:

        """
        *********************************************************************
        we will use this referene to find one of the two values sum 
        to target.
        ********************************************************************
        """
        refValue = target - number
        index = numbers.index(number)
        if (refValue in refObj):
            return [refObj[refValue], index]

        """
         ***********************************************************
        reference object stores tha values we have already iterated 
        through.
        store the current number as the key and its index as the 
        value in referenceObj object.
        ***********************************************************
        """
        refObj[number] = index


print(twoSum([1, 2, 3], 4))
