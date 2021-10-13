import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


const trans = [
  {
    from: 'Alex',
    to: 'Moks',
    currency: '213.12',
    closed: true
  }, {
    from: 'VeryVeryVeryVeryVeryVeryLongAnton',
    to: 'Mosk',
    currency: '333.12',
    closed: false
  }, {
    from: 'Anton',
    to: 'Alex',
    currency: '666.66',
    closed: false
  }
];

const dashboardFields = [
  {
    key: 'index',
    title: 'No'
  },
  {
    key: 'from',
    title: 'Who'
  },
  {
    key: 'to',
    title: 'Whom'
  },
  {
    key: 'currency',
    title: 'How Much'
  },
  {
    key: 'closed',
    title: 'Is Closed'
  },
];

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private modalService: NgbModal) { }


  public dashboardFields = dashboardFields;

  public tableData$ = new Observable<{}[]>(subscriber => {
    setTimeout(() => {
      subscriber.next(trans);
    }, 2000);
  });

  ngOnInit(): void {

  }

  public openModal(content) {
    this.modalService.open(content);
  }

}
