/*
                                   ._                  ._  1.99dev
          .____ ___    .__    .__ /\ \________    .__ /\ \    .___
         /\  __` __`\ / __`\ / __`\ \ ,___  __`\ / __`\ \ \  /',__\
         \ \ \/\ \/\ \\ \Z\ \\ \Z\ \ \ \_ \ \Z\ \\ \Z\ \ \ \_\__, `\
          \ \_\ \_\ \_\\____/ \____/\ \__\ \____/ \____/\ \________/
           \/_/\/_/\/_//___/ \/___/  \/__/\/___/ \/___/  \/_______/
                                           the javascript framework
*/

define(function(){

	"use strict";

	var global = (typeof window != 'undefined') ? window : null;

	return {
		version: '0.0.87',
		build: '%build%',
		install: function(to){
			if (!to) to = global;
			if (to) for (var key in this){
				if (key != 'version' || key != 'build') to[key] = Core[key];
			}
			return this;
		}
	}

});
