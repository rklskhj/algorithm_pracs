//문제) 행렬의 덧셈

// 2차원 배열을 2중 for문으로 돌려 같은 인덱스끼리 덧셈해주는 문제

//풀이)
function solution(arr1, arr2) {
  var answer = [[]];
  for (var i = 0; i < arr1.length; i++) {
    answer[i] = [];
    for (var j = 0; j < arr1[i].length; j++) {
      answer[i].push(arr1[i][j] + arr2[i][j]);
    }
  }
  return answer;
}
//2차원 배열을 2중 for문을 돌려 같은 인덱스끼리 덧셈을 해주었다.
