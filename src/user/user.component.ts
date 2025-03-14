import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable
} from '@angular/material/table';
import {MatAnchor, MatButton} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {MatCard, MatCardActions, MatCardHeader, MatCardModule} from '@angular/material/card';
import {UserService} from '../services/user.service';
import {OrderModel} from '../models/order.model';
import {UserModel} from '../models/user.model';

@Component({
  selector: 'app-user',
  imports: [
    RouterLink,
    MatHeaderCell,
    MatColumnDef,
    MatCell,
    MatAnchor,
    NgIf,
    MatButton,
    MatHeaderRow,
    MatRow,
    MatTable,
    MatCardHeader,
    MatCard,
    MatCardActions,
    MatCellDef,
    MatHeaderCellDef,
    MatHeaderRowDef,
    MatRowDef,
    MatCardModule,
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  public displayedColumns: string[] = ['id', 'destination', 'airline', 'count', 'price', 'total', 'status', 'rating', 'actions'];
  public user: UserModel | null = null

  constructor(private router: Router) {
    if (!UserService.getActiveUser()) {
      // Korisnik aplikacije nije ulogovan
      // Vrati korisnika na homepage
      router.navigate(['/home'])
      return
    }

    this.user = UserService.getActiveUser()
  }

  public doChangePassword() {
    const newPassword = prompt('Enter your new password')
    if (newPassword == '' || newPassword == null) {
      alert('Password cant be empty')
      return
    }

    alert(UserService.changePassword(newPassword) ? 'Password has been changed' : 'Failed to change password')
  }

  public doPay(order: OrderModel) {
    if (UserService.changeOrderStatus('paid', order.id)) {
      this.user = UserService.getActiveUser()
    }
  }

  public doCancel(order: OrderModel) {
    if (UserService.changeOrderStatus('canceled', order.id)) {
      this.user = UserService.getActiveUser()
    }
  }

  public doRating(order: OrderModel, r: boolean) {
    if (UserService.changeRating(r, order.id)) {
      this.user = UserService.getActiveUser()
    }
  }
}
