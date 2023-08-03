import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchTerm: string | null = '';

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.paramMap.subscribe((value) => {
      if (value.get('searchTerm')) {
        this.searchTerm = value.get('searchTerm');
      }
    });
  }

  search(term: string) {
    this.router.navigateByUrl(`/search/${term}`);
  }
}
