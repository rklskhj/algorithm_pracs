// 프로그래머스 > 연습문제 > 햄버거 만들기

// 첫 풀이
function solution1(ingredient) {
  let count = 0;

  let stack = [];

  for (let i of ingredient) {
    stack.push(i);

    if (stack.length >= 4 && stack.slice(-4).join("") === "1231") {
      count++;
      stack.splice(-4);
    }
  }

  return count;
}

// 둘째 풀이 (더 나은 풀이이)
function solution2(ingredient) {
  let count = 0;
  let stack = [];

  for (let i = 0; i < ingredient.length; i++) {
    stack.push(ingredient[i]);

    if (stack.length >= 4) {
      if (
        stack[stack.length - 4] === 1 &&
        stack[stack.length - 3] === 2 &&
        stack[stack.length - 2] === 3 &&
        stack[stack.length - 1] === 1
      ) {
        count++;
        stack.length -= 4; // 마지막 4개 요소 제거
      }
    }
  }

  return count;
}
const ingredient1 = [2, 1, 1, 2, 3, 1, 2, 3, 1];
const ingredient2 = [1, 3, 2, 1, 2, 1, 3, 1, 2];

console.log(solution1(ingredient1));
console.log(solution2(ingredient2));

// 문제 풀이
// stack을 사용하는 문제
// 햄버거 재료를 순서대로 쌓아주고 햄버거가 만들어지면 순서를 비교 '1231'(순서)
// 그리고 카운터를 늘려주고 만들어진 순서의 재료는 제외
// 이렇게 하면 햄버거를 만들 수 있는 경우의 수를 셀 수 있다.

// 첫 번째 풀이보다 두번째 풀이가 더 나은 점
// 1. slice()와 join() 대신 직접 인덱스로 비교 => 매번 새로운 배열 생성 후 문자열로 변환 다소 아쉽, 스택의 마지막 4개 요소 직접 비교 하므로 추가 메모리 할당 없음.
// 2. splice() 대신 stack.length -= 4 로 처리 => splice()는 배열 재구성하는 비용이 크다. legntj로 직접 조절이 효율적.
// 3. for...of 대신 for...in 으로 반복문 처리 => 미세한 차이지만 일반 for문이 더 빠름름
