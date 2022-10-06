//문제) 정수 내림차순으로 배치하기

//풀이)

function solution(n) {
  return parseInt(
    String(n)
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}

// 일단 문자열로 바꿔주고 .split('') 메서드를 사용해 글자 하나하나로 나눠준뒤 .sort((a, b) => b - a) 로 내림차순을 해줍니다
// 그리고 .join('') 메서드로 다시 하나로 묶어준뒤 Number() 메서드로 크게 묶어 주었다!

// .sort((a, b) => b - a) : 내림차순
// .sort((a, b) => a - b) : 올림차순
// Number() 대신 parseInt() 로도 가능
// String() 대신 toString() 으로도 가능
// join() 나눠진 문자들을 하나로 묶어주는 배열을 만들어줌
