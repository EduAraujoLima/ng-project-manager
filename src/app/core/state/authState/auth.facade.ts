import { Injectable, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserAuth } from '../../../types/user.types';
import { injectMutation } from '@tanstack/angular-query-experimental';
import { lastValueFrom } from 'rxjs';
import { NotificationService } from '../../services/notification.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthFacade {
  private readonly authService = inject(AuthService);
  public readonly notificationService = inject(NotificationService);

  public loginMutation = injectMutation(() => ({
    mutationFn: (authData: UserAuth) =>
      lastValueFrom(this.authService.login(authData)),
      onError: (error: HttpErrorResponse | Error, variables, context) => {
        if(error instanceof HttpErrorResponse) {
          this.notificationService.error(error?.error);
        } else {
          this.notificationService.error(error.message);
        }
      },
  }));
}
