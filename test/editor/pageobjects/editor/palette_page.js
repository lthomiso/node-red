/**
 * Copyright JS Foundation and other contributors, http://js.foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

var idMap = {
    // common
    "inject": ".red-ui-palette-node[data-palette-type='inject']",
    "debug": ".red-ui-palette-node[data-palette-type='debug']",
    // function
    "function": ".red-ui-palette-node[data-palette-type='function']",
    "change": ".red-ui-palette-node[data-palette-type='change']",
    "range": ".red-ui-palette-node[data-palette-type='range']",
    "template": ".red-ui-palette-node[data-palette-type='template']",
    // network
    "mqttIn": ".red-ui-palette-node[data-palette-type='mqtt in']",
    "mqttOut": ".red-ui-palette-node[data-palette-type='mqtt out']",
    "httpIn": ".red-ui-palette-node[data-palette-type='http in']",
    "httpResponse": ".red-ui-palette-node[data-palette-type='http response']",
    "httpRequest": ".red-ui-palette-node[data-palette-type='http request']",
    // sequence
    "join": ".red-ui-palette-node[data-palette-type='join']",
    "split": ".red-ui-palette-node[data-palette-type='split']",
    // parser
    "csv": ".red-ui-palette-node[data-palette-type='csv']",
    "html": ".red-ui-palette-node[data-palette-type='html']",
    "json": ".red-ui-palette-node[data-palette-type='json']",
    "xml": ".red-ui-palette-node[data-palette-type='xml']",
    "yaml": ".red-ui-palette-node[data-palette-type='yaml']",
    // storage
    "fileIn": ".red-ui-palette-node[data-palette-type='file in']",
};

function getId(type) {
    return idMap[type];
}

module.exports = {
    getId: getId,
};
