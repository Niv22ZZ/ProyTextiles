import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';

export interface Tile {
  color: string;
}

@Component({
  selector: 'app-root',
  imports: [MatGridListModule ,MatCardModule, MatButtonModule,MatTableModule],
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
  
}
