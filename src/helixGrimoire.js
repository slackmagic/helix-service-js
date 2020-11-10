import HelixService from "./helixService";

const SUPPORTS_BY_TYPE = "/api/itemstore/supports/by-type/";
const TYPE_BY_ID = "/api/itemstore/types/";
const ITEM_ADD = "/api/itemstore/items";
const ITEM_BY_TYPE = "/api/itemstore/items/by-type/";
const ITEM_BY_SUPPORT = "/api/itemstore/items/by-support/";
const ITEM_BY_COLLECTION = "/api/itemstore/items/by-collection/";
const COLLECTION_LIST = "/api/itemstore/collections";
const TYPE_LIST = "/api/itemstore/types";
const ITEM_BY_UUID = "/api/itemstore/items/";
const COLLECTION_BY_UUID = "/api/itemstore/collections/";
const COLLECTION_ADD = "/api/itemstore/collections";
const REFERENCE_SEARCH = "/api/itemstore/references/search/";
const REFERENCE_ADD = "/api/itemstore/references";

const HelixItemstore = {

    typeById(type, callback) {
        return HelixService.getWithAuth(TYPE_BY_ID + type, null);
    },

    supportsByType(type, callback) {
        return HelixService.getWithAuth(SUPPORTS_BY_TYPE + type, null);
    },

    itemsByType(type, callback) {
        return HelixService.getWithAuth(ITEM_BY_TYPE + type, null);
    },

    itemsByCollection(collection, callback) {
        return HelixService.getWithAuth(ITEM_BY_COLLECTION + collection, null);
    },

    itemsBySupport(support, callback) {
        return HelixService.getWithAuth(ITEM_BY_SUPPORT + support, null);
    },

    itemByUuid(uuid, callback) {
        return HelixService.getWithAuth(ITEM_BY_UUID + uuid, null);
    },

    collectionList(callback) {
        return HelixService.getWithAuth(COLLECTION_LIST, null);
    },

    typeList(callback) {
        return HelixService.getWithAuth(TYPE_LIST, null);
    },

    collectionByUuid(uuid, callback) {
        return HelixService.getWithAuth(COLLECTION_BY_UUID + uuid, null);
    },

    newCollection(collection, callback) {
        return HelixService.postWithAuth(COLLECTION_ADD, JSON.stringify(collection), null);
    },

    updateCollection(collection, callback) {
        return HelixService.putWithAuth(COLLECTION_ADD, JSON.stringify(collection), null);
    },

    newReference(reference, callback) {
        return HelixService.postWithAuth(REFERENCE_ADD, JSON.stringify(reference), null);
    },

    updateReference(reference, callback) {
        return HelixService.putWithAuth(REFERENCE_ADD, JSON.stringify(reference), null);
    },

    newItem(item, callback) {
        console.log(JSON.stringify(item));
        return HelixService.postWithAuth(ITEM_ADD, JSON.stringify(item), null);
    },

    updateItem(item, callback) {
        console.log(JSON.stringify(item));
        return HelixService.putWithAuth(ITEM_ADD, JSON.stringify(item), null);
    },

    searchReference(search, callback) {
        return HelixService.getWithAuth(REFERENCE_SEARCH + encodeURI(search), null);
    }
}

export default HelixItemstore;