import { Component, OnInit } from '@angular/core';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';


interface DataItem {
  name: string;
  trueOrFalse: string,
  age: number;
  address: string;
}

interface ColumnItem {
  name: string;
  sortOrder?: NzTableSortOrder;
  sortFn?: NzTableSortFn;
  listOfFilter?: NzTableFilterList;
  filterFn?: NzTableFilterFn;
}


@Component({
  selector: 'app-table-template-multi-sort',
  templateUrl: './table-template-multi-sort.component.html',
  styleUrls: ['./table-template-multi-sort.component.css']
})
export class TableTemplateMultiSortComponent implements OnInit {

  searchValue = '';
  visible = false;
  listOfColumns: ColumnItem[] = [
    {
      name: 'Name',
      sortOrder: null,
      sortFn: (a: DataItem, b: DataItem) => a.name.localeCompare(b.name),
      listOfFilter: [
        { text: 'Joe', value: 'Joe' },
        { text: 'Jim', value: 'Jim' }
      ],
      filterFn: (list: string[], item: DataItem) => list.some(name => item.name.indexOf(name) !== -1)
    },
    {
      name: 'Age',
      sortOrder: null,
      sortFn: (a: DataItem, b: DataItem) => a.age - b.age
    },
    {
      name: 'Address',
      listOfFilter: [
        { text: 'London', value: 'London' },
        { text: 'Sidney', value: 'Sidney' }
      ],
      filterFn: (address: string, item: DataItem) => item.address.indexOf(address) !== -1
    }
  ];
  listOfData: DataItem[] = [
    {
      name: 'John Brown',
      trueOrFalse: 'Y',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      name: 'Jim Green',
      trueOrFalse: 'Y',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      name: 'Joe Black',
      trueOrFalse: 'N',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    },
    {
      name: 'Jim Red',
      trueOrFalse: 'N',
      age: 32,
      address: 'London No. 2 Lake Park'
    }
  ];
  ngOnInit(): void {
    
  }
  
  resetSerach(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.listOfDisplayData = this.listOfData.filter((item: DataItem) => item.name.indexOf(this.searchValue) !== -1);
  }

  trackByName(_: number, item: ColumnItem): string {
    return item.name;
  }

  sortByAge(): void {
    this.listOfColumns.forEach(item => {
      if (item.name === 'Age') {
        item.sortOrder = 'descend';
      } else {
        item.sortOrder = null;
      }
    });
  }

  resetFilters(): void {
    this.listOfColumns.forEach(item => {
      if (item.name === 'Name') {
        item.listOfFilter = [
          { text: 'Joe', value: 'Joe' },
          { text: 'Jim', value: 'Jim' }
        ];
      } else if (item.name === 'Address') {
        item.listOfFilter = [
          { text: 'London', value: 'London' },
          { text: 'Sidney', value: 'Sidney' }
        ];
      }
    });
  }

  resetSortAndFilters(): void {
    this.listOfColumns.forEach(item => {
      item.sortOrder = null;
    });
    this.resetFilters();
  }
  listOfDisplayData = [...this.listOfData];
}
