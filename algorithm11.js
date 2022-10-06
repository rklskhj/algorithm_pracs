//문제) x만큼 간격이 있는 n개의 숫자

//정수 x 와 자연수 n을 입력 받아 x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴 받으라는 문제

//풀이)
function solution(x, n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    //i을 선언후 1을 할당하여 우리가 n개만큼 출력을 할거니 n이하로 반복하라는 뜻이며 이때 한번 반복한뒤 i는 1씩 증가
    answer.push(x * i); //push()는 answer 배열에 넣기위해
  }
  return answer;
}
