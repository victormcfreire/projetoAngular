import { Usuario } from './../table/usuario';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'searchFilter' })
export class SearchPipe implements PipeTransform {
  transform(items: Usuario[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();
    const regexp = new RegExp(searchText, 'i');
    let resultFound = items.filter((item: any) => {
      const properties = Object.keys(item);
      return properties.some((property: any) => {
        if (property.toLocaleString() !== 'password') {
          return regexp.test(item[property]);
        } else {
          return false;
        }
      });
    });
    if (resultFound.length > 0) {
      return resultFound;
    } else {
      return [];
    }
  }
}
