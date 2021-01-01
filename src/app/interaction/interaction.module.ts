import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InteractionRoutingModule } from './interaction-routing.module';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SiblingComponent } from './sibling/sibling.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ParentComponent, ChildComponent, SiblingComponent],
  imports: [CommonModule, InteractionRoutingModule, FormsModule],
})
export class InteractionModule {}
