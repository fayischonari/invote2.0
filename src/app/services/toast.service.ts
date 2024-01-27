import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr'

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastr: ToastrService) { }

  success(msg: string): void {
    this.toastr.success(msg);
  }

  warning(msg: string): void {
    this.toastr.warning(msg);
  }

  info(msg: string): void {
    this.toastr.info(msg);
  }

  error(msg: string): void {
    this.toastr.error(msg);
  }
}
