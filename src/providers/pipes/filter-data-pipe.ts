import {Pipe} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterDataPipe {
  transform(value, args) {
    if(value){
     
      if(args==undefined || args=='undefined')   return value;
      if(value)
      return value.filter(item => {
        let entryDate=new Date(item.date)
        console.log(entryDate.getMonth());
        
        if(item.category_id.includes(args) && entryDate.getMonth()==0) return item;
      });
    }
    
  }
}
