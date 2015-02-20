import angular from 'angular';

export function bootstrap() {
    console.info('Bootstrap launched');
    console.log('AngularJS %s is here', angular.version.full);
}
