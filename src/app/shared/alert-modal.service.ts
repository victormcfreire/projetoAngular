import { Injectable } from '@angular/core';

import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

export enum AlertTypes {
  DANGER = 'danger',
  SUCCESS = 'success',
  WARNING = 'warning',
  INFO = 'info',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

@Injectable({
  providedIn: 'root',
})
export class AlertModalService {
  constructor(private _modalService: BsModalService) {}

  private showAlert(
    message: string,
    type: AlertTypes,
    dismissTimeout?: number
  ) {
    const modalRef: BsModalRef = this._modalService.show(AlertModalComponent);
    modalRef.content.type = type;
    modalRef.content.message = message;

    if (dismissTimeout) {
      setTimeout(() => modalRef.hide(), dismissTimeout);
    }
  }

  showAlertDanger(message: string) {
    this.showAlert(message, AlertTypes.DANGER);
  }

  showAlertSuccess(message: string) {
    this.showAlert(message, AlertTypes.SUCCESS, 2000);
  }

  showAlertInfo(message: string) {
    this.showAlert(message, AlertTypes.INFO);
  }

  showAlertWarning(message: string) {
    this.showAlert(message, AlertTypes.WARNING, 2000);
  }

  showConfirm(title: string, msg: string, okTxt?: string, cancelTxt?: string) {
    const bsModalRef: BsModalRef = this._modalService.show(ConfirmModalComponent);
    bsModalRef.content.title = title;
    bsModalRef.content.msg = msg;

    if (okTxt) {
      bsModalRef.content.okTxt = okTxt;
    }

    if (cancelTxt) {
      bsModalRef.content.cancelTxt = cancelTxt;
    }

    return (<ConfirmModalComponent>bsModalRef.content).confirmResult;
  }
}
