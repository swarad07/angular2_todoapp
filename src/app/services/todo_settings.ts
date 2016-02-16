import {Injectable} from 'angular2/core';

@Injectable()
export class TodoSettings {
    endpoint: string = 'http://localhost:8083/headless-training';
    username: string = 'aditya';
    password: string = 'aditya';
    format: string = 'application/json';
    type: string = 'todo';

    getEndpoint() {
        return this.endpoint;
    }

    getAuthorization() {
        var auth: string;
        var encodedString: string;
        // define the string
        var string = this.username + ':' + this.password;

        // encode the String
        encodedString = btoa(string);
        return 'Basic ' + encodedString;
    }

    getIoFormat() {
        return this.format;
    }

    getcontentType() {
        return this.type;
    }
}
