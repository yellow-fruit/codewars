if (a == b) return a; //(1)
   if (a < b) {
      return a + getSum(a+1, b); //(2)
   }else {
      return a + getSum(a-1,b); //(3)
   }