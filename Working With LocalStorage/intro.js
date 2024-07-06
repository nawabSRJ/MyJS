// * Storing data in a localstorage : To store data in local storage, you use the "setItem()" method. This method takes in two arguments, a key and a value.
// ? syntax : localStorage.setItem(key , value)

// * Note : If the key does not exist in local storage, the "setItem()" method will create a new key and assign the given value to it. But if a key with the same name exists in local storage, it will update the value of the key with the provided value.


// * Reading data from localstorage : "getItem()", this method takes in a key as argument
// ? syntax : localStorage.getItem(key)

// * Note : If the given key exists in local storage, the method returns the value of that key. If it doesn’t, the method returns null.

// ! For storing complex data using JSON Methods : index.html 

// * Delete all date from localStorage : localStorage.clear()
// * Delete specific data using its key : localStorage.removeItem(key)