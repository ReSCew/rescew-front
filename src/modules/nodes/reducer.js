// import constants from './constants';

const initialState = {
  data: {
    'name': 'test',
    'label': 'Test Environment',
    'id': '5a8c7915ae05974bc4b5d14e',
    'type': 'tag',
    'values': {
      'database': {
        'host': 'localhost',
        'port': 3306
      },
      'logging': {
        'enabled': true,
        'prefix': 'the-test'
      }
    },
    'children': [
      {
        'name': 'serverMoscow',
        'label': 'Moscow Server',
        'id': '5a8c7915ae05974bc4b5d14f',
        'type': 'server',
        'values': {
          'database': {
            'host': 'localhost',
            'port': 3306
          },
          'logging': {
            'enabled': true,
            'prefix': 'the-test'
          }
        },
        'children': [
          {
            'name': 'mobile',
            'label': 'Mobile API',
            'id': '5a8c7915ae05974bc4b5d150',
            'type': 'app',
            'values': {
              'mobileAuth': {
                'tokenName': 'token'
              },
              'database': {
                'host': 'localhost',
                'port': 3306
              },
              'logging': {
                'enabled': true,
                'prefix': 'the-test'
              }
            }
          },
          {
            'name': 'imagizer',
            'label': 'Imagizer API',
            'id': '5a8c7915ae05974bc4b5d151',
            'type': 'app',
            'values': {
              'images': {
                'quality': 60
              },
              'database': {
                'host': 'localhost',
                'port': 3306
              },
              'logging': {
                'enabled': false,
                'prefix': 'the-test'
              }
            }
          }
        ]
      }
    ]
  }
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    default:
      return state;
  }
}