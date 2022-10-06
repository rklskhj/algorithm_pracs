//문제) 완주하지 못한 선수

//풀이)

function solution(participant, completion) {
  const map = new Map();

  for (let i = 0; i < participant.length; i++) {
    let a = participant[i],
      b = completion[i];

    map.set(a, (map.get(a) || 0) + 1);
    map.set(b, (map.get(b) || 0) - 1);
  }

  for (let [k, v] of map) {
    if (v > 0) return k;
  }
}

// .sort 를 사용해서 풀 수 있는 문제였지만 조금 더 가독성이 좋고 조금 더 좋은 코드를 분석해서 작성 해봤습니다!
// 변수 map = new Map() 객체를 만들고 for문을 i는 0일때 participant.length 만큼 i++ 해주었고
// 변수 a , b에 participant[i], completion[i] 을 각각 담고
// map.set 메소드로 map에 새로운 객체를 추가할 수 있는데 map.set(key, value) 형태로 객체를 추가하게 됩니다
// a, 즉 participant의 첫번째 요소부터 추가를 하게 되는 것입니다. 처음 추가를 하게 되면 key값으로 a가 전달이 되고
// value 값으로 map.get(a) || 0 + 1 이 전달이 되는건데 a가 처음 추가 되는 상황이므로 map.get(a)가 false이므로 0이
// 출력값이 되고 1을 더하니 결과적으로 key에 a, value에 1이 map에 저장됩니다.
// 근데 만약 map에 a가 추가되어있는 상황이라면(동명이인) map에 key가 a value가 1인 객체가 있는 상황입니다.
// 그렇게 되면 map.get(a)가 true가 되므로 map.get(a) || 0 가 map.get(a)가 나오게 되고 (즉 1이 나오게 됨) +1 을 하면
// a의 value 값으로 2가 전달이 되는것입니다.
// 이제 b를 살펴보면 같은 원리로 b가 이미 map에 있다면 (즉 완주자라면) a 의 1인 상태에서 -1이 되어 value 값이
// 0이 됩니다 반대로 없는 경우에는 (즉 완주를 못함) a에서는 있었으므로 value 값이 1이지만 완주를 못해 b에는
// 없으므로 아무변화가 없어 value 값이 1인 상태로 남게 됩니다. 또한 동명이인의 경우에는 a에서 한번더 1이
// 더해져 value가 2인 상태에서 bdptj 1을 뺀다고 해도 값이 1이 남게됩니다. 결국 아래 for문에서 value 값이 0 이상
// 즉 1인 값들 (미완주자, 동명이인)이 출력이 되게 되는 겁니다!
