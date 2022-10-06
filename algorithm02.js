// 문제)
// 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요!

//풀이

function solution(num) {
  return num % 2 == 0 ? "Even" : "Odd"; //삼항연산자를 이용해 num이 2로 나누어져 짝수면 "Even" 홀수면 "Odd"
}

console.log(solution(3));
console.log(solution(4));
