import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatToolbarModule } from "@angular/material/toolbar";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule } from "@angular/material/card";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { ClipboardModule } from "@angular/cdk/clipboard";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSliderModule } from "@angular/material/slider";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { FindByDistComponent } from "./find-by-dist/find-by-dist.component";
import { FilterComponent } from "./filter/filter.component";
import { DistrictSearchComponent } from "./district-search/district-search.component";
import { ResultListComponent } from "./widget/result-list/result-list.component";
import { ResultNameComponent } from "./widget/result-name/result-name.component";
@NgModule({
  declarations: [
    AppComponent,
    FindByDistComponent,
    FilterComponent,
    DistrictSearchComponent,
    ResultListComponent,
    ResultNameComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatButtonToggleModule,
    MatSliderModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    ClipboardModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    FlexLayoutModule,
    MatSelectModule,
    MatGridListModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatDialogModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatTabsModule,
    MatRadioModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
