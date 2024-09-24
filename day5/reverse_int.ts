function reverse(x: number): number {
    var flag : number = 0;
    if (x > 2147483648)
        return 0;
    if(x < 0){
        flag = 1;
        x *= -1;
    }
    var rev:number = 0;
    while(x >= 1){
        rev *= 10;
        rev += (x%10);
        x /= 10;
        x = Math.trunc(x);
    }
    if (rev > 2147483648)
        return 0;
    if (flag == 1)
        return rev * -1;
    return rev;
};

console.log(reverse(1324567));