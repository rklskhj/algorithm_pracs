//문제) 음양 더하기

// 인풋으로 주어진 배열 모두를 더하는 문제입니다
// 인풋으로 총 2개의 배열이 주어지는데 한 개는 정수로 구성되어 모두 합해야하는 배열.
// 또 다른 하나는 정수의 부호를 결정짓는 배열입니다.
// 두 번째 배열의 값을 체크하면서 부호를 결정지어 첫 번째 배열의 값을 모두 더하면됩니다

// 입출력의 예
// absolutes	signs	     result
// [4,7,12]	[true,false,true]	9
// [1,2,3]	[false,false,true]	0

//풀이)
function solution(absolutes, signs) {
  return absolutes.reduce((acc, val, i) => acc + val * (signs[i] ? 1 : -1), 0);
}
//absolutes에 리듀스 메서드를 사용해 배열안에 있는 요소에 singns가 true면 1, false면 -1을 하여
//각각 요소에 * 1, * -1 을 해주어 모든 값의 합을 구해줬습니다
