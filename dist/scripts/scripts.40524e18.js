"use strict";function setUpValues(a,b,c){void 0===b?(a.Access="",a.Answer="",a.FieldType="",a.ImageUrl="",a.IsActive="",a.Label="Default Label",a.OptionList="",a.OptionListOrientation="",a.PlaceHolder="Default PlaceHolder",a.ProjectFieldId="",a.ProjectId="",a.ProjectName="",a.SortValue="0",a.Status="",a.TemplateName="",a.ToolTip="Default ToolTip",a.ToolTipPlacement="Top",a.ToolTipTrigger="mouseenter",a.VersionControl="No VersionControl at this Moment",a.Directive="",a.Width=""):(a.Access=b.Access,a.Answer=b.Answer,a.FieldType=b.FieldType,a.ImageUrl=b.ImageUrl,a.IsActive=b.IsActive,a.Label=b.Label,a.OptionList=b.OptionList,a.OptionListOrientation=b.OptionListOrientation,a.PlaceHolder=b.PlaceHolder,a.ProjectFieldId=b.ProjectFieldId,a.ProjectId=b.ProjectId,a.ProjectName=b.ProjectName,a.SortValue=b.SortValue,a.Status=b.Status,a.TemplateName=b.TemplateName,a.ToolTip=b.ToolTip,a.ToolTipPlacement=b.ToolTipPlacement,a.ToolTipTrigger=b.ToolTipTrigger,a.VersionControl=b.VersionControl,a.Directive=b.directive,a.Width=b.width)}angular.module("biprojectDevelopmentApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch","ui.grid","ui.grid.edit","ui.grid.resizeColumns","jqwidgets","ngMdIcons","ui.bootstrap","ngMaterial","vAccordion"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/templateBuilder",{templateUrl:"views/template-builder.html",controller:"templateBuilderCtrl",controllerAs:"templateBuilder"}).when("/project/:project/:template/:templateid",{templateUrl:"views/project.html",controller:"ProjectCtrl",controllerAs:"project",resolve:{queryStringCheck:["$q","$location","$route",function(a,b,c){var d=a.defer(),e=c.current.params.project,f=c.current.params.template,g=c.current.params.templateid;return void 0!==f?d.resolve(e+","+g):(d.reject("not_id"),b.path("/chooseProject")),d.promise}]}}).when("/chooseTemplate/:projectChosen",{templateUrl:"views/template.html",controller:"TemplateCtrl",controllerAs:"template",resolve:{route:["$q","$window","$route",function(a,b,c){var d=a.defer(),e=c.current.params.projectChosen;return void 0!==e?d.resolve(e):d.reject("not_id"),d.promise}]}}).otherwise({redirectTo:"/"})}]);var webBaseUrl;webBaseUrl="https://tools.brandinstitute.com/BIWebServices/",webBaseUrl="http://localhost:64378/",angular.module("biprojectDevelopmentApp").factory("bidocsGetProject",["$http","$q",function(a,b){var c,d,e,f;return e={},d=b.defer(),c="api/BIDOCS_GetProject/?projectName=",f=function(b){return a.get(webBaseUrl+c+b).success(function(a){d.resolve(a)}).error(function(a){d.reject(a)}),d.promise},e.getProject=f,e}]).factory("bidocsGetNRDGTemplates",["$http","$q",function(a,b){var c,d,e,f;return e={},d=b.defer(),c="api/BIDOCS_ProjectPreSearch/",f=function(){return a.get(webBaseUrl+c).success(function(a){d.resolve(a)}).error(function(a){d.reject(a)}),d.promise},e.getTemplates=f,e}]).factory("globalVariables",[function(){var a,b,c,d=[],e=[];return a={},b=function(a,b){d.push(a),e.push(b)},c=function(){var a=d[0]+e[0];return a},a.setVariable=b,a.getVariable=c,a}]).factory("getProjectData",["$http","$q",function(a,b){var c,d,e,f;return e={},d=b.defer(),c="api/BiFormCreator/",f=function(b){return a.post(webBaseUrl+c,b).success(function(a){d.resolve(a)}).error(function(a){d.reject(a)}),d.promise},e.getFileds=f,e}]),angular.module("biprojectDevelopmentApp").directive("applicationHeader",function(){return{restrict:"EA",template:'<section class="" style="margin-top:15px;">      <md-toolbar md-primary>        <div class="md-toolbar-tools">          <h3 class="ng-binding">BI Form Creator Module</h3> <!--          <span flex="" class="flex">  <div class="col-md-12 column">--> <!--             <div class="row clearfix">--> <!--               <div class="col-md-4 column">--> <!--                 <div class="btn btn-success" type="button">--> <!--                 <div class="glyphicon glyphicon-home" ng-click="project.goHome()"></div>--> <!--                 </div>--> <!--                 <div class="btn btn-success" type="button">--> <!--                 <div class="glyphicon glyphicon-cog" ng-click="project.goEditTemplate()"></div>--> <!--                 </div>--> <!--               </div>--> <!--               <div class="col-md-4 column">--> <!--                 <div class="btn btn-primary" type="button">--> <!--                   Project Name :--> <!--                   <span class="badge">{{project.projectName}}</span>--> <!--                 </div>--> <!--               </div>--> <!--               <div class="col-md-4 column">--> <!--                 <div class="btn btn-success" type="button">--> <!--                   Template:--> <!--                   <span class="badge">{{project.template}}</span>--> <!--                 </div>--> <!--               </div>--> <!--             </div>--> <!--           </div></span> -->        </div>     </md-toolbar></selection>'}}).directive("onblurSave",["$timeout",function(a){return{restrict:"A",link:function(b,c,d){var e="",f="",g="",h="";b.str="",b.answer="";var i=function(a,b,c,d,e){this.fieldid=a,this.columnname=b,this.rowid=c,this.Answer=d,this.CreatedBy=e};c.bind("blur",function(){e=this.attributes[0].textContent,f=this.attributes[1].textContent,g=this.defaultValue,h=this.value,a(function(){if("TEXT"===b.datasrc.FieldType?b.response=new i(b.datasrc.FieldTypeId,"","",b.datasrc.Answer,"Admin"):"TEXT-AREA"===b.datasrc.FieldType?b.response=new i(b.datasrc.FieldTypeId,"","",b.datasrc.Answer,"Admin"):"RADIO-LIST"===b.datasrc.FieldType?b.response=new i(b.datasrc.FieldTypeId,"","",b.datasrc.Answer,"Admin"):"CHECK-LIST"===b.datasrc.FieldType?b.response=new i(b.datasrc.FieldTypeId,"","",b.datasrc.Answer,"Admin"):"DROPDOWN"===b.datasrc.FieldType?b.response=new i(b.datasrc.FieldTypeId,"","",b.datasrc.Answer,"Admin"):"TYPEAHEAD"===b.datasrc.FieldType?b.response=new i(b.datasrc.FieldTypeId,"","",b.datasrc.Answer,"Admin"):"GRID"===b.datasrc.FieldType&&(b.response=new i(b.datasrc.FieldTypeId,e,f,h,"Admin")),b.response.Answer.length>0){b.str=JSON.stringify(b.response.Answer),b.answer=b.str.replace("[",""),b.answer=b.answer.replace("]","");for(var a=0;a<b.response.Answer.length;a++)b.answer=b.answer.replace('","',",")}else b.answer=JSON.stringify(b.response.Answer);b.str=JSON.stringify(b.response.fieldid),b.fieldid=b.str.replace('"',""),b.fieldid=b.fieldid.replace('"',""),'""'!==JSON.stringify(b.response.rowid)?(b.str=JSON.stringify(b.response.rowid),b.rowid=b.str.replace('"',""),b.rowid=b.rowid.replace('"',"")):b.rowid=JSON.stringify(b.response.rowid);var c="[dbo].[pd_AddAnswer] "+b.fieldid+","+JSON.stringify(b.response.columnname)+","+b.rowid+","+b.answer+","+JSON.stringify(b.response.CreatedBy);console.log(c)},0)}),c.bind("onblurSave",function(){a(function(){b.$apply(d.focus+"=true")},0)})}}}]).directive("biAutoExpand",function(){return{restrict:"A",link:function(a,b){b.bind("keyup",function(a){var b=a.target;if(13===a.keyCode){var c=a.currentTarget,d=c.value,e=d.split("\n"),f=e.length-1;e[f]="• "+e[f],c.value=e.join("\n")}$(b).height(0);var g=$(b)[0].scrollHeight;20>g&&(g=28),$(b).height(g-8)}),setTimeout(function(){var a=b;$(a).height(0);var c=$(a)[0].scrollHeight;20>c&&(c=28),$(a).height(c+2)},0)}}}).directive("biFormCreator",["$compile",function(a){return{restrict:"EA",scope:{datasrc:"="},link:function(b,c){c.empty().append(a(b.datasrc.Directive)(b))}}}]).directive("toolBarMenu",["$compile",function(a){return{restrict:"EA",templateUrl:"views/components/tool-bar-menu.html"}}]).directive("biVersionControl",["$compile",function(a){return{restrict:"EA",scope:{src:"="},link:function(b,c){var d="",e="",f=function(a){a.forEach(function(a){d+='<md-card><div  class="flex-one"><h5>'+a.oldValue+'</h5></div><md-card-actions layout="row" layout-align="end center" class="layout-align-end-center layout-row"><md-button class="md-raised md-primary" aria-label="'+a.adminUser+'"><span class="ng-scope">'+a.adminUser+'</span></md-button><md-button class="md-raised md-default" aria-label="'+a.datetime+'"><span class="ng-scope">'+a.datetime+"</span></md-button></md-card-actions></md-card>"}),e+="<div>"+d+"</div>"};f(JSON.parse(b.src.VersionControl)),c.append(a(e)(b))}}}]).directive("biText",function(){return{restrict:"EA",templateUrl:"views/components/bi-text.html",scope:{mydata:"="},controller:["$scope","$element",function(a,b){var c=this;setUpValues(c,a.$parent.datasrc,b)}],controllerAs:"bitext"}}).directive("biDropdown",function(){return{restrict:"EA",templateUrl:"views/components/bi-dropdown.html",controller:["$scope",function(a){a.optionSelected=function(b){a.datasrc.Answer=b}}]}}).directive("biTextArea",function(){return{restrict:"EA",templateUrl:"views/components/bi-text-area.html",controller:["$scope",function(a){}]}}).directive("biLabel",function(){return{restrict:"EA",templateUrl:"views/components/bi-label.html",controller:function(){}}}).directive("biTitle",function(){return{restrict:"EA",templateUrl:"views/components/bi-title.html",controller:function(){}}}).directive("biSubTitle",function(){return{restrict:"EA",templateUrl:"views/components/bi-sub-title.html",controller:function(){}}}).directive("biTypeahead",function(){return{restrict:"EA",templateUrl:"views/components/bi-typeahead.html",controller:["$scope",function(a){var b=this;a.selected="",b.logKey=function(c){13===c.keyCode&&b.onSelect(a.selected)},b.onSelect=function(b){a.datasrc.Answer=b}}],controllerAs:"typeAheadCtrl"}}).directive("biImage",function(){return{restrict:"EA",templateUrl:"views/components/bi-image.html",controller:function(){}}}).directive("biCheckList",function(){return{restrict:"EA",templateUrl:"views/components/bi-check-list.html",controller:["$scope",function(a){var b=this;b.selectedAnswer=[],b.arraysOfOptions=a.datasrc.OptionList.split(","),b.optionsArrayToDisplay=b.arraysOfOptions,b.labelSize=9*b.arraysOfOptions.reduce(function(a,b){return a.length>b.length?a:b}).length+"px",b.selectedCheckBoxValue=function(c){var d=b.selectedAnswer.indexOf(c);0>d?(b.selectedAnswer.push(c),a.datasrc.Answer=b.selectedAnswer):d>-1&&b.selectedAnswer.splice(d,1);b.selectedAnswer.join(",")}}],controllerAs:"CheckListCtrl"}}).directive("biRadioList",function(){return{restrict:"EA",templateUrl:"views/components/bi-radio-list.html",controller:["$scope",function(a){var b=this;b.arraysOfOptions=a.datasrc.OptionList.split(","),b.optionsArrayToDisplay=b.arraysOfOptions,b.labelSize=9*b.arraysOfOptions.reduce(function(a,b){return a.length>b.length?a:b}).length+"px"}],controllerAs:"RadioListCtrl"}}).directive("pinkMe",function(){return{restrict:"A",link:function(a,b){b.bind("click",function(){var a=b.css("color");"rgb(255, 255, 255)"===a||"#ffffff"===a||"hsl(0, 100%, 100%)"===a||"rgb(255, 255, 255)"===a||"hsl(360, 100%, 100%)"===a||"#ffffff"===a?b.css("color","#F65489"):b.css("color","#ffffff")})}}}).directive("biGrid",function(){return{restrict:"EA",controllerAs:"grid",templateUrl:"views/components/bi-grid.html",controller:["$scope","$http",function(a,b){var c,d=this;c="https://tools.brandinstitute.com/BIWebServices/",c="http://localhost:64378/",d.gridOptions={},d.mobileDataSrc={};var e=a.datasrc.FieldTypeId,f=JSON.stringify("[BI_PROJECT_DEVELOPMENT].[dbo].[pd_GetPhoneGridHeader] "+e),g=JSON.stringify("[BI_PROJECT_DEVELOPMENT].[dbo].[pd_GetRegularGrid] "+e),h=JSON.stringify("[BI_PROJECT_DEVELOPMENT].[dbo].[pd_GetPhoneGrid] "+e),i="api/BiFormCreator/";b.post(c+i,f).success(function(a){d.mobileDataSrc.header=a}),b.post(c+i,h).success(function(a){d.mobileDataSrc=a}),b.post(c+i,g).success(function(a){d.gridOptions.data=a,d.gridOptions.headerTemplate='<div class="ui-grid-top-panel" style="padding: 5px; height: 30px;">  <a class="glyphicon glyphicon-plus" style="width: 4%;"></a>  <a class="glyphicon glyphicon-pencil" style="width: 4%;"></a>  <a class="glyphicon glyphicon-remove" style="width: 4%;"></a>  <a class="glyphicon glyphicon-trash" style="width: 4%;"></a>  <a class="glyphicon glyphicon-floppy-save" style="width: 4%;"></a>  <a class="glyphicon glyphicon-open" style="width: 4%;"></a></div>  <div class="ui-grid-top-panel ui-grid-header-cell sortable"  ng-repeat="col in colContainer.renderedColumns track by col.colDef.name"  ui-grid-header-cell="" col="col">  </div>'}),d.gridOptions.onRegisterApi=function(b){d.gridApi=b,b.edit.on.afterCellEdit(a,function(b,c,d,e){a.rowEntity=b,a.colDef=c,a.newValue=d,a.oldValue=e})}}]}}),angular.module("biprojectDevelopmentApp").controller("MainCtrl",["$http","$location","getProjectFields","bidocsGetProject",function(a,b,c,d){var e=this,f="https://tools.brandinstitute.com/BIWebServices/",g="api/BIDOCS_ProjectPreSearch/";e.searchKey="",e.search=function(){""!==e.searchKey&&a.get(f+g+e.searchKey).success(function(a){e.projects=a,e.fromFactory=a})},e.gotToProject=function(c){var d="api/BIDOCS_GetProject/?projectName=";a.get(f+d+c).then(function(a){return a.data}).then(function(a){a.length>0?b.path("/setProject/"+a[0].ProjectName+"/"+a[0].Description+"/"+a[0].TemplateId):b.path("/chooseTemplate/"+c)})}}]),angular.module("biprojectDevelopmentApp").controller("ProjectCtrl",["getProjectData","$routeParams",function(a,b){var c=this;c.toggleEditClass="glyphicon glyphicon-save ",c.btnColorClass="btn btn-success",c.textFieldFocus=!0,c.isReadOnly=!0,c.btnToolTip="Save",c.someFocusVariable=!0,c.projectName=b.project,c.template=b.template,c.projectLogoImagePath="images/Samsung-Logo.jpg",c.inputControlItemsService={},c.goHome=function(){$location.path("/chooseProject")},c.goEditTemplate=function(){$location.path("/projectTemplate/"+c.ProjectIdForTemplate)};var d="[BI_PROJECT_DEVELOPMENT].[dbo].[pd_GetFields] 10008";d=JSON.stringify(d),a.getFileds(d).then(function(a){c.componentConfig=a})}]),angular.module("biprojectDevelopmentApp").controller("TemplateCtrl",["$routeParams","bidocsGetNRDGTemplates","$location",function(a,b,c){var d=this;d.projectName=a.projectChosen,d.iconFill="fill: #ff0000",d.templateTextClassFill="danger",d.templateName="NO TEMPLATE",d.goButtonEnable=!0,d.icon="lock_outline",d.labelColor="danger",d.tooltip="Please select a template before continue";var e="";b.getTemplates().then(function(a){d.items=a}),d.selectedTemplate=function(a){d.templateName=a.currentTarget.innerHTML,d.iconFill="fill: #5CB85C",d.templateTextClassFill="success",d.goButtonEnable=!1,d.icon="play_circle_fill",d.tooltip="GO!",e=a.target.dataset.templateid,d.labelColor="success"},d.goToLayout=function(){if("NO TEMPLATE"!==d.templateName){var a=d.templateName,b=d.projectName;c.path("/project/"+b+"/"+a+"/"+e)}}}]),angular.module("biprojectDevelopmentApp").controller("generalController",["$scope",function(a){a.showMenuToggle=function(){a.hideToggle!==!0?(a.hideToggle=!0,a.showToggle=!0):(a.hideToggle=!1,a.showToggle=!1)}}]),angular.module("biprojectDevelopmentApp").controller("toolBarMenu",["$mdDialog",function(a){var b;this.openMenu=function(a,c){b=c,a(c)},this.notificationsEnabled=!0,this.toggleNotifications=function(){this.notificationsEnabled=!this.notificationsEnabled},this.redial=function(){a.show(a.alert().targetEvent(b).clickOutsideToClose(!0).parent("body").title("Suddenly, a redial").textContent("You just called a friend; who told you the most amazing story. Have a cookie!").ok("That was easy")),b=null},this.checkVoicemail=function(){}}]),angular.module("biprojectDevelopmentApp").controller("templateBuilderCtrl",["getProjectData","$routeParams","$http","$compile","$scope",function(a,b,c,d,e){var f=this,g="api/BiFormCreator/",h="https://tools.brandinstitute.com/BIWebServices/";f.toggleEditClass="glyphicon glyphicon-save ",f.btnColorClass="btn btn-success",f.textFieldFocus=!0,f.isReadOnly=!0,f.btnToolTip="Save",f.someFocusVariable=!0,f.component=[],c.post(h+g,JSON.stringify("[BI_PROJECT_DEVELOPMENT].[dbo].[pd_GetFieldtype]")).success(function(a){f.components=a}),f.createComponent=function(a){var b=angular.element($("#testElement"));b.empty().after(d(a)(e))},f.projectName=b.project,f.template=b.template,f.projectLogoImagePath="images/Samsung-Logo.jpg",f.inputControlItemsService={},f.goHome=function(){$location.path("/chooseProject")},f.goEditTemplate=function(){$location.path("/projectTemplate/"+f.ProjectIdForTemplate)};var i="[BI_PROJECT_DEVELOPMENT].[dbo].[pd_GetFields] 10008";i=JSON.stringify(i),a.getFileds(i).then(function(a){f.componentConfig=a})}]),angular.module("biprojectDevelopmentApp").run(["$templateCache",function(a){a.put("views/components/bi-check-list.html",'<div class="container-fluid"> <tool-bar-menu></tool-bar-menu> <md-card-title> <md-card-title-text class="text-primary"> <span class="md-headline" style="font-size:18px">{{datasrc.Label}}</span> </md-card-title-text> </md-card-title> <md-card-content> <div class="col-md-8 col-md-offset-4 col-xs-12"> <md-radio-group layout="row" ng-repeat="option in CheckListCtrl.optionsArrayToDisplay track by $index"> <md-checkbox onblur-save class="reponsive-display-list md-primary" data-fieldtypeid="{{datasrc.FieldTypeId}}" data-projectid=" {{datasrc.ProjectId}}" ng-click="CheckListCtrl.selectedCheckBoxValue(option)" value="{{option}}"> <div ng-attr-style="width: {{CheckListCtrl.labelSize}} !important"> {{option}} </div> </md-checkbox> </md-radio-group> </div> </md-card-content> </div>'),a.put("views/components/bi-dropdown.html",'<div class="container-fluid"> <tool-bar-menu></tool-bar-menu> <md-card-title> <md-card-title-text class="text-primary"> <span class="md-headline" style="font-size:18px" ng-show="datasrc.IsActive">{{datasrc.Label}}</span> <!-- <span class="md-subhead text-default">Card subheader</span> --> </md-card-title-text> </md-card-title> <md-card-content> <div class="row"> <div class="col-md-8 col-md-offset-4"> <select onblur-save name="{{datasrc.Label}}" class="form-control" focus="someFocusVariable" data-projectid=" {{datasrc.ProjectID}}" data-projectinputcontrolid="{{datasrc.ProjectInputControlId}}" ng-model="answer" ng-show="datasrc.IsActive" ng-change="optionSelected(answer)" ng-options="item for item in datasrc.OptionList.split(\',\')"> <option value="">Choose One</option> </select> </div> </div> </md-card-content> </div>'),a.put("views/components/bi-grid.html",'<div class="container-fluid"> <div class="row visible-md visible-lg" data-fieldtypeid="{{datasrc.FieldTypeId}}" data-projectid=" {{datasrc.ProjectId}}"> <div ui-grid-edit class="grid" ui-grid="grid.gridOptions"></div> </div> <v-accordion class="vAccordion--default" multiple data-fieldtypeid="{{datasrc.FieldTypeId}}" data-projectid=" {{datasrc.ProjectId}}"> <!-- <v-accordion class="vAccordion--default visible-xs visible-sm" multiple> --> <!-- add expanded attribute to open the section --> <v-pane enabled ng-repeat="item in grid.mobileDataSrc[0] track by $index"> <v-pane-header> {{grid.mobileDataSrc[1].header[$index]}} </v-pane-header> <v-pane-content> <div ng-repeat="content in item track by $index"> <div class="row"> <div class="col-xs-12"> <span class="bi-mobile-grid">{{$index+1}}.</span> <!-- PLEASE DO NOT CHANGE POSITION OF data-header and data-index --> <textarea data-header="{{grid.mobileDataSrc[1].header[$index]}}" data-index="{{$index+1}}" bi-auto-expand onblur-save class="form-control bi-form-control-mobile-grid" style="border: 0">{{content}}</textarea> <hr> </div> </div> </div> </v-pane-content> </v-pane> </v-accordion> </div>'),a.put("views/components/bi-image.html",'<div class="container-fluid"> <div class="row"> <div class="col-md-12"> <tool-bar-menu></tool-bar-menu> </div> </div> <div class="row"> <div class="col-md-12"> <img ng-src="{{datasrc.ImageUrl}}" style="display: block; margin-left: auto; margin-right: auto; padding:10px" uib-tooltip="{{datasrc.ToolTip}}" tooltip-trigger="hover" tooltip-placement="{{datasrc.ToolTipPlacement}}" width="{{datasrc.Width}}!important" data-projectid=" {{datasrc.ProjectId}}" data-fieldtypeid="{{datasrc.FieldTypeId}}"> </div> </div> </div>'),a.put("views/components/bi-label.html",'<div class="container-fluid"> <div class="row"> <div class="col-md-12"> <label class="text-primary" data-projectid="{{datasrc.ProjectId}}" ng-show="datasrc.IsActive">{{datasrc.Label}}</label> </div> </div> </div>'),a.put("views/components/bi-radio-list.html",'<div class="container-fluid"> <tool-bar-menu></tool-bar-menu> <md-card-title> <md-card-title-text class="text-primary"> <span class="md-headline" ng-show="datasrc.IsActive" style="font-size:18px">{{datasrc.Label}}</span> </md-card-title-text> </md-card-title> <md-card-content> <div class="col-md-8 col-md-offset-4 col-xs-12"> <md-radio-group layout="row" ng-model="datasrc.Answer" ng-repeat="option in RadioListCtrl.optionsArrayToDisplay track by $index"> <md-radio-button onblur-save class="reponsive-display-list" data-fieldtypeid="{{datasrc.FieldTypeId}}" data-projectid=" {{datasrc.ProjectId}}" ng-value="option" ng-click="RadioListCtrl.selectedRadioButtonValue(option)"> <div ng-attr-style="width: {{RadioListCtrl.labelSize}} !important"> {{option}} </div> </md-radio-button> </md-radio-group> </div> </md-card-content> </div>'),a.put("views/components/bi-sub-title.html",'<div class="container-fluid"> <div class="row"> <div class="col-md-12"> <h3 class="text-muted" data-projectid="{{datasrc.ProjectId}}" ng-show="datasrc.IsActive">{{datasrc.Label}}</h3> </div> </div> </div>'),a.put("views/components/bi-text-area.html",'<div class="container-fluid"> <tool-bar-menu></tool-bar-menu> <md-card-title> <md-card-title-text class="text-primary"> <span class="md-headline" style="font-size:18px" ng-show="datasrc.IsActive">{{datasrc.Label}}</span> <!-- <span class="md-subhead text-default">Card subheader</span> --> </md-card-title-text> </md-card-title> <md-card-content> <div class="row"> <div class="col-md-8 col-md-offset-4"> <textarea onblur-save type="{{datasrc.DataType}}" class="form-control" ng-attr-placeholder="{{datasrc.PlaceHolder}}" value="{{datasrc.Answer}}" uib-tooltip="{{datasrc.ToolTip}}" tooltip-placement="{{datasrc.ToolTipPlacement}}" tooltip-trigger="{{datasrc.ToolTipTrigger}}" data-projectid=" {{datasrc.ProjectId}}" data-fieldtypeid="{{datasrc.FieldTypeId}}" ng-readonly="false" ng-model="datasrc.Answer" ng-show="datasrc.IsActive"></textarea> </div> </div> </md-card-content> </div>'),a.put("views/components/bi-text.html",'<md-card> <tool-bar-menu></tool-bar-menu> <md-card-title> <md-card-title-text class="text-primary"> <span class="md-headline" style="font-size:18px">{{bitext.Label}}</span> <!-- <span class="md-subhead text-default">Card subheader</span> --> </md-card-title-text> </md-card-title> <md-card-content> <div class="row"> <div class="col-md-8 col-md-offset-4"> <input onblur-save type="{{bitext.FieldType}}" class="form-control" placeholder="{{bitext.PlaceHolder}}" value="{{bitext.Answer}}" uib-tooltip="{{bitext.ToolTip}}" tooltip-placement="{{bitext.ToolTipPlacement}}" tooltip-trigger="{{bitext.ToolTipTrigger}}" data-projectid=" {{bitext.ProjectId}}" data-projectfieldid="{{bitext.ProjectFieldId}}" ng-model="bitext.Answer"> </div> </div> </md-card-content> </md-card>'),a.put("views/components/bi-title.html",'<div class="container-fluid"> <div class="row"> <div class="col-md-12"> <h1 class="text-mute text-center" data-projectid="{{datasrc.ProjectId}}" ng-show="datasrc.IsActive">{{datasrc.Label}}</h1> </div> </div> </div>'),a.put("views/components/bi-typeahead.html",'<div class="container-fluid"> <tool-bar-menu></tool-bar-menu> <md-card-title> <md-card-title-text class="text-primary"> <span class="md-headline" style="font-size:18px" ng-show="datasrc.IsActive">{{datasrc.Label}}</span> <!-- <span class="md-subhead text-default">Card subheader</span> --> </md-card-title-text> </md-card-title> <md-card-content> <div class="row"> <div class="col-md-8 col-md-offset-4"> <input onblur-save type="text" uib-typeahead="option for option in datasrc.OptionList.split(\',\') | filter:$viewValue | limitTo:8" class="form-control ng-valid ng-dirty ng-valid-parse ng-touched" style="height: 100%" placeholder="{{datasrc.PlaceHolder}}" data-projectid=" {{datasrc.ProjectId}}" data-fieldtypeid="{{datasrc.FieldTypeId}}" ng-keyup="typeAheadCtrl.logKey($event)" typeahead-on-select="typeAheadCtrl.onSelect($item, $model, $label)" ng-model="selected"> </div> </div> </md-card-content> </div>'),a.put("views/components/header-template.html",'<div class="ui-grid-top-panel" style="padding: 5px; height: 30px"> <a class="glyphicon glyphicon-plus" style="width: 4%"></a> <a class="glyphicon glyphicon-pencil" style="width: 4%"></a> <a class="glyphicon glyphicon-remove" style="width: 4%"></a> <a class="glyphicon glyphicon-trash" style="width: 4%"></a> <a class="glyphicon glyphicon-floppy-save" style="width: 4%"></a> <a class="glyphicon glyphicon-open" style="width: 4%"></a> <a class="glyphicon glyphicon-calendar" style="width: 4%"></a> </div> <div class="ui-grid-top-panel ui-grid-header-cell sortable" ng-repeat="col in colContainer.renderedColumns track by col.colDef.name" ui-grid-header-cell="" col="col"> </div>'),a.put("views/components/tool-bar-menu.html",'<div class="row custom" ng-controller="generalController" style="float:right"> <div class="col-md-12"> <div class="row"> <div ng-if="!hideToggle" style="height:4px;background-color:white;text-align:left;margin:0 5px"> <span class="glyphicon glyphicon-minus text-primary" ng-click="showMenuToggle()" ng-hide="hideToggle" style="font-size:25px;top:-10px;right:8px"></span> </div> </div> <div ng-if="hideToggle"> <div class="row"> <div class="col-xs-4"> <md-checkbox aria-label class="bi-blue white-frame"></md-checkbox> </div> <div class="col-xs-4"> <ng-md-icon class="bi-blue" icon="clear" ng-click="showMenuToggle()" style="color:#ffffff; font-size: 20px"></ng-md-icon> </div> <div class="col-xs-4 custom"> <ng-md-icon class="bi-blue" aria-hidden="true" data-projectid=" {{datasrc.ProjectId}}" icon="history" style="float: left; color:#ffffff;font-size:20px" tooltip-trigger="click" tooltip-placement="bottom" class="bottom-left" uib-tooltip-template="\'views/components/tool-tip-template.html\'"></ng-md-icon> </div> </div> </div> </div> </div>'),a.put("views/components/tool-tip-template.html",'<bi-version-control src="datasrc"></bi-version-control>'),a.put("views/main.html",'<!doctype html> <div class="container"> <application-header></application-header> <!-- SEARCH PROJECT --> <div class="container-fluid"> <div class="row"> <div class="col-lg-12" style="margin:10px"> <div class="col-lg-6"> <div class="input-group"> <span class="input-group-addon" id="basic-addon2">Search</span> <input type="search" class="form-control" placeholder="type project name" autofocus ng-keyup="main.search($event)" ng-model="main.searchKey"> </div> </div> </div> <hr> </div> </div> <!-- LIST PROJECTS --> <div class="jumbotron" style="text-align:left"> <div ng-repeat="project in main.projects track by $index"><div><span><strong>Project : </strong></span> <a ng-click="main.gotToProject(project.ProjectName)" style="cursor:pointer">{{project.ProjectName}}</a></div></div> </div> <section class="panel panel-default"> <div class="panel-heading"><strong><span class="glyphicon glyphicon-th"></span> Wizard Form</strong></div> <div class="panel-body"> <div class="vertical wizard clearfix" data-ui-wizard-form="" role="application" id="steps-uid-1"><div class="steps clearfix"><ul role="tablist"><li role="tab" class="first current" aria-disabled="false" aria-selected="true"><a id="steps-uid-1-t-0" href="#steps-uid-1-h-0" aria-controls="steps-uid-1-p-0"><span class="current-info audible">current step: </span><span class="number">1.</span> First Step</a></li><li role="tab" class="done" aria-disabled="false" aria-selected="false"><a id="steps-uid-1-t-1" href="#steps-uid-1-h-1" aria-controls="steps-uid-1-p-1"><span class="number">2.</span> Second Step</a></li><li role="tab" class="last done" aria-disabled="false" aria-selected="false"><a id="steps-uid-1-t-2" href="#steps-uid-1-h-2" aria-controls="steps-uid-1-p-2"><span class="number">3.</span> Third Step</a></li></ul></div><div class="content clearfix"> <h1 id="steps-uid-1-h-0" tabindex="-1" class="title current">First Step</h1> <div id="steps-uid-1-p-0" role="tabpanel" aria-labelledby="steps-uid-1-h-0" class="body current" aria-hidden="false" style="display: block">First Content</div> <h1 id="steps-uid-1-h-1" tabindex="-1" class="title">Second Step</h1> <div id="steps-uid-1-p-1" role="tabpanel" aria-labelledby="steps-uid-1-h-1" class="body" aria-hidden="true" style="display: none">Second Content</div> <h1 id="steps-uid-1-h-2" tabindex="-1" class="title">Third Step</h1> <div id="steps-uid-1-p-2" role="tabpanel" aria-labelledby="steps-uid-1-h-2" class="body" aria-hidden="true" style="display: none">Third Content</div> </div><div class="actions clearfix"><ul role="menu" aria-label="Pagination"><li class="disabled" aria-disabled="true"><a href="#previous" role="menuitem">Previous</a></li><li aria-hidden="false" aria-disabled="false" class="" style="display: block"><a href="#next" role="menuitem">Next</a></li><li aria-hidden="true" style="display: none"><a href="#finish" role="menuitem">Finish</a></li></ul></div></div> </div> </section> </div>'),a.put("views/project.html",'<div class="container"> <application-header></application-header> <form class="form-horizontal" role="form"> <div ng-repeat="component in  project.componentConfig track by $index" ng-show="{{component.Access}}" style="padding-top: 20px"> <div ng-if="component.FieldType !== \'TITLE\' && component.FieldType !== \'SUBTITLE\'\n                && component.FieldType !== \'GRID\' && component.FieldType !== \'LABEL\'"> <div bi-form-creator datasrc="component"></div> </div> </div> </form> </div>'),a.put("views/template-builder.html",'<application-header></application-header> <div class="container-fluid"> <div class="row"> <div class="col-md-5"> <div class="row" ng-repeat="component in templateBuilder.components track by $index"> <div class="col-md-2 col-md-offset-10"> <!-- this is used to keep consistensy in color, shape and same framework --> <md-button class="md-raised md-primary" data-fieldtypeid="{{component.FieldTypeId}}" ng-click="templateBuilder.createComponent(component.Directive)">{{component.FieldType}}</md-button> </div> </div> </div> <div class="col-md-7"> <md-card> <md-content> <md-title class="text-center"> <h1>PREVIEW</h1> </md-title> <hr> <div id="testElement"> <h3>i\'m appending</h3> </div> <form class="form-horizontal" role="form"> <div ng-repeat="component in  templateBuilder.componentConfig track by $index" ng-show="{{component.Access}}" style="padding-top: 20px"> <div ng-if="component.FieldTypeId !== \'Title\' && component.FieldTypeId !== \'Subtitle\'\r\n'+"                                  && component.FieldTypeId !== 'Grid' && component.FieldTypeId !== 'Label'\"> <md-card> <div bi-form-creator datasrc=\"component\"></div> </md-card> </div> <div ng-if=\"component.FieldTypeId === 'Title' || component.FieldTypeId === 'Subtitle'\r\n                                    || component.FieldTypeId === 'Grid' || component.FieldTypeId === 'Label'\"> <div bi-form-creator datasrc=\"component\"></div> </div> </div> </form> </md-content> </md-card> </div> </div> </div>"),a.put("views/template.html",'<!-- PICK TEMPLATE --> <div class="container"> <application-header></application-header> <div class="container-fluid"> <div class="row"> <div class="col-md-12" style="margin: 10px 0px 0px 11px"> <div class="row"> <div class="col-md-2"> <div class="row"> <div class="btn-group dropdown" uib-dropdown=""> <button id="split-button" type="button" class="btn btn-default">Template</button> <button type="button" class="btn btn-info dropdown-toggle" uib-dropdown-toggle="" aria-haspopup="true" aria-expanded="false"> <span class="caret"></span> <span class="sr-only">Split button!</span> </button> <ul uib-dropdown-menu="" role="menu" aria-labelledby="split-button" class="dropdown-menu"> <li ng-repeat="choice in template.items"> <a href data-templateid="{{choice.TemplateId}}" ng-click="template.selectedTemplate($event)">{{choice.Description}}</a> </li> </ul> </div> </div> </div> <div class="col-md-5"> <div class="row"> <div class="col-md-12"> <h4> <span class="label label-info">Project Name </span> </h4> </div> <div class="col-md-12"> <h4 style="padding-top: 10px"> <span class="alert alert-info">{{template.projectName}}</span> </h4> </div> </div> </div> <div class="col-md-5"> <div class="row"> <div class="col-md-12"> <h4> <span class="label label-{{template.labelColor}}">Template Name</span> </h4> </div> <div class="col-md-12"> <h4 style="padding-top: 10px"> <span class="alert alert-{{template.templateTextClassFill}}">{{template.templateName}}</span> </h4> </div> </div> </div> </div> <hr> <ng-md-icon tooltip="{{template.tooltip}}" tooltip-trigger="mouseenter" icon="{{template.icon}}" ng-click="template.goToLayout()" ng-attr-style="{{template.iconFill}}; cursor: pointer;" size="42" class="pull-right"></ng-md-icon> </div> </div> </div> </div> <!-- END OF PICKING TEMPLATE -->');
}]);