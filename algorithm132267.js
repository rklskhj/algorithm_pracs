// 프로그래머스 > 연습문제 > 콜라 문제

function solution(a, b, n) {
  let res = 0;

  while (n >= a) {
    res += Math.floor(n / a) * b;
    n = Math.floor(n / a) * b + (n % a);
  }

  return res;
}

const a1 = 2;
const b1 = 1;
const n1 = 20;

const a2 = 3;
const b2 = 1;
const n2 = 20;

console.log(solution(a1, b1, n1));
console.log(solution(a2, b2, n2));

// 코드 풀이 설명
// 1. while (n >= a): 보유한 빈 병의 수가 교환 가능한 최소 수량(a) 보다 크거나 같을 때까지 반복
// 2. res += Math.floor(n / a) * b: 교환 가능한 최소 수량(a) 만큼 빈 병을 주고 받은 콜라의 수를 더함
// 3. n = Math.floor(n / a) * b + (n % a): 교환 가능한 최소 수량(a) 만큼 빈 병을 주고 받은 콜라의 수를 더하고, 남은 빈 병의 수를 계산
// 4. return res: 총 받은 콜라의 수를 반환
