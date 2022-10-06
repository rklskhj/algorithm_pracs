//문제) 두 개 뽑아서 더하기

//풀이)

function solution(numbers) {
  const answer = [];

  // 들어온 배열 numbers [5,0,2,7]를 2중 for문으로 완전탐색을 한다.
  for (let i = 0; i < numbers.length; i++) {
    // ex)
    // 처음 numbers[i](5) 부터 시작해서
    // numbers[j] (0) -> (2) -> (7) 을 순서대로 더한 값을
    // 배열에 넣어주는 것을 반복한다.
    for (let j = i + 1; j < numbers.length; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }

  // sort() 메서드를 통해 배열을 오름차순으로 정렬한다.
  answer.sort((a, b) => a - b);

  // 배열을 Set() 메서드를 이용하여 중복을 제거한 다음
  // 생성된 Set()을 스프레드 문법을 사용해 배열로 변환한 후 반환한다.
  return [...new Set(answer)];
}

console.log(solution([2, 1, 3, 4, 1])); // [2,3,4,5,6,7]
console.log(solution([5, 0, 2, 7])); // [2,5,7,9,12]

// 배열 안에 있는 서로 다른 인덱스의 합의 모든 수를 구하려면 2중 for문을 구해야한다
// 2번째 for문에서 많이 헷갈렸지만 설명대로 보고 직접 구해서 해보니 이해가 됐다
// 그리고 .sort() 메서드로 오름차순으로 해주고 Set() 메서드로 중복을 제거해주고 스프레드 문법(...)으로 배열로 변환 시켜주었다
// Set은 생성자 함수로써 꼭 사용하기전에 new 를 붙여서 사용하기
