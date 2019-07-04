import {
    ContentItem,
    Fields,
} from 'kentico-cloud-delivery';

/**
 * This class was generated by 'kentico-cloud-model-generator-utility' at Mon Jul 01 2019 14:28:20 GMT+0200 (GMT+02:00).
 *
 * Note: You can substitute 'ContentItem' type with another generated class.
 * Generator doesn't have this information available and so its up to you to define relationship between models.
 */
export class ZapiPathOperation extends ContentItem {
    public description: Fields.RichTextField;
    public codeSamples: ContentItem[];
    public path: Fields.TextField;
    public requestBody: Fields.RichTextField;
    public apiReference: Fields.TaxonomyField;
    public responses: Fields.RichTextField;
    public category: ContentItem[];
    public pathOperation: Fields.TaxonomyField;
    public deprecated: Fields.MultipleChoiceField;
    public url: Fields.UrlSlugField;
    public name: Fields.TextField;
    public parameters: ContentItem[];

    constructor() {
        super({
            propertyResolver: ((fieldName: string) => {
                if (fieldName === 'code_samples') {
                    return 'codeSamples';
                }
                if (fieldName === 'request_body') {
                    return 'requestBody';
                }
                if (fieldName === 'api_reference') {
                    return 'apiReference';
                }
                if (fieldName === 'path_operation') {
                    return 'pathOperation';
                }
                return fieldName;
            }),
        });
    }
}