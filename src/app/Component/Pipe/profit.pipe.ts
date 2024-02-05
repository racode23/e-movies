import { Pipe ,PipeTransform} from "@angular/core";

@Pipe({ name: 'profit'})
  
export class profitPipe implements PipeTransform{
    transform(value: number,profitpersentage=10):string {
        return (value *  profitpersentage * 0.001).toFixed(2);
    }



}

