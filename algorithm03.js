//문제
//단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요,
//단더의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

function solution(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}
console.log("abcde");
console.log("qwer");

//String.substr() 메서드를 사용하고 Math.ceil() 함수를 이용해 s.length / 2 하고 -1,
//s.length를 % 2를 하려 0이면 2 아님 1을 리턴하였다

// String.suㅠstr() : 문자열에서 특정 위치에서 시작하여 특정 문자 수 만큼의 문자들을 반환합니다
// Math.ceil() : 유의값의 가장 가까운 정수이거나 유의값이 지정된 경우 가장  가까운 배수로 올린 값
//                    (쉽게 설명하면 소수점이 붙으면 값 올림)
// 삼항 연산자 : 조건문 ( ? ), (조건문이 참일 경우) (:) (조건문이 거짓일 경우) 실행할 표현식을 배치
