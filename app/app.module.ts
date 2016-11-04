import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { UpgradeAdapter } from '@angular/upgrade';

// Third Party 
import { BsDropdownModule } from 'ng2-bs-dropdown';
import { DatePicker } from 'ng2-datepicker/ng2-datepicker';

// Services
import { AuthMechanismService } from './services/authmechanism.service';
import { ActivationService } from './services/activation.service';
import { FCSService } from './services/fcs.service';
import { ActivationDataConverterService } from './services/activation-data-converter.service'



// Our components
import { AppComponent } from './app.component';
// import { MrFlowGraphComponent } from './components/mr-flow-graph/mr-flow-graph.component';
import { MrLegendItemComponent } from './components/mr-legend-item/mr-legend-item.component';
import { MrScorecardCellComponent } from './components/mr-scorecard-cell/mr-scorecard-cell.component';
import { MrAuthmechanismPageComponent } from './components/mr-authmechanism-page/mr-authmechanism-page.component';
import { MrPiegraphComponent } from './components/mr-piegraph/mr-piegraph.component';
import { MrScorecardtableComponent } from './components/mr-scorecardtable/mr-scorecardtable.component';
import { MrActivationJourneyComponent } from './components/mr-activation-journey/mr-activation-journey.component';
import { MrPercentViewComponent } from './components/mr-percent-view/mr-percent-view.component';
import { MrPiegraphWithLegendsComponent } from './components/mr-piegraph-with-legends/mr-piegraph-with-legends.component';
import { MrFilterboxComponent } from './components/mr-filterbox/mr-filterbox.component';
import { MrTablehdrCellComponent } from './components/mr-tablehdr-cell/mr-tablehdr-cell.component';
import { MrNumberFormatterComponent } from './components/mr-number-formatter/mr-number-formatter.component';
import { MrPagestepIndicatorComponent } from './components/mr-pagestep-indicator/mr-pagestep-indicator.component';
import { MrRowBookmarkComponent } from './components/mr-row-bookmark/mr-row-bookmark.component';
import { MrTablecolHdrComponent } from './components/mr-tablecol-hdr/mr-tablecol-hdr.component';
import { MrPdfExporterComponent } from './components/mr-pdf-exporter/mr-pdf-exporter.component';
import { MrPopoverComponent } from './components/mr-popover/mr-popover.component';
import { MrFcsdetailPageComponent } from './components/mr-fcsdetail-page/mr-fcsdetail-page.component';
import { MrFcsrowComponent } from './components/mr-fcsrow/mr-fcsrow.component';
import { MrActivationSalesComponent } from './components/mr-activation-sales/mr-activation-sales.component';
import { MrScorecardRowComponent } from './components/mr-scorecard-row/mr-scorecard-row.component';
import { MrScorecardHdrrowComponent } from './components/mr-scorecard-hdrrow/mr-scorecard-hdrrow.component';
import { MrScorecardPageComponent } from './components/mr-scorecard-page/mr-scorecard-page.component';
import { MrActivationGeoviewComponent } from './components/mr-activation-geoview/mr-activation-geoview.component';
import { MrActivationDeviceviewComponent } from './components/mr-activation-deviceview/mr-activation-deviceview.component'

@NgModule({
  declarations: [
    DatePicker,
    AppComponent,
    MrLegendItemComponent,
    MrScorecardCellComponent,
    MrAuthmechanismPageComponent,
    MrPiegraphComponent,
    MrScorecardtableComponent,
    MrActivationJourneyComponent,
    MrPercentViewComponent,
    MrPiegraphWithLegendsComponent,
    MrFilterboxComponent,
    MrTablehdrCellComponent,
    MrNumberFormatterComponent,
    MrPagestepIndicatorComponent,
    MrRowBookmarkComponent,
    MrTablecolHdrComponent,
    MrPdfExporterComponent,
    MrPopoverComponent,
    MrFcsdetailPageComponent,
    MrFcsrowComponent,
    MrActivationSalesComponent,
    MrScorecardRowComponent,
    MrScorecardHdrrowComponent,
    MrScorecardPageComponent,
    MrActivationGeoviewComponent,
    MrActivationDeviceviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BsDropdownModule
  ],
  providers: [AuthMechanismService,ActivationService,FCSService,ActivationDataConverterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
