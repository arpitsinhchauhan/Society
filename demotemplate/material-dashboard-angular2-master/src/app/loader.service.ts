import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
declare const $: any;
@Injectable()

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  initialLoader = true;

  constructor() { }

  public status: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  display(value: boolean) {
    if(this.initialLoader && value){
      setTimeout(() => {
        $("#initialLoader").remove();  // intial loader removed ..
      }, 500);      
      this.initialLoader = false;
    }

      this.status.next(value);
  }

}
