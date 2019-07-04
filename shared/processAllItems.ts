import { IDeliveryClient } from 'kentico-cloud-delivery';
import { storeReferenceDataToBlobStorage } from './external/blobManager';
import { getApiItems } from './external/kenticoCloudClient';
import { Operation } from './external/models';
import { getProcessedData } from './processing/getProcessedData';
import { IPreprocessedData } from './types/dataModels';

export const processAllItems = async (
    deliveryClientGetter: () => IDeliveryClient,
    operation: Operation,
) => {
    const response = await getApiItems(deliveryClientGetter);

    const data = getProcessedData(
        response.items,
        response.linkedItems,
        operation);

    data.forEach((blob: IPreprocessedData) => storeReferenceDataToBlobStorage(blob, operation));

    return data;
};