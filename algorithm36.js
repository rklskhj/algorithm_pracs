//문제) 문자열 내림차순으로 배치하기

//풀이)

function solution(s) {
  return s.split("").sort().reverse().join("");
}

// .split('')을 통해 글자 하나하나 배열로 나누어 .sort()로 오름차순으로 변경 후 reverse() 함수로 위치를 반대 시켜준뒤
// join('') 을 통해 다시 하나로 묶어주었다!
