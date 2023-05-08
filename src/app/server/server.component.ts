import { Component } from "@angular/core";

// a component decorator. initialize with object that 
// serves as metadata for the class
@Component({
    selector: 'app-server', // the html tag which we can use this component later. usually prefixed with 'app-'
    templateUrl: './server.component.html', // the html file
    styleUrls: ['./server.component.css']
})
export class ServerComponent {

}