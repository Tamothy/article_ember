import Ember from 'ember';

export default Ember.Component.extend({
  isGifShowing: false,
  actions: {
    gifShow: function() {
      this.set('isGifShowing', true);
    },
    gifHide: function() {
      this.set('isGifShowing', false);
    }
  }
});
