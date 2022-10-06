//문제) 부족한 금액 계산하기

// 놀이기구를 n번째 탈 때마다 가격이 올라간다고 하고 그 값이
// 내가 가지고 있는 돈 보다 많으면 그 값을 return 해주는 문제입니다!

//입출력 예
// price	money	count	result
// 3	    20	    4	    10

//풀이1)
function solution(price, money, count) {
  var answer = 0;
  for (var i = 1; i <= count; i++) {
    answer += price * i;
  }

  return answer <= money ? 0 : money - answer;
}

// 일단 for문 부터 보면 i를 1부터 count 만큼 하나씩 늘어나게 해주고 answer을 price*i 를 한 값을 더해주고
// (카운트만큼의 총 놀이기구의 값을 구했다!)
// 그리고 return answer이 가지고 있는 소지금보다 작거나 같을 때는 0을 return! 아니면 지불해야 할 총 금액 - 소지금을 return!
// 생각보다 간단하게 풀 수 있던 문제였습니다!

//풀이2)
function solution(price, money, count) {
  var answer = (price * count * (count + 1)) / 2 - money;

  return answer > 0 ? answer : 0;
}

//가우스 공식을 이용
