/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<b1e4516edad8bf9a4399263d7a685ff0>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { NormalizationSplitOperation } from 'relay-runtime';

export type RelayModernEnvironmentExecuteWithModuleTestMarkdownUserNameRenderer_name$normalization = {|
  +__typename: string,
  +markdown: ?string,
  +data: ?{|
    +markup: ?string,
    +id: ?string,
  |},
|};

*/

var node/*: NormalizationSplitOperation*/ = {
  "kind": "SplitOperation",
  "metadata": {},
  "name": "RelayModernEnvironmentExecuteWithModuleTestMarkdownUserNameRenderer_name$normalization",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "__typename",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "markdown",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "MarkdownUserNameData",
      "kind": "LinkedField",
      "name": "data",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "markup",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "filters": null,
          "handle": "markup_handler",
          "key": "",
          "kind": "ScalarHandle",
          "name": "markup"
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ]
};

if (__DEV__) {
  (node/*: any*/).hash = "dfe2983812ab88e9900e71fa90f336a7";
}

module.exports = node;
