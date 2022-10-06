//문제) 평균 구하기

//정수를 담고 있는 배열 arr의 평균값을 리턴하는 함수를 만들어라

//풀이)
function solution(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}
let arr = [1, 2, 3, 4];
// let arr = [5,5]

//arr.reduce() 를 사용해 배열의 합을 구한뒤 arr.length 만큼 나누어 주었다
