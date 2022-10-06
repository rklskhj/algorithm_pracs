//문제) 제일 작은 수 제거하기

//풀이)
function solution(arr) {
  arr.splice(arr.indexOf(Math.min(arr)), 1);
  return arr.length ? arr : [-1];
}

// indexOf() 메서드와 Math.min 함수를 이용해 arr 배열중 제일 작은 숫자의 배열의 인덱스 값을 찾고
// splice() 메서드를 이용해 가장 작은 수의 배열을 삭제 하였고 가장 작은 수를 제거한 배열이 빈 배열인지
// 삼항 다항식으로 파악해서 빈 배열일 경우 [-1]를 반환하고, 아닐 경우에는 가장 작은 수가 제거된 배열을 반환한다
