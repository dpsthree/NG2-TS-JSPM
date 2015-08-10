import {bootstrap, Component, View} from 'angular2';
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
    viewBindings: [DataService]
})
@View({
  templateUrl: "app/my-app-template.html",
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

