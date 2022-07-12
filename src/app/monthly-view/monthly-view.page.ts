import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monthly-view',
  templateUrl: './monthly-view.page.html',
  styleUrls: ['./monthly-view.page.scss'],
})
export class MonthlyViewPage implements OnInit {
  private tasks: {
    title: string;
    date: string;
    time: string;
    duration: string;
    place: string;
    note: string;
    alert: boolean;
  }[] = [
    {
      title: 'Meeting with Anomali Team',
      date: '2022-07-01',
      time: '07:00',
      duration: '3',
      place: 'Anomali Office',
      note: 'Be ready',
      alert: false,
    },
    {
      title: 'Dinner with Anna',
      date: '2022-07-01',
      time: '12:00',
      duration: '1',
      place: "Anna's House",
      note: "don't forget to give her a bouquet of flowers",
      alert: false,
    },
    {
      title: 'Pay House Tax',
      date: '2022-07-05',
      time: '12:00',
      duration: '2',
      place: '',
      note: '',
      alert: false,
    },
    {
      title: 'Make A New Propsal',
      date: '2022-07-05',
      time: '07:00',
      duration: '3',
      place: 'Anomali Office',
      note: '',
      alert: false,
    },
    {
      title: 'Meeting With A New Client',
      date: '2022-07-12',
      time: '07:00',
      duration: '3',
      place: 'Anomali Office',
      note: '',
      alert: false,
    },
    {
      title: 'Meeting With An Old Client',
      date: '2022-07-22',
      time: '07:00',
      duration: '3',
      place: 'Anomali Office',
      note: '',
      alert: false,
    },
  ];

  private dateValue: any;

  constructor() { }

  get datePicked(): any {
    return this.dateValue;
  }
  set datePicked(value: any) {
    console.log({ value });
    this.dateValue = value;
  }
  ngOnInit() {
  }

}
