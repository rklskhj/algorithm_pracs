//문제) 서울에서 김서방 찾기

// String형 배열! seoul의 element 중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는
// String 을 반환하는 함수를 완성하는 문제이다!

//풀이)

function solution(seoul) {
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === "Kim") return `김서방은 ${i}에 있다`;
  }
}

// 일단 for문을 돌려 i는 0 일때 seoul.length 만큼 i++ 하게 하고
// if 문으로 seoul[i]에 "Kim" 이 있으면 김서방은 ${i}에 있다 라고 리턴해주면 된다
// 리턴 뒤에 ${} 사용하려면 `` 백틱을 사용하는걸 잊지말자!
