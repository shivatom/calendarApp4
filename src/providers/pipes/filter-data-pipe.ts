import {Pipe} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterDataPipe {
  transform(value, args) {
    if(args==undefined || args=='undefined')   return value;
    if(value)
    return value.filter(item => item.category_id.includes(args));
    
  }
}
