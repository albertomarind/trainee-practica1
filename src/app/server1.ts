import { Component } from "@angular/core";

@Component({
    selector:'mi-server1',
    template:`
        <h1>{{title}}</h1>
    `
})
export class Server1Commponent {
    title = 'hello-world-server';
}