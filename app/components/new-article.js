import Ember from 'ember';

export default Ember.Component.extend({
  addNewArticle: false,
  actions: {
    articleFormShow() {
      this.set('addNewArticle', true);
    },

    saveArticle1() {
      var params = {
        name: this.get('name'),
        details: this.get('details'),
        website: this.get('website'),
        gif: this.get('gif')
      };
      this.set('addNewArticle', false);
      this.sendAction('saveArticle2', params);
    }
  }
});
