//문제) 자릿수 더하기

//풀이)

function solution(n) {
  return String(n)
    .split("")
    .reduce((acc, crr) => acc + Number(crr), 0);
}

// 간단하게 숫자를 문자열로 바꿔주고 split 메서드로 글자 하나하나 문자열로 나눠주고 리듀스 메서드를 이용해
// 그 문자열들의 합을 구해준다 Number() 메서드를 사용해 잠깐 숫자로 바꿔서 더해준다!
