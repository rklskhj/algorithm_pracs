//문제) 문자열 내 마음대로 정렬하기

//풀이)

function solution(strings, n) {
  return strings.sort().sort((a, b) => a.charCodeAt(n) - b.charCodeAt(n));
}

// 먼저 문자열을 .sort() (오름차순)함수를 이용해 알파벳 순서로 나누어 주었고 그리고 아스키 코드를 이해해야 알 수 있는
// charCodeAt() 을 사용해 지정된 인덱스 위치에 있는 글자를 비교해 내림차순을 해주었다

// 이번 문제로  .sort() 와 charCodeAt() 를 좀 더 알아보는 시간이었다
