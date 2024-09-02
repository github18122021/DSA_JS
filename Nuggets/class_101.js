

class class_01 {
    obj_key_01 = "obj_key_01";
    obj_key_02 = "obj_key_02";
    field_03 = "field_03";
    #pvt_field_01 = "pvt_field_01";
    _protected_field_01 = "protected_field_01";

    constructor() {
        this.last_key = "last_key";
        this.#pvt_field_01 = "pvt_field_changed";

        // below line will throw error
        // this.#pvt_field_02 = "pvt_field_02";
        return this;
    }

    method_01() {
        console.log("method_01");
        return "method_01";
    }

    method_02()  {
        return this;
    }

    method_03() {
        return this.#pvt_field_01;
    }

    static method_04() {
        return "method_04";
    }

    set value_01(value) {
        this.obj_key_01 = value;
    }

    get value_01() {
        return this.obj_key_01;
    }
}

let obj_01 = new class_01();
console.log(obj_01);

console.log(obj_01.method_01());

console.log(class_01.prototype.method_01());

console.log(obj_01.obj_key_01);
console.log(obj_01.obj_key_02);
console.log(obj_01.field_03);

console.log(obj_01.method_02());
console.log(obj_01.method_03());

console.log(class_01.method_04());

console.log(obj_01.value_01);
console.log(obj_01.value_01 = "value_01");

console.log(obj_01);

// protected fields are accessible
for(let key in obj_01) {
    console.log(key);
}