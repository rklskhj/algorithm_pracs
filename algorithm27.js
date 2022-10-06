//문제) 콜라즈 추측

//풀이)

function solution(num) {
  var work = 0;

  while (work <= 500) {
    if (num === 1) return work;
    num = num % 2 === 0 ? num / 2 : num * 3 + 1;
    work += 1;
  }
  return -1;
}

// while 문을 사용하여 최대 500번까지 반복문을 돌릴 수 있게 해주었고
// if 문을 사용해 num이 1이 면 work로 리턴 해주었다
// 만약 1이 아니라면 삼항 연산자로 돌아와 짝수면 / 2 해주고 홀수면 *3 +1 을 num 이 1이 될 때까지 반복해주었다!
// 그리고 한번 돌때마다 work를 +1 해주었고 500번을 돌아도 1이 되지 못 한다면 -1을 리턴해주었다!
