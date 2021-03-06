
export default initializeTransforms;
import { BooleanTransform, DateTransform, StringTransform, NumberTransform } from "ember-data/-private/transforms";

/**
  Configures a registry for use with Ember-Data
  transforms.

  @method initializeTransforms
  @param {Ember.Registry} registry
*/
function initializeTransforms(registry) {
  registry.register('transform:boolean', BooleanTransform);
  registry.register('transform:date', DateTransform);
  registry.register('transform:number', NumberTransform);
  registry.register('transform:string', StringTransform);
}