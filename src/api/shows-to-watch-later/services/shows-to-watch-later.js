'use strict';

/**
 * shows-to-watch-later service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::shows-to-watch-later.shows-to-watch-later');
