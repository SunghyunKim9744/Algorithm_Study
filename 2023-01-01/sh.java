class Solution {
    public int solution(int n, int k) {
        int answer = 0;
        String arithmeticNum = convertArithmetic(n,k);
          
        String[] pNums = arithmeticNum.split("0+");
        for(String pNum : pNums)
            if(isPrime(Long.parseLong(pNum)))
                answer++;
        
        return answer;
    }
    
    static String convertArithmetic(int n, int k){
        return Integer.toString(n,k);
    }
    
    static boolean isPrime(long num){
        
        if(num == 1)
            return false;
        
        for(long i = 2; i * i <= num; i++)
            if(num % i == 0)
                return false;
        
        return true;
    }
}