//문제) 이상한 문자 만들기

//풀이)

function solution(s) {
  return s
    .split(" ")
    .map((word) =>
      word
        .split("")
        .map((a, i) =>
          i % 2 === 0 ? word[i].toUpperCase() : word[i].toLowerCase()
        )
        .join("")
    )
    .join(" ");
}

// 각 단어의 문자를 짝수번째 문자는 대문자, 홀수번째 문자는 소문자로 바꿔주는 문제이다
// 일단 s 안에 있는 "try hello world"를 .split(" ") 메서드를 이용해 "try", "hello", "world" 세 단어로 나눠주고
// .map() 메서드를 이용해 배열내 함수를 사용합니다 word 라는 매개변수 만들어 "try", "hello", "world" 나누어진 배열을 글자로 나눠 줍니다
// 다시한번 .split("") 을 이용해 글자 하나하나의 배열로 만들어 주었고 .map()을 이용해 변수 a, index i 요소?를 주고
// 이제 그 각각의 글자들을 짝수번째면 대문자 홀수번째면 소문자로 삼항 연산자를 이용하여 나누어 줍니다!
// 그리고 마지막으로 다시 문자들을 단어로 문장으로 .join() 함수를 이용해 풀어준 순서대로 다시 묶어주면 끝!
