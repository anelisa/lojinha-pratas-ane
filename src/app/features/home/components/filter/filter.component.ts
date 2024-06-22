import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  //@ts-ignore
  filterForm: FormGroup

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.filterForm = this.fb.group({
      searchTerm: ['']
    })
  }

}
