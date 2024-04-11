// Three ways to sum to n

// 1: Using a for loop
/* O(n): If n doubles, the time it takes for the function to execute also roughly 
doubles. This is generally considered acceptable performance, but for very large 
inputs, it might become slow. */
function sum_to_n_a(n: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// 2: Using the formula for the sum of an arithmetic series
/* O(1): of time complexity. It has a time complexity of O(1), which means the time 
it takes to compute the sum does not increase with the size of the input n. No matter
how large n is, it will always take roughly the same amount of time to compute the sum. */
function sum_to_n_b(n: number): number {
    return n * (n + 1) / 2;
}

// 3: Using recursion
/* O(n): The time complexity of this implementation is O(n), which means the time it 
takes to compute the sum increases linearly with the size of the input n. If n doubles, 
the time it takes for the function to execute also roughly doubles. This is generally
considered acceptable performance, but for very large inputs, it might become slow. */
function sum_to_n_c(n: number): number {
    if (n === 1) {
        return 1;
    } else {
        return n + sum_to_n_c(n - 1);
    }
}