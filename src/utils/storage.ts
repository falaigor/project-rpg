export function storageAvaliable(type: string): boolean {
  try {
    var storage = (window as { [key: string]: any })[type],
      x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return false;
  }
}
