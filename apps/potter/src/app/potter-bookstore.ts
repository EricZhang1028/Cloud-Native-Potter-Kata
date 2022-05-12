export class PotterBookstore {
    private potterBooks: number[] = [0, 0];
    private oneBookPrice: number = 100;

    buy(bookIndex: number, count: number) {
        this.potterBooks[bookIndex] += count;
    }

    private get getMaxCount() {
        const max = this.potterBooks.reduce(function(prev, current) {
            return (prev > current) ? prev : current
        })
        return max;
    }

    private getDistinct(num: number) {
        let distinctCount: number = 0;
        let maxCount: number = this.getMaxCount;
        
        for(let i = 0; i < maxCount; i++) {
            let idxs = new Array();
            let sat: boolean = false;
            for(let j = 0; j < this.potterBooks.length; j++) {
                if(this.potterBooks[j] > 0){
                    idxs.push(j);
                }
                if(idxs.length == num){
                    sat = true;
                    break;
                }
            }

            if(sat){
                for(let i = 0; i < idxs.length; i++){
                    this.potterBooks[i] -= 1;
                }
                distinctCount += 1;
            }
            else{
                break;
            }
        }

        return distinctCount;
    }

    get price() {
        let price: number = 0;

        let twoDistinct: number = this.getDistinct(2);
        price += twoDistinct * (this.oneBookPrice * 2 * 0.95);

        let oneDistinct: number = this.getDistinct(1);
        price += this.oneBookPrice * oneDistinct;

        return price;
    }
}
