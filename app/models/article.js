import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  details: DS.attr(),
  website: DS.attr(),
  gif: DS.attr(),
});
