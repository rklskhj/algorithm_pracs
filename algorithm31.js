//문제) 같은 숫자는 싫어

//풀이)

function solution(arr) {
  return arr.filter((el, i) => el != arr[i + 1]);
}

// 처음 문제를 이해했을땐 같은 수를 제외한 숫자들을 return 하는줄 알았는데
// 같은 숫자가 반복적으로 나오는 것들은 1개로 줄여주고 리턴 하는 문제였다
// 일단 filter() 메서드를 사용해서 index를 1씩 늘려줘 숫자와 인덱스 가 겹치는
// 숫자들은 제외 해주고 리턴해주었다!