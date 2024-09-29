import { HttpErrorResponse, HttpInterceptorFn, HttpResponse, HttpStatusCode } from '@angular/common/http';
import { inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import { catchError, of, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
    const messageService: MessageService = inject(MessageService);

    return next(req).pipe(
        catchError((error: HttpErrorResponse) => {
            const errorMessage: string = error.error ? error.statusText : 'Please try again later';
            messageService.add({ severity: 'error', detail: errorMessage, life: 10000 });

            return error.status
                ? throwError(() => errorMessage)
                : of(new HttpResponse({ status: HttpStatusCode.ServiceUnavailable }));
        })
    );
};
