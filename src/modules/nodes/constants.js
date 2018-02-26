import React from 'react';
import {Apps, Computer, LabelOutline} from 'material-ui-icons';

let TYPES = {
  tag: 'tag',
  server: 'server',
  app: 'app'
};
export default {
  TYPES,
  DEFAULT_ICON: <LabelOutline/>,
  TYPE_ICONS: {
    [TYPES.tag]: <LabelOutline/>,
    [TYPES.server]: <Computer/>,
    [TYPES.app]: <Apps/>
  }
}