import {Injectable} from '@angular/core';
import {Observable, BehaviorSubject} from "rxjs";

@Injectable()
export class DataService {

    private dataSubject = new BehaviorSubject<Object>({});

    data$: Observable<Object> = this.dataSubject.asObservable();


    constructor() {
        console.log('created DataService...');
    }

    updateData(data:Object) {
        this.dataSubject.next(data);
    }
}
