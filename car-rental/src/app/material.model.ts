import { NgModule } from '@angular/core';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
// import { NavbarModule, WavesModule, ButtonsModule } from 'ng-uikit-pro-standard';
import { NavbarModule, WavesModule, ButtonsModule,IconsModule } from 'angular-bootstrap-md'



@NgModule({
    imports : [
        MatAutocompleteModule,
        MatBadgeModule,
        MatBottomSheetModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDatepickerModule,
        MatDialogModule,
        MatMenuModule,
        MatIconModule,
        MatSidenavModule,
        MatToolbarModule,
        NavbarModule,
        WavesModule,
        ButtonsModule,
        IconsModule
    ],
    exports : [
        MatAutocompleteModule,
        MatBadgeModule,
        MatBottomSheetModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDatepickerModule,
        MatDialogModule,
        MatMenuModule,
        MatIconModule,
        MatSidenavModule,
        MatToolbarModule,
        NavbarModule,
        WavesModule,
        ButtonsModule,
        IconsModule
    ]

})
export class MaterialsModule {

}