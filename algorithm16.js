//문제) 내적

//풀이)

function solution(a, b) {
  return a.reduce((acc, val, i) => acc + val * b[i], 0);
}

// reduce 함수를 이용해 acc 누산값과 val값에 b[i] 값을 곱하여 합을 해주었다!
