import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmBoxComponent } from 'src/app/components/confirm-box/confirm-box.component';
import { ToastModule } from 'primeng/toast';
import { ToastService } from 'src/app/services/toast.service';
import { Router } from '@angular/router';
import { ParticipantService } from '../../services/participant.service';
// import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-voter-list',
  templateUrl: './voter-list.component.html',
  styleUrls: ['./voter-list.component.css']
})
export class VoterListComponent implements OnInit {

  data: any[] = [
    {
      id: 'voter001',
      name: 'Steve Rogers',
      department: 'Java Script',
      sex: 'Male',
      age: '97',
      email: 'captainamerica@gmail.com',
      phone: '9878675644',
      showOptions: false
    },
    {
      id: 'voter002',
      name: 'Natasha Romanoff',
      department: 'Python',
      sex: 'Female',
      age: '33',
      email: 'blackwidow@gmail.com',
      phone: '9878675644',
      showOptions: false
    },
    {
      id: 'voter003',
      name: 'Bruse Banner',
      department: 'Java Script',
      sex: 'Male',
      age: '35',
      email: 'strongestavenger@gmail.com',
      phone: '9878675644',
      showOptions: false
    },
    {
      id: 'voter004',
      name: 'Tony Stark',
      department: 'AI',
      sex: 'Male',
      age: '38',
      email: 'ironman@gmail.com',
      phone: '9562481604',
      showOptions: false
    },
    {
      id: 'voter005',
      name: 'Thor Odinson',
      department: 'ML',
      sex: 'Male',
      age: '1504',
      email: 'godofthunder@gmail.com',
      phone: '9878675644',
      showOptions: false
    },
    {
      id: 'voter006',
      name: 'Loki',
      department: 'CF',
      sex: 'Male',
      age: '997',
      email: 'godofmistevious@gmail.com',
      phone: '9878675644',
      showOptions: false
    }
  ];
  voterList: any[] = [];
  searchText: string = '';
  noResult: boolean = false;


  constructor(private dialog: MatDialog, private toastr: ToastService, private router: Router, private participantService: ParticipantService) {}

  ngOnInit() {
    this.voterList = this.data;
    this.participantService.newVoter.subscribe(data => {
      if (!this.checkEmptyVoter(data)) {
        console.log('data:',data);
        this.voterList.push(data);
      }
    });
    this.participantService.voterCount.next(this.voterList?.length)
  }

  checkEmptyVoter(voter: any): boolean {
    return Object.keys(voter).length === 0;
  }

  showVoterOptions(item: any): void {
    this.voterList?.forEach((voter: any) => {
      if (voter?.showOptions) voter.showOptions = false;
    });
    if (item) item.showOptions = !item.showOptions
    
  }

  @HostListener('click',['$event.target']) onClick(e: any) {
    if (!e.classList.contains('voter-options') && !e.classList.contains('voter-option-icon')) {
      this.voterList?.forEach((voter: any) => {
        if (voter?.showOptions) voter.showOptions = false;
      });
    }
  }

  searchVoter(): void {
    this.noResult = false;
  
    if (this.searchText !== '') {
      this.voterList = this.data.filter(item => {
        let hasMatch = false;
        for (let property in item) {
          if (property !== 'showOptions' && property !== 'sex' && item[property].toLowerCase().includes(
            this.searchText.toLowerCase())) {
            hasMatch = true;
            break; 
          }
        }
        if (hasMatch) return true;
        else return false;
      });
  
      // Set this.noResult to true only if no item matched the search text
      this.noResult = this.voterList.length === 0;
    } else {
      this.voterList = this.data;
      this.noResult = false;
    }
  }
  

  deleteVoter(voter: any) {
    const dialogRef  = this.dialog.open(ConfirmBoxComponent, { data: {message: 'Are you sure want to delete this voter?'}});
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        console.log('xxxx:',voter.id);
        let index = this.voterList.findIndex((item: any) => item.id === voter.id);
        console.log('zzz',index);
        if (index) {
          setTimeout(() => {
            this.voterList.splice(index,1);
            // this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Voter deleted' });
            this.toastr.success('Voter deleted successfuly')

          })
        }
      }
      
    })
  }

  voterAddClick(): void {
    this.router.navigate(['voter-add']);
  }
  
}
