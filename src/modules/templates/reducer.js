// import constants from './constants';

const initialState = {
  data: getTempData()
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    default:
      return state;
  }
}

function getTempData() {
  return [
    {
      'fields': [
        {
          'name': 'host',
          'label': 'Hostname',
          'type': 'string',
          'default': 'localhost',
          'id': '5a8c7914ae05974bc4b5d145'
        },
        {
          'name': 'port',
          'label': 'Port',
          'type': 'integer',
          'default': 3306,
          'id': '5a8c7914ae05974bc4b5d144'
        }
      ],
      'id': '5a8c7914ae05974bc4b5d146',
      'projectId': '5a8c7914ae05974bc4b5d143',
      'name': 'database',
      'label': 'Database Connection',
      '__v': 0
    },
    {
      'fields': [
        {
          'name': 'enabled',
          'label': 'Enabled',
          'type': 'boolean',
          'default': true,
          'id': '5a8c7914ae05974bc4b5d148'
        },
        {
          'name': 'prefix',
          'label': 'Prefix',
          'type': 'string',
          'id': '5a8c7914ae05974bc4b5d147'
        }
      ],
      'id': '5a8c7914ae05974bc4b5d149',
      'projectId': '5a8c7914ae05974bc4b5d143',
      'name': 'logging',
      'label': 'Logging',
      '__v': 0
    },
    {
      'fields': [
        {
          'name': 'quality',
          'label': 'Quality',
          'type': 'integer',
          'default': 60,
          'id': '5a8c7914ae05974bc4b5d14a'
        }
      ],
      'id': '5a8c7914ae05974bc4b5d14b',
      'projectId': '5a8c7914ae05974bc4b5d143',
      'name': 'images',
      'label': 'Image Optimization',
      '__v': 0
    },
    {
      'fields': [
        {
          'name': 'tokenName',
          'label': 'Token Header Name',
          'type': 'string',
          'default': 'token',
          'id': '5a8c7914ae05974bc4b5d14c'
        }
      ],
      'id': '5a8c7914ae05974bc4b5d14d',
      'projectId': '5a8c7914ae05974bc4b5d143',
      'name': 'mobileAuth',
      'label': 'Mobile Authorization',
      '__v': 0
    },
    {
      'projectId': '5a8c7914ae05974bc4b5d143',
      'name': 'longShit',
      'label': 'Some Long shit',
      'fields': [
        {
          'name': 'longShit',
          'label': 'Some long shit ',
          'type': 'string',
          'default': 'token',
          'id': '5a8c7914ae05974bc4b5d14c'
        },{
          'name': 'longShit',
          'label': 'Some long shit ',
          'type': 'string',
          'default': 'token',
          'id': '5a8c7914ae05974bc4b5d14c'
        },{
          'name': 'longShit',
          'label': 'Some long shit ',
          'type': 'string',
          'default': 'token',
          'id': '5a8c7914ae05974bc4b5d14c'
        },{
          'name': 'longShit',
          'label': 'Some long shit ',
          'type': 'string',
          'default': 'token',
          'id': '5a8c7914ae05974bc4b5d14c'
        },{
          'name': 'longShit',
          'label': 'Some long shit ',
          'type': 'string',
          'default': 'token',
          'id': '5a8c7914ae05974bc4b5d14c'
        },{
          'name': 'longShit',
          'label': 'Some long shit ',
          'type': 'string',
          'default': 'token',
          'id': '5a8c7914ae05974bc4b5d14c'
        },{
          'name': 'longShit',
          'label': 'Some long shit ',
          'type': 'string',
          'default': 'token',
          'id': '5a8c7914ae05974bc4b5d14c'
        },{
          'name': 'longShit',
          'label': 'Some long shit ',
          'type': 'string',
          'default': 'token',
          'id': '5a8c7914ae05974bc4b5d14c'
        },{
          'name': 'longShit',
          'label': 'Some long shit ',
          'type': 'string',
          'default': 'token',
          'id': '5a8c7914ae05974bc4b5d14c'
        },{
          'name': 'longShit',
          'label': 'Some long shit ',
          'type': 'string',
          'default': 'token',
          'id': '5a8c7914ae05974bc4b5d14c'
        },
      ],
      'id': '5a8c7914ae05974bc4b5d14d',

      '__v': 0
    }
  ];
}