//문제) 핸드폰 번호 가리기

//개인정보 보호를 위해 번호의 일부를 가리는 문자열을 리턴하는 함수를 작성해야한다

//풀이)

function solution(phone_number) {
  return "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
}

console.log(solution("01033334444"));

//번호를 지워줄 "*"에 .repeat() 함수를 사용하여 번호의 길이에 -4를 해주고 그 값을 + .slice() 함수를 이용해
//뒤에 4자리의 번호를 잘라 붙여준다!

//.repeat() : 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환합니다.
// .slice() : 어떤 배열의 begin부터 end까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다.
// 원본 배열은 바뀌지 않습니다.
