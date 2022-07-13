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

    return [
      ...items.filter((item: any) => {
        const properties = Object.keys(item);
        return properties.some((property: any) => regexp.test(item[property]));
      }),
    ];
  }
}
