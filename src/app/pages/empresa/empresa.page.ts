import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { HomeService } from './empresa.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.page.html',
  styleUrls: ['./empresa.page.scss'],
})
export class EmpresaPage implements OnInit {

  characters: any[]=[];
  

  constructor(
    private http: HttpClient,private homeService: HomeService
  ) { this.getCharacters();}

  getCharacters() {
    this.homeService.getCharacters().subscribe((data: any) => {
      this.characters = data.results;
    });
 }

  ngOnInit() {
    
  }

}
