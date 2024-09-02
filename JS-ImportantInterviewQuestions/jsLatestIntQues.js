// Convert a JS value to a JSON string.

// using inbuilt method

let jsValue = {
  obj: "value1",
  obj2: "value2",
};

let jsonString = JSON.stringify(jsValue);

console.log(jsonString);

// without using stringify

function customStringify(value) {
  if (typeof value === "string") {
    return '"' + value + '"';
  }

  if (typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }

  if (Array.isArray(value)) {
    return "[" + value.map((e) => customStringify(e)).join(",") + "]";
  }

  if (typeof value === "object") {
    let keys = Object.keys(value);

    return (
      "{" +
      keys
        .map((e) => {
          return '"' + e + '"' + ":" + customStringify(value[e]);
        })
        .join(",") +
      "}"
    );
  }
}

let abc = {
  xyz: [1, 2, false],
  test: 1,
  test: [
    {
      ab: 2,
      bc: true,
    },
  ],
};

console.log(customStringify(abc));

console.log(JSON.stringify(abc));

// Convert a JSON string back to a JS value.

function JSONtoJs(value) {}

let bcd = {
  xyz: [1, 2, false],
  test: 1,
  test: [
    {
      ab: 2,
      bc: null,
    },
  ],
};

let stringifiedVar = JSON.stringify(bcd);

console.log(stringifiedVar);

console.log(JSON.parse(stringifiedVar));

let tryVar = "false";

console.log(tryVar === "true" ? true : false);

let num = "10";

console.log(+num, +tryVar); // string will give NaN

// Merge two objects, deeply combining properties.

function isObject(key) {
  return key !== null && typeof key === "object";
}

function deeplyMergeObject(target, source) {
  if (!isObject(target)) {
    target = {};
  }

  Object.keys(source).forEach((key) => {
    if (isObject(source[key])) {
      if (Object.keys(target).includes(key) && isObject(target[key])) {
        target[key] = deeplyMergeObject(target[key], source[key]);
      } else {
        target[key] = deeplyMergeObject({}, source[key]);
      }
    } else {
      target[key] = source[key];
    }
  });

  return target;
}

// Example usage:
const obj1 = {
  a: 1,
  b: {
    c: 2,
    d: 3,
  },
};

const obj2 = {
  b: {
    c: 4,
    e: 5,
  },
  f: 6,
};

console.log(deeplyMergeObject(obj1, obj2));

// Deep freeze an object, preventing any changes.

let obj5 = {
  name: "prakash",
  lname: "singh",
  age: 2,
};

Object.defineProperty(obj5, "name", {
  writable: false,
  configurable: false,
});

// Object.freeze(obj5)

obj5.name = "changed";
obj5.age = 20;

console.log(obj5);

function deepFreeze(obj) {
  // Retrieve the property names defined on obj
  let propNames = Object.getOwnPropertyNames(obj);

  // Freeze properties before freezing self
  propNames.forEach((name) => {
    let prop = obj[name];

    // If prop is an object, freeze it recursively
    if (typeof prop === "object" && prop !== null) {
      deepFreeze(prop);
    }
  });

  // Freeze self (no-op if already frozen)
  return Object.freeze(obj);
}

// Example usage:
let obj = {
  internal: {
    a: 42,
    nested: {
      b: "hello",
    },
  },
};

deepFreeze(obj);

// Object.freeze(obj) //Remember this doing just this will never freeze nested objects that's why we need to use recursive approach

// Attempting to modify the properties will now fail silently or throw an error in strict mode
obj.internal.a = 100; // This will not change the internal.a property
obj.internal.nested.b = "world"; // This will not change the internal.nested.b property

console.log(obj.internal.a); // Output: 42
console.log(obj.internal.nested.b); // Output: hello

// deeply freeze paticular name in object

function deepFreezeParticularName(obj, keyName) {
    if (obj !== null && typeof obj === "object") {
        if (Object.keys(obj).includes(keyName)) {
            Object.defineProperty(obj, keyName, {
                writable: false,
                configurable: false
            });
        }
        
        Object.keys(obj).forEach((key) => {
            deepFreezeParticularName(obj[key], keyName);
        });
    }
}

// Example usage:
let obj6 = {
    internal: {
        name: "value",
        nested: {
            name: "innerValue"
        }
    }
};

deepFreezeParticularName(obj6, "name");

// Attempting to modify the name properties will now fail silently or throw an error in strict mode
obj6.internal.name = "newValue"; // This will not change internal.name
obj6.internal.nested.name = "newInnerValue"; // This will not change nested.name

console.log(obj6.internal.name); // Output: "value"
console.log(obj6.internal.nested.name); // Output: "innerValue"

// Write a polyfill for `typeof to return the correct type.

Object.prototype.typeOf = () => {
    return Object.prototype.toString.call(this)
}

console.log([1, 2, 3].typeOf())

