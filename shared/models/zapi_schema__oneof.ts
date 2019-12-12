import { ContentItem, Elements } from 'kentico-cloud-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.0.0'
 * Timestamp: Fri Nov 29 2019 12:13:08 GMT+0100 (GMT+01:00)
 *
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class ZapiSchemaOneof extends ContentItem {
  public discriminator: Elements.RichTextElement;
  public commonSchemaObjectPropertyElementsWriteonly: Elements.MultipleChoiceElement;
  public commonSchemaObjectPropertyElementsDeprecated: Elements.MultipleChoiceElement;
  public apiReference: Elements.TaxonomyElement;
  public commonSchemaObjectPropertyElementsReadonly: Elements.MultipleChoiceElement;
  public commonSchemaElementsExample: Elements.TextElement;
  public commonSchemaElementsDescription: Elements.RichTextElement;
  public schemas: Elements.RichTextElement;
  public commonSchemaElementsName: Elements.TextElement;
  public commonSchemaObjectPropertyElementsNullable: Elements.MultipleChoiceElement;
  constructor() {
    super({
      propertyResolver: ((elementName: string) => {
        if (elementName === 'common_schema_object_property_elements__writeonly') {
          return 'commonSchemaObjectPropertyElementsWriteonly';
        }
        if (elementName === 'common_schema_object_property_elements__deprecated') {
          return 'commonSchemaObjectPropertyElementsDeprecated';
        }
        if (elementName === 'api_reference') {
          return 'apiReference';
        }
        if (elementName === 'common_schema_object_property_elements__readonly') {
          return 'commonSchemaObjectPropertyElementsReadonly';
        }
        if (elementName === 'common_schema_elements__example') {
          return 'commonSchemaElementsExample';
        }
        if (elementName === 'common_schema_elements__description') {
          return 'commonSchemaElementsDescription';
        }
        if (elementName === 'common_schema_elements__name') {
          return 'commonSchemaElementsName';
        }
        if (elementName === 'common_schema_object_property_elements__nullable') {
          return 'commonSchemaObjectPropertyElementsNullable';
        }
        return elementName;
      })
    });
  }
}
