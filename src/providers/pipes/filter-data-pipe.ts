import {Pipe} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterDataPipe {
  transform(value, args,date) {
    let searchDate=new Date(date)
    if(value){
      if(args==undefined || args=='undefined')   return value;
      if(value)
      return value.filter(item => {
        let entryDate=new Date(item.date)
        if(item.category_id.includes(args) && entryDate.getMonth()==searchDate.getMonth()) return true;
      });
    }
    
  }
}
