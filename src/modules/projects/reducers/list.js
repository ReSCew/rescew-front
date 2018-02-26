// import constants from './constants';

const initialState = {
  data: [
    {
      id: '5a8c7914ae05974bc4b5d143',
      name: 'Fooder'
    },
    {
      id: '555c7914ae05974bc4b5d444',
      name: 'My Other Project'
    },
    {
      id: '555c7914ae05974bc4b5d666',
      name: 'My Other Other Project With Pretty Fucking Terribly Unexpectedly And Against Common Sense Long Name'
    }
  ]
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    default:
      return state;
  }
}