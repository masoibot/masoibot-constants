export class Random {
    static random(min: number, max: number) {
        return Math.floor(Math.random() * max) + min;
    }

    /**
     * xếp 1 vị trí ngẫu nhiên vào cuối mảng, giống bubble_sort nhưng là bubble_exchange :v
     * http://stackoverflow.com/questions/962802#962890
     * @param array
     */
    static shuffleArray(array: Array<any>) {
        let tmp,
            current,
            top = array.length;
        if (top)
            while (--top) {
                current = Math.floor(Math.random() * (top + 1));
                tmp = array[current];
                array[current] = array[top];
                array[top] = tmp;
            }
        return array;
    }
}
