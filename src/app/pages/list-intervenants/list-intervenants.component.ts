import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Intervenant } from 'src/app/model/Intervenant';
import { IntervenantService } from 'src/app/services/intervenant-service.service';

@Component({
  selector: 'app-list-intervenants',
  templateUrl: './list-intervenants.component.html',
  styleUrls: ['./list-intervenants.component.css']
})
export class ListIntervenantsComponent implements OnInit {
  intervenants : Intervenant[]=[];
  constructor(private iService: IntervenantService) { }

  ngOnInit(): void {
    this.getFournisseurs();
  }

  public getFournisseurs(): void {
    this.iService.getIntervenants().subscribe(
      (response: Intervenant[]) => {
      this.intervenants = response;
    },
    (error : HttpErrorResponse) => {
      alert(error.message);
       }
  );
      }
      supprimerFournisseur(f : Intervenant){
        let conf = confirm("هل أنت متأكد؟");
        if(conf){
          this.iService.deleteIntervenant(f.idIntervenant).subscribe(()=>{
            console.log("تم حذف الهيكل");
          
            window.location.reload();
          });
      }
      }
     
}
