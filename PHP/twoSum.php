<?php

function twoSum($numbers, $target): array
{
    $refObj = [];
    $array_length = count($numbers);
    for ($i = 0; $i <= $array_length; $i++) {
        /*
        ***********************************************************
        reference object stores tha values we have already iterated 
        through.
        store the current number as the key and its index as the 
        value in referenceObj object.
        ***********************************************************
        */
        $refObj[$numbers[$i]] = $i;
        /*
        *********************************************************************
        we will use this referene to find one of the two values sum 
        to target.
        ********************************************************************
        */

        $refValue = $target - $numbers[$i];

        if (in_array($refValue, $refObj)) {
            return array($refObj[$refValue], $i);
        }
    }
    return [];
}
var_dump(twoSum([1, 2, 3], 5));
