import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find',
  templateUrl: './find.page.html',
  styleUrls: ['./find.page.scss'],
})
export class FindPage implements OnInit {

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
      alert: true,
    },
    {
      title: 'Meeting With An Old Client',
      date: '2022-07-22',
      time: '07:00',
      duration: '3',
      place: 'Anomali Office',
      note: '',
      alert: true,
    },
    {
      title: 'test',
      date: '2022-07-22',
      time: '07:00',
      duration: '3',
      place: 'Anomali Office',
      note: 'testing search',
      alert: true,
    },
    {
      title: 'test',
      date: '2022-07-22',
      time: '15:00',
      duration: '1',
      place: 'Park',
      note: 'testing search',
      alert: true,
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
