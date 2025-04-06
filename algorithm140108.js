// 프로그래머스 > 연습문제 > 문자열 나누기

// 첫 풀이
function solution1(s) {
  let answer = 0;
  let i = 0;

  while (i < s.length) {
    let x = s[i]; // 기준 문자
    let xCount = 1; // 기준 문자 1개 봤음
    let notXCount = 0;

    for (let j = i + 1; j < s.length; j++) {
      if (s[j] === x) {
        xCount++;
      } else {
        notXCount++;
      }

      if (xCount === notXCount) {
        break; // 잘라야 할 타이밍
      }
    }

    answer++; // 조각 하나 완성
    i += xCount + notXCount; // 다음 조각으로 이동
  }

  return answer;
}

// 둘째 풀이
function solution(s) {
  let answer = 0;
  let current;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (count === 0) {
      answer++;
      current = s[i];
      count = 1;
    } else {
      if (current !== s[i]) count--;
      else count++;
    }
  }

  return answer;
}
const s1 = "banana";
const s2 = "abracadabra";
const s3 = "aaabbaccccabba";

console.log(solution1(s1));
console.log(solution1(s2));
console.log(solution1(s3));

// 문제 풀이
// 첫 번째 문제풀이 처럼 xCount와 notXCount를 비교하는 방식으로 풀이
// 둘째 풀이
// 첫 번째 풀이와 다르게 xCount와 notXCount를 하나의 count로 처리
// count가 0이 될 때마다 자동으로 잘라야할 타이밍을 판단
