'use strict';

/**
 * almdn service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::almdn.almdn');
