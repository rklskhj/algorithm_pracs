//문제) 문자열 내 p와 y의 개수

//풀이)

function solution(s) {
  let change = s.toLowerCase();

  let check_p = change.split("p").length;
  let check_y = change.split("y").length;

  return check_p == check_y ? true : false;
}

// 문제에서 개수를 비교 할 때 대소문자를 구별하지 않는다고 해서 문자열을 .toLowerCase() 함수를 이용해
// 소문자로 변환해 주고 변수 p, y를 만들어 .split() 메소드를 이용해 check_p 에는 "p"를 기준으로 나누고
// check_y 는 "y"를 기준으로 문자열을 나누어준것을 .length를 이용해 길이를 저장해 주었다.
// 그리고 check_p == check_y 가 같다면 true, 다르면 false를 리턴해 주었다!
