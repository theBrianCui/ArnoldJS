var array = [2, 5, 1, 6, 8, 12, -4, 2];

function mergesort(input) {
    if (input.length > 1)
        return merge(
            mergesort(input.slice(0, input
                .length / 2)),
            mergesort(input.slice(input
                .length / 2)));
    return input
}

function merge(
    left, right
) {
    var result = [];
    var leftIndex = 0;
    var rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex++]);
        } else {
            result.push(right[rightIndex++]);
        }
    }

    if (leftIndex === left.length) {
        result = result.concat(right.slice(rightIndex));
    } else
    if (rightIndex === right.length) {
        result = result.concat(left.slice(leftIndex));
    }
    return result;
}

console.log(
    mergesort(array)
);