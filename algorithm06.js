//문제) 없는 숫자 더하기

// 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열이 매개변수로 주어지는데
// 매개변수에서 찾을 수 없는 0 부터 9까지의 숫자를 찾아서 더해주 라는 문제!

//풀이)

function solution(numbers) {
  return 45 - numbers.reduce((a, b) => a + b, 0);
}
//간단하게 설명 하면 0~9까지의 합인 45에서 .reduce 함수를 적용하여 합산한 배열의 모든 값을 빼주었다
