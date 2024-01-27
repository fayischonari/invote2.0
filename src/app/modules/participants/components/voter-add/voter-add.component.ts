import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ParticipantService } from '../../services/participant.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-voter-add',
  templateUrl: './voter-add.component.html',
  styleUrls: ['./voter-add.component.css']
})
export class VoterAddComponent implements OnInit {
  
  voterForm: FormGroup;
  voterCount = 0;
  constructor(private formBuilder: FormBuilder, private participantService: ParticipantService, private toastr: ToastService) {
    this.voterForm = this.formBuilder.group({
      name: [null,Validators.required],
      address: [null, [Validators.required],],
      dob: [null, [Validators.required],],
      sex: [null, [Validators.required],],
      department: [null, [Validators.required],],
      email: [null, [Validators.required, Validators.email],],
      phone: [null, [Validators.required],],

    })
  }
  ngOnInit(): void {
    this.participantService.voterCount.subscribe(data => {
      this.voterCount = data;
    })
  }


  input(event: any): void {
    const inputValue = event.target.value;

    // Parse the input value into a JavaScript Date object
    const selectedDate = new Date(inputValue);

    // Format the date as needed (e.g., using Angular's DatePipe)
    const formattedDate = selectedDate.toLocaleDateString('en-US'); // Adjust the locale as needed

    console.log('Formatted date:', formattedDate);
  }

  getAge(dob: any) {
    const birthDate = new Date(dob);
    const currentDate = new Date();
    let age = currentDate.getFullYear() - birthDate.getFullYear();

    if (currentDate.getMonth() < birthDate.getMonth() || (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) age--;

    return age;
  }
  

  formSubmit(): void {
   if (this.voterForm.status === 'VALID') {
    console.log('>>>>>>.',this.voterForm);
    let newVoter = this.voterForm.value;
    let age = this.getAge(this.voterForm?.value?.dob);

    newVoter.age = age;
    newVoter.showOptions = false;
    let idDigit = this.voterCount + 1;
    newVoter.id = 'voter00' + idDigit;
    
    this.participantService.newVoter.next(newVoter);
    setTimeout(() => {
      this.toastr.success('Voter added successfuly');
      this.voterForm.reset();
    })
   }
  }
}
