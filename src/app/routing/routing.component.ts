import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.scss']
})
export class RoutingComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // noinspection TypeScriptUnresolvedVariable
      if (params.id === '0') {
        this.router.navigate(['/404']);
      }
    });
  }

  goBack() {
    this.router.navigate(['/posts']);
  }

}
