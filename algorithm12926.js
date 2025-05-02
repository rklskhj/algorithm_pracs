function solution(s, n) {
  // 문자열 s에서 알파벳 (a-z, A-Z)인 문자만 찾기
  // 찾은 알파벳을 char로 받아서 변경
  // 공백은 정규식에 해당되지 않기 때문에 그대로 유지지
  return s.replace(/[a-zA-Z]/g, (char) => {
    // 알파벳 대문자는 'A'(65) ~ 'Z'(90), 소문자는 'a'(97) ~ 'z'(122)
    const base = char <= "Z" ? 65 : 97;
    // base는 기준점: 만약 char가 대문자면 'A'의 유니코드(65) 아니면 소문자이므로 'a'의 유니코드(97)
    return String.fromCharCode(((char.charCodeAt(0) - base + n) % 26) + base);
    // char.charCodeAt(0)은 문자를 유니코드 숫자로 변환
    // - base는 알파벳을 0부터 시작하는 숫자로 변경 ex) 'A' -> 0, 'B' -> 1, ... 'Z' -> 25
    // + n은 n만큼 밀어주기
    // + base는 다시 유니코드로 돌리고 String.fromCharCode로 유니코드 숫자를 문자로 바꿈꿈
  });
}

console.log(solution("AB", 1));
console.log(solution("z", 1));
console.log(solution("a B z", 4));

// s.replace()에서 정규식을 이용해 알파벳만 찾아서 변경
// base 변수에 대문자와 소문자의 기준점을 넣어줌
// String.fromCharCode()
// char.charCodeAt(0)는 문자열의 첫 번째 문자를 유니코드 숫자로 변환
