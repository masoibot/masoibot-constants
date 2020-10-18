export class Random {
    /**
     * Create a random number in range [min,max-1] example : random(0,3) -> 0 or 1 or 2
     * @param min
     * @param max
     */
    static random(min: number, max: number) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    /**
     * tráo đổi 1 vị trí ngẫu nhiên vào cuối mảng, giống bubble_sort nhưng là bubble_exchange :v
     * http://stackoverflow.com/questions/962802#962890
     * @param array
     */
    static shuffleArray(array: Array<any>) {
        let arr = [...array];
        let tmp,
            current,
            top = arr.length;
        if (top)
            while (--top) {
                current = Math.floor(Math.random() * (top + 1));
                tmp = arr[current];
                arr[current] = arr[top];
                arr[top] = tmp;
            }
        return arr;
    }
}
