//문제) 자연수 뒤집어 배열로 만들기

//풀이)

function solution(n) {
  return String(n)
    .split("")
    .reverse()
    .map((a) => parseInt(a));
}

// 숫자를 문자열로 바꿔주고 글자 하나하나로 나눈뒤 .reverse()메서드로 문자열을 반전 시켜주고
// .map() 메서드를 사용해 다시 문자열을 숫자로 바꿔주었다!
