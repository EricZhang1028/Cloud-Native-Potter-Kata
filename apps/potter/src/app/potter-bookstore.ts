export class PotterBookstore {
    buy(bookNumber: number , count: number) {
        if(count == 1){
            return 100;
        }
        return -1;
    }
}
