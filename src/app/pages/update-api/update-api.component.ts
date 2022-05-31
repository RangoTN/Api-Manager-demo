import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TypeAdministration } from 'src/app/enum/TypeAdministration';
import { Intervenant } from 'src/app/model/Intervenant';
import { IntervenantService } from 'src/app/services/intervenant-service.service';

@Component({
  selector: 'app-update-api',
  templateUrl: './update-api.component.html',
  styleUrls: ['./update-api.component.css']
})
export class UpdateApiComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {
    
  }
 
}
