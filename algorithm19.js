//문제) 수박수박수박수박수박수?

//풀이)

function solution(n) {
  return "수박".repeat(n).substr(0, n);
}
console.log(3); // "수박수"
console.log(4); // "수박수박"
// .repeat()으로 "수박" 이란 단어를 n번 반복해주고 그 반복된 문자열을 .substr() 으로
// 0번째 n만큼의 문자 개수를 가져오면 된다! 참쉽다!
// .repeat() 과 .substr()을 잊어버리지 말자!
