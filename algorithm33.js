//문제) 로또와 순위

//풀이)

function solution(lottos, win_nums) {
  const result = [];
  let min = lottos.filter((it) => win_nums.includes(it)).length;
  let max = lottos.filter((it) => it === 0).length + min;

  max > 1 ? result.push(7 - max) : result.push(6);
  min > 1 ? result.push(7 - min) : result.push(6);

  return result;
}

// 일단 lottos, win_nums 를 비교해 같은 배열을 찾고 length로 몇개인지 최소값 변수에 선언하고
// 그 다음 max 변수에서 안보이는 수 0 을 포함해 + min 변수와 더해줘 최대값을 찾는다
// 그리고 삼항연산자를 사용해
// 맞춘 개수 최대 값이 1보다 클때 result.push(7(총등수+1) - max) 아니면 .push(6) 등을 배열에 넣어준다
// 맞춘 개수 최소 값이 1보다 클때 result.push(7(총등수+1) - max) 아니면 .push(6) 등을 배열에 넣어준다
