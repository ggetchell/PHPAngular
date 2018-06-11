import { Component } from '@angular/core';

@Component ({
    selector: 'app-warning-alert',
    template: '
        <p>This is your last warning! auto-destruct sequence initiated</p>
    '

    styles: [
    '
        p {
            padding: 20px;
            background-color: mistyred;
            border: 1px solid red;
        }
    '

    ]
})
export class WarningAlertComponent {

}

