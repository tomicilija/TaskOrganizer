import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.page.html',
  styleUrls: ['./task-list.page.scss'],
})
export class TaskListPage implements OnInit {
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
      date: '2020-01-01',
      time: '07:00',
      duration: '3',
      place: 'Anomali Office',
      note: 'Be ready',
      alert: false,
    },
    {
      title: 'Dinner with Anna',
      date: '2020-01-01',
      time: '12:00',
      duration: '1',
      place: "Anna's House",
      note: "don't forget to give her a bouquet of flowers",
      alert: false,
    },
    {
      title: 'Pay House Tax',
      date: '2020-01-01',
      time: '12:00',
      duration: '2',
      place: '',
      note: '',
      alert: false,
    },
    {
      title: 'Make A New Propsal',
      date: '2020-01-01',
      time: '07:00',
      duration: '3',
      place: 'Anomali Office',
      note: '',
      alert: false,
    },
    {
      title: 'Meeting With A New Client',
      date: '2020-01-01',
      time: '07:00',
      duration: '3',
      place: 'Anomali Office',
      note: '',
      alert: false,
    },
    {
      title: 'Meeting With An Old Client',
      date: '2020-01-01',
      time: '07:00',
      duration: '3',
      place: 'Anomali Office',
      note: '',
      alert: false,
    },
  ];

  constructor() {}

  ngOnInit() {}
}
