//문제) 하샤드 수

//풀이)

function solution(harshad) {
  let sum = harshad
    .toString()
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);

  return harshad % sum === 0 ? true : false;
}

// 하샤드 수를 만드려면 정수 x의 자릿수의 합으로 x가 나누어져야 하샤드 수가 된다고 한다!
// 일단 정수 x의 자릿수 합을 구해주기로 했다 sum 변수를 만들고 그 안에 정수 x를 문자열과 문자열을 각각 나누어주는
// .split 메서드를 사용하고 map 을 이용해 그 각각의 문자들을 reduce() 메서드를 이용해 자릿수의 합을 구해주었고
// 이제 정수 x 와 자릿수의 합을 나누어 떨어지면 true 아니면 false를 리턴 시켜주었다
// 은근히 간단한 문제였다!
