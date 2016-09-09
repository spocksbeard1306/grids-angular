'use strict';

/**
 * @ngdoc service
 * @name gridsApp.tableSolicitud
 * @description
 * # tableSolicitud
 * Service in the gridsApp.
 */
angular.module('gridsApp')
  .service('tableSolicitud', function () {
    // AngularJS will instantiate a singleton by calling 'new' on this function
    var rows = [
	  		{
	  			f1: 'V11',
	  			f2: 'V12',
	  			f3: 'V13',
	  			f4: 'V14',
	  			f5: 'V15'
	  		},
	  		{
	  			f1: 'V21',
	  			f2: 'V22',
	  			f3: 'V23',
	  			f4: 'V24',
	  			f5: 'V25'
	  		},
	  		{
	  			f1: 'V31',
	  			f2: 'V32',
	  			f3: 'V33',
	  			f4: 'V34',
	  			f5: 'V35'
	  		},
	  		{
	  			f1: 'V41',
	  			f2: 'V42',
	  			f3: 'V43',
	  			f4: 'V44',
	  			f5: 'V45'
	  		},
	  		{
	  			f1: 'V51',
	  			f2: 'V52',
	  			f3: 'V53',
	  			f4: 'V54',
	  			f5: 'V55'
	  		},
	  		{
	  			f1: 'V61',
	  			f2: 'V62',
	  			f3: 'V63',
	  			f4: 'V64',
	  			f5: 'V65'
	  		},
	  		{
	  			f1: 'V71',
	  			f2: 'V72',
	  			f3: 'V73',
	  			f4: 'V74',
	  			f5: 'V75'
	  		},
	  		{
	  			f1: 'V81',
	  			f2: 'V82',
	  			f3: 'V83',
	  			f4: 'V84',
	  			f5: 'V85'
	  		},
	  		{
	  			f1: 'V91',
	  			f2: 'V92',
	  			f3: 'V93',
	  			f4: 'V94',
	  			f5: 'V95'
	  		},
	  		{
	  			f1: 'V101',
	  			f2: 'V102',
	  			f3: 'V103',
	  			f4: 'V104',
	  			f5: 'V105'
	  		},
	  		{
	  			f1: 'V111',
	  			f2: 'V112',
	  			f3: 'V113',
	  			f4: 'V114',
	  			f5: 'V115'
	  		}
  		];
  	this.getRows = function(){
  		return rows;
  	};
  });
