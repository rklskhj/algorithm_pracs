//문제) 모의고사

//풀이)

function solution(answers) {
  let person1 = [1, 2, 3, 4, 5];
  let person2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  var answer = [];
  let count = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] == person1[i % person1.length]) count[0]++;
    if (answers[i] == person2[i % person2.length]) count[1]++;
    if (answers[i] == person3[i % person3.length]) count[2]++;
  }
  const max = Math.max(count[0], count[1], count[2]);
  for (let i = 0; i < count.length; i++) {
    if (max == count[i]) answer.push(i + 1);
  }
  return answer;
}

// 일단 사람들 각각의 찍는 방식을 변수로 선언하고 이따 카운트를 세어줄 카운트 변수도 배열로 만들어준다
// 그리고 각각의 문제를 정답과 비교할 정답을 for문으로 돌려주고 그 안에 if문을 사용하여 각각의 비교를 만들어 준다
// (헷갈렷던 부분 person3[i % person3.length]) 까먹지 말기!
// 그리고 if으로 나온 결과를 각각 count 배열에 담아주고 카운트 배열의 최대값을 구하기 위해 max 변수를 선언 후
// 최대값을 담아주고 마지막으로 for문을 돌려 count의 길이 만큼 돌려주고 max 와 count[i] 가 일치한다면
// answer에 i+1 을 해준다!
