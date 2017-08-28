<!DOCTYPE html>
<html ng-app="AbsencesApp" lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title>Absences Dashboard</title>
    <link rel="icon" type="image/png" href="images/graduation_cap.png">

    <script src="./js/custom.js"></script>
    <script src="./app/libs/jquery/jquery-1.11.1.min.js"></script>
    <script src="./app/libs/jquery/jquery.slimscroll.min.js"></script>
    <script src="./app/libs/flotcharts/flot-0.8.3/jquery.flot.min.js"></script>
    <script src="./app/libs/flotcharts/flot-0.8.3/jquery.flot.resize.min.js"></script>
    <script src="./app/libs/flotcharts/flot-0.8.3/jquery.flot.categories.min.js"></script>
    <script src="./app/libs/flotcharts/flot-0.8.3/jquery.flot.time.min.js"></script>
    <!-- AngularJs begin -->
    <script src="./app/libs/angularjs/1.3.15/angular.min.js"></script>
    <script src="./app/libs/angularjs/1.3.15/angular-resource.min.js"></script>
    <script src="./app/libs/angularjs/1.3.15/angular-route.min.js"></script>
    <script src="./app/libs/angularjs/1.3.15/angular-touch.min.js"></script>
    <script src="./app/libs/angularjs/1.3.15/angular-animate.min.js"></script>
    <script src="./app/libs/angular-ui-tree/dist/angular-ui-tree.min.js"></script>
    <script src="./app/libs/angularjs/ui-bootstrap-tpls-0.12.1.min.js"></script>
    <script src="./app/libs/ng-i18next/ng-i18next.min.js"></script>
    <script src="./app/libs/i18next-1.9.0/i18next-1.9.0.min.js"></script>
    <script src="./app/libs/flotcharts/angular-flot.js"></script>

    <!--<script src="./bower_components/fullcalendar-2.3.1/lib/moment.min.js"></script>
    <script src="./bower_components/fullcalendar-2.3.1/fullcalendar.min.js"></script>-->
    <script src="./app/libs/angular-datepicker-master/datePicker.js"></script>
    <script src="./app/libs/angular-datepicker-master/datePickerUtils.js"></script>
    <script src="./app/libs/angular-datepicker-master/dateRange.js"></script>
    <script src="./app/libs/angularjs/calendar.js"></script>
    <script src="./app/libs/angularjs/angular-ie7-support.min.js"></script>
    <script src="./app/libs/angularjs/ng-context-menu/ng-context-menu.min.js"></script>
    <script src="./app/libs/ng-locale/angular-locale_ro-md.js"></script>
    <script src="./app/libs/toaster.js"></script>
    <!-- AbsencesApp begin -->
    <script src="./app/definitions.js"></script>
    <script src="./app/controllers/AppController.js"></script>
    <script src="./app/controllers/AdminController.js"></script>
    <script src="./app/controllers/GroupController.js"></script>
    <script src="./app/controllers/NavigationController.js"></script>
    <script src="./app/controllers/SessionController.js"></script>
    <script src="./app/controllers/StudentController.js"></script>
    <script src="./app/controllers/SubjectController.js"></script>
    <script src="./app/controllers/TeacherController.js"></script>
    <script src="./app/controllers/UserController.js"></script>
    <script src="./app/directives/slimscroll.js"></script>
    <script src="./app/directives/enj/elements/enjButtonsRadio.js"></script>
    <script src="./app/directives/enj/elements/enjButtonsCheckbox.js"></script>
    <script src="./app/directives/enj/elements/enjInputText.js"></script>
    <script src="./app/directives/enj/elements/enjMiniBox.js"></script>
    <script src="./app/directives/enj/elements/enjPanel.js"></script>
    <script src="./app/directives/enj/elements/enjSelect.js"></script>
    <script src="./app/directives/enj/elements/enjTextarea.js"></script>
    <script src="./app/directives/enj/elements/enjInputPassword.js"></script>
    <script src="./app/directives/enj/enjPreloader.js"></script>
    <script src="./app/directives/session-admin/AdminSessionCreateWidget.js"></script>
    <script src="./app/directives/session-admin/AdminSessionListWidget.js"></script>
    <script src="./app/directives/group/GroupCreateWidget.js"></script>
    <script src="./app/directives/group/GroupListWidget.js"></script>
    <script src="./app/directives/subjects/SubjectCreateWidget.js"></script>
    <script src="./app/directives/subjects/SubjectListWidget.js"></script>
    <script src="./app/directives/session/SessionFiltersWidget.js"></script>
    <script src="./app/directives/session/SessionInfoWidget.js"></script>
    <script src="./app/directives/session/SessionListWidget.js"></script>
    <script src="./app/directives/user/UserEditWidget.js"></script>
    <script src="./app/directives/absenceButton.js"></script>
    <script src="./app/directives/autocomplete.js"></script>
    <script src="./app/directives/tooltip.js"></script>
    <script src="./app/data.js"></script>
    <script src="./app/app.js"></script>
    <!-- AbsencesApp end -->
    <!-- AngularJs end -->

    <!-- Bootstrap begin -->
    <link href="./app/libs/bootstrap/3.3.4/css/bootstrap.min.css" rel="stylesheet">
    <link href="./app/libs/angular-datepicker-master/datepicker.min.css" rel="stylesheet">
    <link href="./bower_components/font-awesome/css/font-awesome.min.css" rel="stylesheet">
    <link href="./bower_components/weather-icons/css/weather-icons.min.css" rel="stylesheet">
    <link href="./styles/normalize.css" rel="stylesheet">
    <link href="./styles/main.css" rel="stylesheet">
    <link href="./styles/custom.css" rel="stylesheet">
    <link href="./styles/toaster.css" rel="stylesheet">
    <link href="./styles/nav-menu.css" rel="stylesheet">
    <link href="./styles/autocomplete.css" rel="stylesheet">
    <!--<link href="./styles/tpl.css" rel="stylesheet">-->

    <!-- Bootstrap end -->
</head>
<body>
<div>
    <enj-preloader id="spinner" style="display: none"></enj-preloader>
    <div id="wrapper" ng-class="wrapperClass" ng-controller="AppController">
        <div data-ng-hide="isSpecificPage()" class="no-print">
            <section data-ng-include=" 'views/header.html' " id="header" class="top-header"></section>

            <aside ng-controller="NavigationController" data-ng-include=" 'views/nav.html' " id="nav-container"></aside>
        </div>

        <div id="content">
            <section class="container-fluid view-container animate-fade-up"><div data-ng-view class="page page-dashboard"></div></section>
        </div>
    </div>
</div>
</body>
<toaster-container toaster-options="{'time-out': 3000}"></toaster-container>
</html>
