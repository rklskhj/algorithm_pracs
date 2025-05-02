function solution(strings, n) {
  return strings.sort((a, b) => {
    if (a[n] === b[n]) {
      return a.localeCompare(b); // n번째 문자가 같으면 사전순 정렬
    }
    return a[n].localeCompare(b[n]); // n번째 문자 기준 정렬
  });
}

console.log(solution(["sun", "bed", "car"], 1));
console.log(solution(["abce", "abcd", "cdx"], 2));

// sort()를 사용하여 localeCompare()를 사용하여 정렬
