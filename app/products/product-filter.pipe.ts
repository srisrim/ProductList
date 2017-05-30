import { PipeTransform, Pipe } from '@angular/core'
import { Iproduct } from './product';

@Pipe ({
    name: 'productFilter'
})

export class ProductFilterPipe implements PipeTransform {
    transform(value: Iproduct[], args: string): Iproduct[] {
        // debugger;
        let filter : string = args ? args.toLocaleLowerCase() : null;
        return filter ? value.filter((product:Iproduct) => product.productName.toLocaleLowerCase().indexOf(filter) != -1) : value;
    }
}