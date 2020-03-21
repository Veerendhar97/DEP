//https://www.codewars.com/kata/5655c60db4c2ce0c2e000026/train/javascript

const compose = (...fns) => arg => fns.reduceRight((res, fn) => fn(res), arg);
