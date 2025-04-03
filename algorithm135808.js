// 프로그래머스 > 연습문제 > 과일 장수

function solution(k, m, score) {
  // 내림차순 정렬 (높은 점수부터)
  score.sort((a, b) => b - a);

  let answer = 0;
  // m개씩 묶어서 처리
  for (let i = 0; i < score.length - (score.length % m); i += m) {
    // 각 박스의 최저 점수(마지막 사과) × m
    answer += score[i + m - 1] * m;
  }

  return answer;
}

const k1 = 3;
const m1 = 4;
const score1 = [1, 2, 3, 1, 2, 3, 1];

const k2 = 4;
const m2 = 3;
const score2 = [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2];

console.log(solution(k1, m1, score1));
console.log(solution(k2, m2, score2));

// 문제 상황
// 과일 장수는 사과를 최고 효율로 팔아야한다.
// 사과는 1점(최하품) ~ k점(최상품)까지 분류
// 한 상자에는 m개의 사과가 들어가야한다.
// 상자의 가격 = (그 상자에서 가장 낮은 점수) x (한 상자에 담긴 사과 개수)

// 해결 방법
// 1. 내림 차순으로 정렬 => 이렇게 하면 최대한 좋은 사과들이 함께 묶임
// 2. 내림 차순으로 정렬된 배열을 m개씩 묶어서 처리
// 3. 각 상자의 가격을 계산하여 총 가격을 반환
