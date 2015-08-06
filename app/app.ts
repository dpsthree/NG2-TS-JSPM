console.log('Hello');
import {bootstrap, Component, View, Injectable} from 'angular2';
import {NgIf} from 'angular2';

class DataService {
  constructor() {
      this.getMessage = () => {
          return "Hello from Service";
      }
  }
}

@Component({
    selector: 'my-app',
    viewInjector: [DataService]
})
@View({
  templateUrl: "app/hello.html",
  directives: [NgIf]
})
class MyAppComponent {
    name: string;
    msg: string;

    constructor(myService: DataService) {
      this.name = "world";
      this.msg = myService.getMessage();
    }
}

bootstrap(MyAppComponent);

