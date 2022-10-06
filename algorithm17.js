//문제)

// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해 주는 함수를 완성하고
// s에 알파벳이 들어가있으면 false 리턴, 숫자로만 되어있으면 true 리턴 하는 문제!
// 한 문제 한 문제 풀 때마다 쉽지 않다..

//풀이)

function solution(s) {
  // s의 길이가 4 혹은 6이 아닐 경우 false를 리턴한다.
  if (s.length !== 4 && s.length !== 6) return false;

  // 문자열을 하나 씩 가져와 숫자로 변환 되는지 확인하고
  // 숫자로 변환되지 못할 경우 false를 리턴한다.
  for (let i = 0; i < s.length; i++) {
    if (isNaN(s[i])) return false;
  }

  // 다 통과 했을 경우 true를 리턴한다.
  return true;
}
