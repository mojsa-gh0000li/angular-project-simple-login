import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      *ngIf="message"
      [class]="
        'p-3 rounded-md text-white shadow-lg ' +
        (type === 'success' ? 'bg-green-500' : 'bg-red-500')
      "
    >
      {{ message }}
    </div>
  `,
})
export class AlertComponent {
  @Input() message: string = '';
  @Input() type: 'success' | 'error' = 'success';
}
