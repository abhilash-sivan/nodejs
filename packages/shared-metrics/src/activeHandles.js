/*
 * (c) Copyright IBM Corp. 2021
 * (c) Copyright Instana Inc. and contributors 2016
 */

'use strict';

exports.payloadPrefix = 'activeHandles';

Object.defineProperty(exports, 'currentPayload', {
  get: function () {
    // TODO: _getActiveHandles is deprecated. Replace with getActiveResourcesInfo.
    //       https://nodejs.org/api/deprecations.html#dep0161-process_getactiverequests-and-process_getactivehandles
    //       Added in v16. Replace in major release.
    // @ts-ignore
    return process._getActiveHandles().length;
  }
});
