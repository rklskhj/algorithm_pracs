// 프로그래머스 > 2024 KAKAO Winter Internship > 가장 많이 받은 선물물

function solution(friends, gifts) {
  // 선물 교환 기록 객체
  const giftLog = {};
  // 준 선물, 받은 선물, 선물 지수를 저장할 객체
  const stats = {};
  // 다음 달 받을 선물 수
  const nextMonth = {};

  // 초기화
  friends.forEach((friend) => {
    giftLog[friend] = {};
    stats[friend] = { given: 0, received: 0 };
    nextMonth[friend] = 0;
  });

  // 선물 기록 처리
  gifts.forEach((gift) => {
    const [giver, receiver] = gift.split(" ");
    giftLog[giver][receiver] = (giftLog[giver][receiver] || 0) + 1;
    stats[giver].given++;
    stats[receiver].received++;
  });

  // 선물 지수 계산
  friends.forEach((friend) => {
    stats[friend].index = stats[friend].given - stats[friend].received;
  });

  // 친구 쌍마다 다음 달 선물 계산
  for (let i = 0; i < friends.length; i++) {
    for (let j = i + 1; j < friends.length; j++) {
      const [a, b] = [friends[i], friends[j]];
      const [AtoB, BtoA] = [giftLog[a][b] || 0, giftLog[b][a] || 0];

      if (AtoB !== BtoA) {
        nextMonth[AtoB > BtoA ? a : b]++;
      } else if (stats[a].index !== stats[b].index) {
        nextMonth[stats[a].index > stats[b].index ? a : b]++;
      }
      // 선물도 주고받지 않고, 선물 지수도 같으으면 아무것도 받지 않음
    }
  }
  return Math.max(...Object.values(nextMonth));
}

const friends1 = ["muzi", "ryan", "frodo", "neo"];
const gifts1 = [
  "muzi frodo",
  "muzi frodo",
  "ryan muzi",
  "ryan muzi",
  "ryan muzi",
  "frodo muzi",
  "frodo ryan",
  "neo muzi",
];

const friends2 = ["joy", "brad", "alessandro", "conan", "david"];
const gifts2 = [
  "alessandro brad",
  "alessandro joy",
  "alessandro conan",
  "david alessandro",
  "alessandro david",
];

const friends3 = ["a", "b", "c"];
const gifts3 = ["a b", "b a", "c a", "a c", "a c", "c a"];

console.log(solution(friends1, gifts1));
console.log(solution(friends2, gifts2));
console.log(solution(friends3, gifts3));

// 문제 풀이 코드드 설명

// 1. 초기 설정 및 데이터 구조
// 모든 친구에 대해 필요한 데이터 구조를 초기화 하고
// giftLog는 선물 주고 받은 기록을 담는 중첩 객체
// stats는 각 친구가 준 선물 수, 받은 선물 수, 선물 지수를 담는 객체
// nextMonth는 다음 달에 각 친구가 받을 선물 수를 기록

// 2. 선물 기록 처리
// 각 선물 기록을 처리하며 누가 누구에게 선물을 줬는지 기록
// 동시에 총 준 선물과 받은 선물 수를 업데이트
// (giftLog[giver][receiver] || 0) + 1 는 이전에 선물을 준 기록이 없으면 0으로 시작해 1을 더한다

// 3. 선물 지수 계산
// 각 친구의 선물 지수를 계산 (준 선물 - 받은 선물 수)

// 4. 다음 달 선물 계산
// 모든 가능한 친구 쌍에 대해 다음 달 선물을 계산
// const [a, b] = [friends[i], friends[j]]: 두 친구를 간단하게 a와 b로 지정
// const [aToB, bToA] = [giftLog[a][b] || 0, giftLog[b][a] || 0]: a가 b에게, b가 a에게 준 선물 수를 동시에 가져옴
// 첫 번쨰 규칙: if (aToB !== bToA) = 선물 주고 받은 수가 다를 경우 => nextMonth[aToB > bToA ? a : b]++ : 더 많이 준 사람이 선물을 받음음
// 두 번째 규칙: else if (stats[a].index > stats[b].index) : 선물 지수가 다를 경우 => nextMonth[stats[a].index > stats[b].index ? a : b]++ : 더 높은 선물 지수를 가진 사람이 선물을 받음
// 암묵적 세번째 규칙: 조건에 해당하지 않으면 (선물 주고받은 수도 같고, 선물 지수도 같으면) 아무도 받지 않음

// 5. 결과 반환
// 다음 달에 받을 선물 수가 가장 많은 친구를 반환
// Object.values(nextMonth) 로 모든 친구가 받을 선물 수를 배열로 반환하고, Math.max 로 가장 큰 값을 찾아 반환

// 느낀점
// 처음엔 문제 이해하기가 어려웠다. 선물을 교환 기록할 객체가 필요했고, 준 선물과 받은 선물, 선물 지수를 저장할 객체도 필요했다.
// 그리고 다음 달 받을 선물의 수도 구해야했다. 초기엔 초기화 과정에서 모든 구조를 설정하지 않고 각각의 조건을 구할 떄 처리를 했었다.
// 추후에 최적화를 위해 초기화 과정에서 한번에 모든 구조를 설정하는 방식으로 변경하였고, 이중 for문을 사용하는 부분을 조금 더 간결하게 처리하기 위해 조건을 수정하였는데 오히려 더 헷갈릴 수도 있겠다.
