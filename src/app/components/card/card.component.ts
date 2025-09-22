import { CurrencyPipe, DatePipe, DecimalPipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [UpperCasePipe, CurrencyPipe, DatePipe, SlicePipe],
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent { 
  title = signal('laptop')
  price = signal(18000000)
  date = new Date();
  description = signal('Nueva laptop 17 pro max evolution ultima generacion')
  format = signal<'EEEE MMMM d' | 'd/M/yy h:mm a'>('d/M/yy h:mm a');

  changeDateFormat(){
    const current = this.format();
    this.format.set(current === 'EEEE MMMM d' ? 'd/M/yy h:mm a' : 'EEEE MMMM d');
  }
}
