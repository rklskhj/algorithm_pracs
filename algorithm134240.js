// 프로그래머스 > 연습문제 > 푸드 파이트 대회

function solution(food) {
  let res = "";

  for (let i = 1; i < food.length; i++) {
    res += String(i).repeat(Math.floor(food[i] / 2));
  }

  return res + "0" + res.split("").reverse().join("");
}

const food1 = [1, 3, 4, 6];
const food2 = [1, 7, 1, 2];

console.log(solution(food1));
console.log(solution(food2));

// 문제 풀이 설명

// 물을 제외한 음식을 반복문을 돌며 짝수만큼 반복해서 문자열에 추가한다.
// 물은 0으로 가운데에 위치해야 하므로 문자열에 0을 추가한다.
// 문자열을 뒤집어서 뒤에 붙인다.

// 처음 풀 때는 앞에 문자열을 넣는 for문을 넣고 0을 추가해주고 뒤에 역순으로 넣는 for문을 넣어서 풀었는데
// 너무 비효울적이라 어차피 같은 수를 반복해서 역순으로 넣어주는거라 .split("").reverse().join("") 를 사용하여 해결
// res.split("") 도 있지만 [...res] 로 풀어도 가능
