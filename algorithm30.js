//문제) 최소 직사각형

//풀이)
function solution(sizes) {
  const bCard = sizes.map(([w, h]) => (w < h ? [h, w] : [w, h]));

  let maxSize = [0, 0];
  bCard.forEach(([w, h]) => {
    if (w > maxSize[0]) maxSize[0] = w;
    if (h > maxSize[1]) maxSize[1] = h;
  });

  return maxSize[0] * maxSize[1];
}

// 일단 bCard 라는 변수를 만들어주고 여기엔 각각의 명함 사이즈가 다르니 하나의 지갑에 모든 명함을 넣으려면
// 가로가 길면 돌려서 가로값을 세로값으로 맞추는? 명함을 회전 시키는 변수이다.
// (map() 메서드를 이용해 요소에 변화를 삼항연산자를 이용해 주고있다)
// 그리고  maxSize 라는 변수를 이용해 가로 세로 값의 최대 값을 구해줄 것 ([0, 0] 배열을 담을 거니 배열 값은 0으로 선언!)
// forEach(()=>{}) 메서드를 이용해 bCard의 배열 요소 각각을 뽑아주고 (for문을 대체 할 수 있음!)
// if문을 사용해 '가로나 세로가 maxSize[0], maxSize[1] 보다 크면  maxSize[0], maxSize[1] = w, h 라고 해주면서
// 각각의 요소들의 최대값을 구하고 곱하여 리턴해주면 끝!
