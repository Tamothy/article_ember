import Ember from 'ember';

export default Ember.Component.extend({
  updateArticleForm: false,
  actions: {
    updateArticleForm() {
      this.set('updateArticleForm', true);
    },
    update(article) {
      var params = {
          name: this.get('name'),
          details: this.get('details'),
          website: this.get('website'),
          gif: this.get('gif')
      };
      this.set('updateArticleForm', false);
      this.sendAction('update', article, params);
    }
  }
});
