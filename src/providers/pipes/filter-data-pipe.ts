import {Pipe} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterDataPipe {
  transform(value, searchText,date) {
    let searchDate=new Date(date);
    if(value){
      if(searchText==undefined || searchText=='undefined')   searchText='';
      
      return value.filter(item => {
        let entryDate=new Date(item.date);
        if(item.category_id.includes(searchText) && entryDate.getMonth()==searchDate.getMonth()) return true;
      });
    }
    
  }
}
