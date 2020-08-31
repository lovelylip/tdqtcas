import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TdqtcasButtonDemoModule } from './buttons/button/buttondemo.module';
import { TdqtcasSplitbuttonDemoModule } from './buttons/splitbutton/splitbuttondemo.module';

import { TdqtcasDialogDemoModule } from './overlay/dialog/dialogdemo.module';
import { TdqtcasConfirmDialogDemoModule } from './overlay/confirmdialog/confirmdialogdemo.module';
import { TdqtcasLightboxDemoModule } from './overlay/lightbox/lightboxdemo.module';
import { TdqtcasTooltipDemoModule } from './overlay/tooltip/tooltipdemo.module';
import { TdqtcasOverlayPanelDemoModule } from './overlay/overlaypanel/overlaypaneldemo.module';
import { TdqtcasSideBarDemoModule } from './overlay/sidebar/sidebardemo.module';

import { TdqtcasKeyFilterDemoModule } from './inputs/keyfilter/keyfilterdemo.module';
import { TdqtcasInputTextDemoModule } from './inputs/inputtext/inputtextdemo.module';
import { TdqtcasInputTextAreaDemoModule } from './inputs/inputtextarea/inputtextareademo.module';
import { TdqtcasInputGroupDemoModule } from './inputs/inputgroup/inputgroupdemo.module';
import { TdqtcasCalendarDemoModule } from './inputs/calendar/calendardemo.module';
import { TdqtcasCheckboxDemoModule } from './inputs/checkbox/checkboxdemo.module';
import { TdqtcasChipsDemoModule } from './inputs/chips/chipsdemo.module';
import { TdqtcasColorPickerDemoModule } from './inputs/colorpicker/colorpickerdemo.module';
import { TdqtcasInputMaskDemoModule } from './inputs/inputmask/inputmaskdemo.module';
import { TdqtcasInputSwitchDemoModule } from './inputs/inputswitch/inputswitchdemo.module';
import { TdqtcasPasswordIndicatorDemoModule } from './inputs/passwordindicator/passwordindicatordemo.module';
import { TdqtcasAutoCompleteDemoModule } from './inputs/autocomplete/autocompletedemo.module';
import { TdqtcasSliderDemoModule } from './inputs/slider/sliderdemo.module';
import { TdqtcasSpinnerDemoModule } from './inputs/spinner/spinnerdemo.module';
import { TdqtcasRatingDemoModule } from './inputs/rating/ratingdemo.module';
import { TdqtcasSelectDemoModule } from './inputs/select/selectdemo.module';
import { TdqtcasSelectButtonDemoModule } from './inputs/selectbutton/selectbuttondemo.module';
import { TdqtcasListboxDemoModule } from './inputs/listbox/listboxdemo.module';
import { TdqtcasRadioButtonDemoModule } from './inputs/radiobutton/radiobuttondemo.module';
import { TdqtcasToggleButtonDemoModule } from './inputs/togglebutton/togglebuttondemo.module';
import { TdqtcasEditorDemoModule } from './inputs/editor/editordemo.module';

import { TdqtcasMessagesDemoModule } from './messages/messages/messagesdemo.module';
import { TdqtcasToastDemoModule } from './messages/toast/toastdemo.module';
import { TdqtcasGalleriaDemoModule } from './multimedia/galleria/galleriademo.module';

import { TdqtcasFileUploadDemoModule } from './fileupload/fileupload/fileuploaddemo.module';

import { TdqtcasAccordionDemoModule } from './panel/accordion/accordiondemo.module';
import { TdqtcasPanelDemoModule } from './panel/panel/paneldemo.module';
import { TdqtcasTabViewDemoModule } from './panel/tabview/tabviewdemo.module';
import { TdqtcasFieldsetDemoModule } from './panel/fieldset/fieldsetdemo.module';
import { TdqtcasToolbarDemoModule } from './panel/toolbar/toolbardemo.module';
import { TdqtcasScrollPanelDemoModule } from './panel/scrollpanel/scrollpaneldemo.module';
import { TdqtcasCardDemoModule } from './panel/card/carddemo.module';
import { TdqtcasFlexGridDemoModule } from './panel/flexgrid/flexgriddemo.module';

import { TdqtcasTableDemoModule } from './data/table/tabledemo.module';
import { TdqtcasVirtualScrollerDemoModule } from './data/virtualscroller/virtualscrollerdemo.module';
import { TdqtcasPickListDemoModule } from './data/picklist/picklistdemo.module';
import { TdqtcasOrderListDemoModule } from './data/orderlist/orderlistdemo.module';
import { TdqtcasFullCalendarDemoModule } from './data/fullcalendar/fullcalendardemo.module';
import { TdqtcasTreeDemoModule } from './data/tree/treedemo.module';
import { TdqtcasTreeTableDemoModule } from './data/treetable/treetabledemo.module';
import { TdqtcasPaginatorDemoModule } from './data/paginator/paginatordemo.module';
import { TdqtcasGmapDemoModule } from './data/gmap/gmapdemo.module';
import { TdqtcasOrgChartDemoModule } from './data/orgchart/orgchartdemo.module';
import { TdqtcasCarouselDemoModule } from './data/carousel/carouseldemo.module';
import { TdqtcasDataViewDemoModule } from './data/dataview/dataviewdemo.module';

import { TdqtcasBarchartDemoModule } from './charts/barchart/barchartdemo.module';
import { TdqtcasDoughnutchartDemoModule } from './charts/doughnutchart/doughnutchartdemo.module';
import { TdqtcasLinechartDemoModule } from './charts/linechart/linechartdemo.module';
import { TdqtcasPiechartDemoModule } from './charts/piechart/piechartdemo.module';
import { TdqtcasPolarareachartDemoModule } from './charts/polarareachart/polarareachartdemo.module';
import { TdqtcasRadarchartDemoModule } from './charts/radarchart/radarchartdemo.module';

import { TdqtcasDragDropDemoModule } from './dragdrop/dragdrop/dragdropdemo.module';

import { TdqtcasMenuDemoModule } from './menu/menu/menudemo.module';
import { TdqtcasContextMenuDemoModule } from './menu/contextmenu/contextmenudemo.module';
import { TdqtcasPanelMenuDemoModule } from './menu/panelmenu/panelmenudemo.module';
import { TdqtcasStepsDemoModule } from './menu/steps/stepsdemo.module';
import { TdqtcasTieredMenuDemoModule } from './menu/tieredmenu/tieredmenudemo.module';
import { TdqtcasBreadcrumbDemoModule } from './menu/breadcrumb/breadcrumbdemo.module';
import { TdqtcasMegaMenuDemoModule } from './menu/megamenu/megamenudemo.module';
import { TdqtcasMenuBarDemoModule } from './menu/menubar/menubardemo.module';
import { TdqtcasSlideMenuDemoModule } from './menu/slidemenu/slidemenudemo.module';
import { TdqtcasTabMenuDemoModule } from './menu/tabmenu/tabmenudemo.module';

import { TdqtcasBlockUIDemoModule } from './misc/blockui/blockuidemo.module';
import { TdqtcasCaptchaDemoModule } from './misc/captcha/captchademo.module';
import { TdqtcasDeferDemoModule } from './misc/defer/deferdemo.module';
import { TdqtcasInplaceDemoModule } from './misc/inplace/inplacedemo.module';
import { TdqtcasProgressBarDemoModule } from './misc/progressbar/progressbardemo.module';
import { TdqtcasRTLDemoModule } from './misc/rtl/rtldemo.module';
import { TdqtcasTerminalDemoModule } from './misc/terminal/terminaldemo.module';
import { TdqtcasValidationDemoModule } from './misc/validation/validationdemo.module';
import { TdqtcasProgressSpinnerDemoModule } from './misc/progressspinner/progressspinnerdemo.module';

@NgModule({
    imports: [
        TdqtcasMenuDemoModule,
        TdqtcasContextMenuDemoModule,
        TdqtcasPanelMenuDemoModule,
        TdqtcasStepsDemoModule,
        TdqtcasTieredMenuDemoModule,
        TdqtcasBreadcrumbDemoModule,
        TdqtcasMegaMenuDemoModule,
        TdqtcasMenuBarDemoModule,
        TdqtcasSlideMenuDemoModule,
        TdqtcasTabMenuDemoModule,

        TdqtcasBlockUIDemoModule,
        TdqtcasCaptchaDemoModule,
        TdqtcasDeferDemoModule,
        TdqtcasInplaceDemoModule,
        TdqtcasProgressBarDemoModule,
        TdqtcasInputMaskDemoModule,
        TdqtcasRTLDemoModule,
        TdqtcasTerminalDemoModule,
        TdqtcasValidationDemoModule,

        TdqtcasButtonDemoModule,
        TdqtcasSplitbuttonDemoModule,

        TdqtcasInputTextDemoModule,
        TdqtcasInputTextAreaDemoModule,
        TdqtcasInputGroupDemoModule,
        TdqtcasCalendarDemoModule,
        TdqtcasChipsDemoModule,
        TdqtcasInputMaskDemoModule,
        TdqtcasInputSwitchDemoModule,
        TdqtcasPasswordIndicatorDemoModule,
        TdqtcasAutoCompleteDemoModule,
        TdqtcasSliderDemoModule,
        TdqtcasSpinnerDemoModule,
        TdqtcasRatingDemoModule,
        TdqtcasSelectDemoModule,
        TdqtcasSelectButtonDemoModule,
        TdqtcasListboxDemoModule,
        TdqtcasRadioButtonDemoModule,
        TdqtcasToggleButtonDemoModule,
        TdqtcasEditorDemoModule,
        TdqtcasColorPickerDemoModule,
        TdqtcasCheckboxDemoModule,
        TdqtcasKeyFilterDemoModule,

        TdqtcasMessagesDemoModule,
        TdqtcasToastDemoModule,
        TdqtcasGalleriaDemoModule,

        TdqtcasFileUploadDemoModule,

        TdqtcasAccordionDemoModule,
        TdqtcasPanelDemoModule,
        TdqtcasTabViewDemoModule,
        TdqtcasFieldsetDemoModule,
        TdqtcasToolbarDemoModule,
        TdqtcasScrollPanelDemoModule,
        TdqtcasCardDemoModule,
        TdqtcasFlexGridDemoModule,

        TdqtcasBarchartDemoModule,
        TdqtcasDoughnutchartDemoModule,
        TdqtcasLinechartDemoModule,
        TdqtcasPiechartDemoModule,
        TdqtcasPolarareachartDemoModule,
        TdqtcasRadarchartDemoModule,

        TdqtcasDragDropDemoModule,

        TdqtcasDialogDemoModule,
        TdqtcasConfirmDialogDemoModule,
        TdqtcasLightboxDemoModule,
        TdqtcasTooltipDemoModule,
        TdqtcasOverlayPanelDemoModule,
        TdqtcasSideBarDemoModule,

        TdqtcasTableDemoModule,
        TdqtcasDataViewDemoModule,
        TdqtcasVirtualScrollerDemoModule,
        TdqtcasFullCalendarDemoModule,
        TdqtcasOrderListDemoModule,
        TdqtcasPickListDemoModule,
        TdqtcasTreeDemoModule,
        TdqtcasTreeTableDemoModule,
        TdqtcasPaginatorDemoModule,
        TdqtcasOrgChartDemoModule,
        TdqtcasGmapDemoModule,
        TdqtcasCarouselDemoModule,
        TdqtcasProgressSpinnerDemoModule
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TdqtcasprimengModule {}
