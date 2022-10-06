// 문제)
// 표준 입력으로 두 개의 정수 n과 m이 주어지는데

// 별(*) 문자를 이용해 가로의 길이가 n, 세로 길이가 m인 직사각형의 형태를 출력하는 문제이다
// *****
// *****
// *****

process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);

  const star = "*".repeat(a);
  for (let i = 0; i < b; i++) {
    console.log(star);
  }
});

// 하나하나 보면 일단 star 라는 변수를 만들고, repeat() 함수를 사용해 a만큼 " * " 반복하였다

// 그리고 그 과정을 b번 만큼 반복!

// String.repeat() : 문자열을 반복한 값을 반환하는 함수
