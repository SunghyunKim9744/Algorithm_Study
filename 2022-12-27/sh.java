/*
    1. t의 길이가 10,000자리이기 때문에 Integer로 변환 후 비교 X -> 범위 초과
    2. 문자열의 정렬로 대소 비교
*/
class Solution {
    public int solution(String t, String p) {
        int answer = 0;
        
        int len = p.length();
        
        for(int i = 0; i <= t.length() - len; i++){
            String strNum = t.substring(i, i+len);
            int compareNum = strNum.compareTo(p);
            if(compareNum <= 0)
                answer++;
        }
        
        return answer;
    }
}