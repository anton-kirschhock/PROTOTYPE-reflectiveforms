import { OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import * as decorator from './formelement.decorator';

export class DynForms {

    static buildFromType<T>(model: T, formBuilder: FormBuilder, usePropertyValues: boolean = true): FormGroup {
        const buildModel = {};
        Object.keys(model).forEach(key => {
            const metaData = decorator.getMetadata(model, key);
            if (metaData.factory === undefined) { // when there is no factory
                if (metaData.isNested) { // when theproperty is nested
                    buildModel[key] = DynForms.buildFromType(model[key], formBuilder, usePropertyValues);
                } else { // else normal flow
                    if (metaData.validators === undefined || metaData.validators.length === 0) { // when there are no validators
                        buildModel[key] = (usePropertyValues ? model[key] : metaData.defaultValue);
                    } else {
                        buildModel[key] = [(usePropertyValues ? model[key] : metaData.defaultValue), ...metaData.validators];
                    }
                }
            } else {
                buildModel[key] = metaData.factory(model[key]);
            }
        });
        return formBuilder.group(buildModel);
    }
}