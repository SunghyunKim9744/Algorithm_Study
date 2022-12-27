function solution(t, p) {
    var answer = 0;

    const pLen = p.length;
    const tLen = t.length;
    for(let i = 0; i <= tLen - pLen; i++) {
        if(p >= t.substr(i, pLen)) answer++;
    }

    var arr = [2, 11, 5, 3, 1];
    var arr2 = arr.sort();
    console.log(arr, typeof arr2[0]);
    return answer;
}