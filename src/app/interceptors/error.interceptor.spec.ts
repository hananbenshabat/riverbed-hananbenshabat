import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandlerFn,
    HttpInterceptorFn,
    HttpRequest,
    HttpResponse,
    HttpStatusCode
} from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MessageService } from 'primeng/api';
import { Observable, throwError } from 'rxjs';
import { errorInterceptor } from './error.interceptor';

describe('errorInterceptor', () => {
    let messageService: jasmine.SpyObj<MessageService>;

    beforeEach(() => {
        messageService = jasmine.createSpyObj<MessageService>('MessageService', ['add']);

        TestBed.configureTestingModule({
            providers: [{ provide: MessageService, useValue: messageService }]
        });
    });

    it('should handle error and add a message', (done: DoneFn) => {
        const interceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn) => {
            return TestBed.runInInjectionContext(() => errorInterceptor(req, next));
        };

        const httpRequest = new HttpRequest('GET', '/test');
        const httpHandler: HttpHandlerFn = () => {
            return throwError(() => new HttpErrorResponse({ status: 500, statusText: 'Server Error' }));
        };

        interceptor(httpRequest, httpHandler).subscribe({
            next: () => fail('expected an error, not a response'),
            error: (error) => {
                expect(error).toBe('Server Error');
                expect(messageService.add).toHaveBeenCalledWith({
                    severity: 'error',
                    detail: 'Server Error',
                    life: 10000
                });
                done();
            }
        });
    });

    it('should handle non-error status and return a fallback response', (done: DoneFn) => {
        const interceptor: HttpInterceptorFn = (
            req: HttpRequest<any>,
            next: HttpHandlerFn
        ): Observable<HttpEvent<any>> => {
            return TestBed.runInInjectionContext(() => errorInterceptor(req, next));
        };

        const httpRequest = new HttpRequest('GET', '/test');
        const httpHandler: HttpHandlerFn = () => throwError(() => new HttpErrorResponse({ status: 0 }));

        interceptor(httpRequest, httpHandler).subscribe({
            next: (response) => {
                if (response instanceof HttpResponse) {
                    expect(response.status).toBe(HttpStatusCode.ServiceUnavailable);
                    expect(messageService.add).toHaveBeenCalledWith({
                        severity: 'error',
                        detail: 'Please try again later',
                        life: 10000
                    });
                    done();
                } else {
                    fail('expected an HttpResponse, got something else');
                }
            },
            error: () => fail('expected a fallback response, not an error')
        });
    });
});
