import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

export interface Tile {
  color: string;
}

@Component({
  selector: 'app-root',
  imports: [MatGridListModule ,MatCardModule,MatInputModule, MatIconModule, MatButtonModule,MatTableModule],
  templateUrl: './app.html',
  styleUrl: './app.css'

})

export class App {
    tiles: Tile[] = [
    {color: 'lightblue'},
    {color: 'lightgreen'},
    {color: 'lightpink'},
    {color: '#DDBDF1'},
    ];
  imagenes = [
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg',
  '7.jpg',
  '8.jpg',
  '9.jpg',
  '10.jpg',
  '11.jpg',
  '12.jpg',
  '13.jpg',
  '14.jpg',
  '15.jpg',   
    '16.jpg',
  '17.jpg',
  '18.jpg',
  '19.jpg',
  '20.jpg',
    '21.jpg',
  '22.jpg',
  '23.jpg',
  '24.jpg',
  '25.jpg',
  '26.jpg',
  '27.jpg',   
    '28.jpg',
  '29.jpg',
  '30.jpg',
  '31.jpg',
  '32.jpg',
  '33.jpg'
  ];
}
