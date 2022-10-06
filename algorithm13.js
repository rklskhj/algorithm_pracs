//문제) 2016년

//실제 2016년의 a월, b일로 입력을 받아 무슨 요일인지 리턴하는 함수를 만들라는 문제

//입출력 예
// a	b	result
// 5	24	"TUE"

//풀이)

function solution(a, b) {
  return new Date(2016, a - 1, b).toString().slice(0, 3).toUpperCase();
}
console.log(solution(5, 24)); // "TUE"

//  -Date 클래스의 다양한 매개변수- 최대 밀리초 단위까지 구성되어있다!
// new Date(), new Date(value), new Date(dateString), new Date(year, monthIndex ...)
// *주의 할 점은 month는 일반 월이 아니라 인덱스로 되어있어서 1월이라면 0이 들어가야한다.
// 2021년 8월 30일은 new Date(2021, 7, 30)으로 구성하면 된다.
// 결과는 Mon Aug 30 2021 00:00:00 GMT+0900 (한국 표준시) 이다.

// dateString의 경우 'December 17, 1995 03:24:00' 또는 '1995-12-17T03:24:00' 같은 표기가 해당한다.
// 그렇기 때문에 toString() 함수를 이용해 문자열로 반환 시키고 .slice(0,3) 0번째 부터 글자 3개를 잘라 .toUpperCase()로
// 자른 글자들은 대문자로 리턴하여 원하는 결과를 얻었다!
