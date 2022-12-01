import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card'
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field'
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input'
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table'
import {MatLegacyMenuModule as MatMenuModule} from '@angular/material/legacy-menu'
import {MatLegacyPaginatorModule as MatPaginatorModule} from '@angular/material/legacy-paginator';
import {MatLegacyDialogModule as MatDialogModule} from '@angular/material/legacy-dialog';
import {MatLegacySelectModule as MatSelectModule} from '@angular/material/legacy-select';
import {MatLegacyRadioModule as MatRadioModule} from '@angular/material/legacy-radio';
import {MatLegacySliderModule as MatSliderModule} from '@angular/material/legacy-slider';

const myModules = [
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatMenuModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSelectModule,
    MatRadioModule,
    MatSliderModule
]



@NgModule({
  imports: [...myModules],
  exports: [...myModules]
})
export class MaterialModule { }