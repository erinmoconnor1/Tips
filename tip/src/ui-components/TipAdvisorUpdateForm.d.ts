/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TipAdvisorUpdateFormInputValues = {
    Date?: string;
    Employees?: string;
    FRIENDLINESS_ATTITUDE?: number;
    TIMELINESS_OF_SERVICE?: number;
    TABLE_MAINT?: number;
    DINING_EXP?: number;
    totalCost?: number;
    totalTip?: number;
};
export declare type TipAdvisorUpdateFormValidationValues = {
    Date?: ValidationFunction<string>;
    Employees?: ValidationFunction<string>;
    FRIENDLINESS_ATTITUDE?: ValidationFunction<number>;
    TIMELINESS_OF_SERVICE?: ValidationFunction<number>;
    TABLE_MAINT?: ValidationFunction<number>;
    DINING_EXP?: ValidationFunction<number>;
    totalCost?: ValidationFunction<number>;
    totalTip?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TipAdvisorUpdateFormOverridesProps = {
    TipAdvisorUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Date?: PrimitiveOverrideProps<TextFieldProps>;
    Employees?: PrimitiveOverrideProps<TextFieldProps>;
    FRIENDLINESS_ATTITUDE?: PrimitiveOverrideProps<TextFieldProps>;
    TIMELINESS_OF_SERVICE?: PrimitiveOverrideProps<TextFieldProps>;
    TABLE_MAINT?: PrimitiveOverrideProps<TextFieldProps>;
    DINING_EXP?: PrimitiveOverrideProps<TextFieldProps>;
    totalCost?: PrimitiveOverrideProps<TextFieldProps>;
    totalTip?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TipAdvisorUpdateFormProps = React.PropsWithChildren<{
    overrides?: TipAdvisorUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    tipAdvisor?: any;
    onSubmit?: (fields: TipAdvisorUpdateFormInputValues) => TipAdvisorUpdateFormInputValues;
    onSuccess?: (fields: TipAdvisorUpdateFormInputValues) => void;
    onError?: (fields: TipAdvisorUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TipAdvisorUpdateFormInputValues) => TipAdvisorUpdateFormInputValues;
    onValidate?: TipAdvisorUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TipAdvisorUpdateForm(props: TipAdvisorUpdateFormProps): React.ReactElement;
