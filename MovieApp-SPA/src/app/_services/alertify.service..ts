import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

constructor() { }

confirm(message: string, okCallBack: () => any) {
  alertify.confirm(message, (e: any) => {
      if (e) {
        okCallBack();
      } else {}
  });
}

success(msg: string) {
  alertify.success(msg);
}

warning(msg: string) {
  alertify.warning(msg);
}

message(msg: string) {
  alertify.message(msg);
}

error(msg: string) {
  alertify.error(msg);
}
}
