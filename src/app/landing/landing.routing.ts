import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route, RouterModule } from '@angular/router';

import { LandingComponent } from './landing.component';
import { IntroComponent } from './intro/intro.component';
import { EventsComponent } from './events/events.component';
import { LandingResolver } from '../_shared/services/landing-resolver.service';
import { CommonTextComponent } from './footer/common-text/common-text.component';
import { CommonTextResolver } from './footer/common-text/common-text-resolver.service';
import { PricesComponent } from './footer/prices/prices.component';
import { PricesResolver } from './footer/prices/prices-resolver.service';
import { TeacherComponent } from './teachers/teacher/teacher.component';
import { TeacherResolver } from './teachers/teacher/teacher-resolver.service';

const landingRoutes: Route[] = [
  {
    path: '',
    component: LandingComponent,
    resolve: { page: LandingResolver },
    children: [
      {
        path: '',
        component: IntroComponent,
        resolve: { page: LandingResolver },
      },
      {
        path: 'events',
        component: EventsComponent,
        resolve: { page: LandingResolver },
      },
      {
        path: 'info/:slug',
        component: CommonTextComponent,
        resolve: { page: CommonTextResolver },
      },
      {
        path: 'teacher/:id',
        component: TeacherComponent,
        resolve: { teacher: TeacherResolver}
      },
      {
        path: 'prices',
        component: PricesComponent,
        resolve: { memberships: PricesResolver },
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(landingRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class LandingRoutingModule { }

/**
 .state('academy', {
    abstract: true,
    template:"<academy></academy>",
  })
 DONE
 .state('academy.index', {
    url: '/?s',
    template:"<landing content='$ctrl.content'></landing>",
    controller: function ($document, $timeout, $stateParams) {

      var scrollTo = $stateParams.s;
      if (!scrollTo) { return; }
      $timeout(function () {
        $document.duScrollToElementAnimated(angular.element(document.getElementById(scrollTo)));
      }, 300);

    }
  })
 DONE
 .state('academy.course', {
    url: '/kurse/:courseSlug/',
    template: '<course course-slug="courseSlug"></course>',
    controller: function ($scope, $stateParams) {
      $scope.courseSlug = $stateParams.courseSlug;
    }

  })
 .state('academy.lecture', {
    url: '/kurse/:courseSlug/:lectureSlug/',
    template: '<lecture lecture-slug="lectureSlug"></lecture>',
    controller: function ($scope, $stateParams) {
      $scope.lectureSlug = $stateParams.lectureSlug;
    }
  })
 .state('academy.teacher', {
    url: '/teacher/:teacherId/',
    template: '<teacher teacher-id="teacherId"></teacher>',
    controller: function ($scope, $stateParams) {
      $scope.teacherId = $stateParams.teacherId;
    }
  })
 .state('academy.events', {
    url: '/events-all/',
    template: '<events-list></events-list>'
  })
 .state('academy.event', {
    url: '/events-all/:eventId/',
    template: '<event event-id="eventId"></event>',
    controller: function ( $stateParams, $scope) {
      $scope.eventId = $stateParams.eventId;
    }
  })
 .state('academy.ticket', {
    url: '/checkout/:ticketId/',
    template: '<lp-ticket ticket-id="ticketId"></lp-ticket>',
    controller: function ( $stateParams, $scope) {
      $scope.ticketId = $stateParams.ticketId;
    }
  })
 .state('academy.staff', {
    url: '/team/',
    template: '<staff content="$ctrl.content"></staff>'
  })

 .state('academy.prices' , {
    "url": '/prices/',
    template: '<prices></prices>'
  })
 .state('academy.certificate', {
    url: '/certificate/',
    template: '<certificate></certificate>'
  })
 .state('academy.tickets', {
    url: '/tickets/?code',
    template: '<tickets code="code"></tickets>',
    controller: function ($scope, $stateParams) {
      $scope.code = $stateParams.code;
    }
  })
 .state('academy.verifyEmail', {
    url: '/verify-email/?code',
    template: '<verify-email code="code"></verify-email>',
    controller: function ($scope, $stateParams) {
      $scope.code = $stateParams.code;
    }
  })
 .state('academy.resetPassword', {
    url: '/reset-password/?code',
    template: '<reset-password code="code"></reset-password>',
    controller: function ($scope, $stateParams) {
      $scope.code = $stateParams.code;
    }
  })
 DONE
 .state('academy.simple-text', {
    url: '/info/:slug/',
    template: '<simple-text slug="slug"></simple-text>',
    controller: function ($scope, $stateParams) {
      $scope.slug = $stateParams.slug;
    }
  });

 */
