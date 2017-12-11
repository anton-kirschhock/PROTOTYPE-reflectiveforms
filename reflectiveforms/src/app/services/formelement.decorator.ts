import { Validator } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import 'reflect-metadata';
import { ValidatorFn } from "@angular/forms";
const metadataKey = "formElement";
const designType = 'design:type';


export interface IFormMetadata<T> {
    validators?: ValidatorFn[];
    factory?: (value: any) => FormGroup;
    isNested: boolean;
    defaultValue: T;
}

export function FormElement<T>(defaultValue:T, validators?: ValidatorFn[], factory?: (value: any) => FormGroup) {
    return Reflect.metadata(metadataKey, <IFormMetadata<T>>{
        validators: validators,
        factory: factory,
        isNested: false,
        defaultValue: defaultValue
    });
}

export function NestedFormElement() {
    return Reflect.metadata(metadataKey, <IFormMetadata<any>>{
        isNested: true,
        defaultValue: null
    });
}

export function getMetadata<T>(target: any, property: any): IFormMetadata<T> {
    return Reflect.getMetadata(metadataKey, target, property);
}