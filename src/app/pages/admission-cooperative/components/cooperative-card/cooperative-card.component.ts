import { Component, Input } from '@angular/core';
import { User } from '@shared/models/user/user.class';

@Component({
  selector: 'app-cooperative-card',
  templateUrl: './cooperative-card.component.html',
  styleUrls: ['./cooperative-card.component.scss']
})
export class CooperativeCardComponent {
  @Input() cooperative: User;
}
