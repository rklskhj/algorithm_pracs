//문제) 나누어 떨어지는 숫자 배열

//풀이)

function solution(arr, divisor) {
  const answer = arr.filter((element) => element % divisor === 0);
  answer.length === 0 ? answer.push(-1) : answer.sort((a, b) => a - b);
  return answer;
}

// 일단 변수 answer에 .filter() 메서드를 사용한뒤 .filter()안에서의 함수를 이용해 arr 안에 객체들 (element) 들이 divisor로
// 나누어 떨어지는 것들이 있는지 확인 후
// answer가 나누어 떨어지는게 없으면 길이 가 0이 되면 -1 을 리턴해주고 아니면 .sort((a, b) => a - b)로 올림차순으로 리턴해준다

// filer() : 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.
// sort((a, b) => a - b) : 올림차순 숫자열로 비교하기 위해선 함수는 a에서 b를 뺄 수 있습니다
