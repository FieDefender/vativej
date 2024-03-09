// 计算数组的方差
function calculateVariance(arr) {
  const mean = calculateMean(arr);
  const squaredDifferences = arr.map(val => Math.pow(val - mean, 2));
  return calculateMean(squaredDifferences);
}

// 计算数组的最大值
function calculateMax(arr) {
  return Math.max(...arr);
}

// 计算数组的最小值
function calculateMin(arr) {
  return Math.min(...arr);
}