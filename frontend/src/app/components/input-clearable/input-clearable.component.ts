import {Component, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'input-clearable',
  templateUrl: './input-clearable.component.html',
  styleUrls: ['./input-clearable.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule],
})
export class InputClearable {
  @Input() title!: string;
  @Input() placeholder!: string;
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();
}